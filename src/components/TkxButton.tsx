'use client';

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { useTheme } from '../themes';
import { getAccessibleForeground } from '../engine/wcag';
import { sanitizeString } from '../engine/security';
import { useReducedMotion } from '../hooks';
import { tkx, cx } from '../engine/tkx';

export type ButtonVariant = 'solid' | 'outline' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';
export type ButtonColorScheme = 'primary' | 'secondary' | 'danger' | 'warning' | 'success';

export interface TkxButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  colorScheme?: ButtonColorScheme;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isFullWidth?: boolean;
  glow?: boolean;
  /**
   * @deprecated Use the native HTML `disabled` prop instead.
   * Accepted as a forgiving alias because the rest of this component's
   * API uses `isLoading` / `isFullWidth` — consumers commonly reach for
   * `isDisabled` by analogy. Without this absorption the prop would be
   * forwarded to the DOM as a literal attribute and trigger a React
   * "Unknown prop" warning in every render.
   */
  isDisabled?: boolean;
}

const HEX_RE = /^#[0-9a-fA-F]{6}$|^#[0-9a-fA-F]{3}$/;
const VAR_FALLBACK_RE = /^var\(\s*--[\w-]+\s*,\s*([^)]+)\)$/;

/** `#abc`/`#aabbcc` → itself; `var(--x, #aabbcc)` → `#aabbcc`; anything else → undefined. */
function resolveHex(value: string | undefined): string | undefined {
  if (!value) return undefined;
  const v = value.trim();
  if (HEX_RE.test(v)) return v;
  const m = VAR_FALLBACK_RE.exec(v);
  if (m) return resolveHex(m[1]);
  return undefined;
}

/**
 * Last-resort foreground when the accent is a bare `var()` with no literal we
 * can read in JS: let CSS pick black or white from the token's relative
 * luminance (WCAG threshold L = 0.179) via relative colour syntax.
 */
function cssContrastForeground(bg: string): string {
  const lum = `(0.2126 * pow(r / 255, 2.2) + 0.7152 * pow(g / 255, 2.2) + 0.0722 * pow(b / 255, 2.2))`;
  const ch = `clamp(0, (0.179 - ${lum}) * 100000, 255)`;
  return `rgb(from ${bg} ${ch} ${ch} ${ch})`;
}

const SIZE_CLASS: Record<ButtonSize, string> = {
  sm: 'text-xs font-semibold',
  md: 'text-sm font-semibold',
  lg: 'text-base font-semibold',
  xl: 'text-lg font-semibold',
};

const SIZE_PADDING: Record<ButtonSize, string> = {
  sm: 'py-1.5 px-3',
  md: 'py-2 px-4',
  lg: 'py-2.5 px-5',
  xl: 'py-3 px-6',
};

const SIZE_MIN_H: Record<ButtonSize, string> = {
  sm: 'min-h-[32px]',
  md: 'min-h-[40px]',
  lg: 'min-h-[48px]',
  xl: 'min-h-[56px]',
};

const SPINNER_SIZE: Record<ButtonSize, number> = { sm: 14, md: 16, lg: 18, xl: 20 };

function Spinner({ size }: { size: ButtonSize }) {
  const dim = SPINNER_SIZE[size];
  return (
    <svg
      width={dim}
      height={dim}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={tkx('animate-spin shrink-0')}
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.25" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export const TkxButton = forwardRef<HTMLButtonElement, TkxButtonProps>(
  (
    {
      variant = 'solid',
      size = 'md',
      colorScheme = 'primary',
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      isFullWidth = false,
      glow = false,
      disabled,
      isDisabled: isDisabledAlias,
      children,
      className,
      style,
      ...rest
    },
    ref,
  ) => {
    // Dev-only deprecation nudge for the isDisabled alias.
    // Cast through globalThis avoids needing @types/node in a browser
    // library — bundlers (Vite/webpack/esbuild) replace
    // `process.env.NODE_ENV` at build time, and the typeof guard handles
    // any runtime where `process` is genuinely undefined.
    const __proc = (globalThis as { process?: { env?: { NODE_ENV?: string } } }).process;
    if (
      __proc?.env?.NODE_ENV !== 'production' &&
      isDisabledAlias !== undefined &&
      disabled === undefined
    ) {
      // eslint-disable-next-line no-console
      console.warn(
        '[TkxButton] `isDisabled` is not a real prop — use the native `disabled` instead. ' +
          'Accepted as an alias for compatibility; will be removed in v4.0.',
      );
    }
    const theme = useTheme();
    const reducedMotion = useReducedMotion();
    const isDisabled = disabled ?? isDisabledAlias ?? false;
    const isButtonDisabled = isDisabled || isLoading;

    const colorMap: Record<ButtonColorScheme, string> = {
      primary: theme.css.primary, secondary: theme.css.secondary,
      danger: theme.css.danger, warning: theme.css.warning, success: theme.css.success,
    };
    const accentColor = colorMap[colorScheme];
    // Contrast maths needs a literal colour. `theme.css.*` are `var(--tkx-…)`
    // references, which the WCAG engine cannot parse (they decode as black, so
    // every scheme used to get white text — 2.37:1 on the light warning token).
    // Resolve through `theme.raw` (hex) and fall back to the `var()` fallback
    // literal; a token that is a bare `var()` with no literal anywhere gets a
    // CSS-computed foreground instead.
    const accentHex = resolveHex(theme.raw?.[colorScheme]) ?? resolveHex(accentColor);
    const bgHex = resolveHex(theme.raw?.bg) ?? resolveHex(theme.css.bg);
    const textOnAccent = accentHex
      ? getAccessibleForeground(accentHex, ['#ffffff', '#000000', ...(bgHex ? [bgHex] : [])])
      : cssContrastForeground(accentColor);

    const safeChildren = typeof children === 'string' ? sanitizeString(children) : children;
    const safeLoadingText = loadingText ? sanitizeString(loadingText) : undefined;

    // Variant-specific inline styles (dynamic hex colors from theme)
    const variantStyle: React.CSSProperties = variant === 'solid'
      ? {
          backgroundColor: accentColor,
          color: textOnAccent,
          border: 'none',
          boxShadow: glow && !reducedMotion ? `0 0 20px ${accentColor}55` : undefined,
        }
      : variant === 'outline'
        ? { backgroundColor: 'transparent', color: accentColor, border: `2px solid ${accentColor}` }
        : variant === 'ghost'
          ? { backgroundColor: 'transparent', color: accentColor, border: 'none' }
          : { backgroundColor: 'transparent', color: accentColor, border: 'none', textDecoration: 'underline' };

    const base = tkx(
      'inline-flex items-center justify-center gap-2',
      'rounded-lg font-sans font-semibold',
      'select-none relative overflow-hidden',
      SIZE_CLASS[size],
      SIZE_PADDING[size],
      SIZE_MIN_H[size],
      variant !== 'link' && SIZE_MIN_H[size],
      isFullWidth && 'w-full',
      isButtonDisabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer',
      !reducedMotion && 'transition-all duration-200',
      'focus-visible:focus-ring',
    );

    return (
      <button
        ref={ref}
        aria-busy={isLoading}
        aria-disabled={isButtonDisabled}
        disabled={isButtonDisabled}
        className={cx(base, className)}
        style={{ ...variantStyle, ...style }}
        {...rest}
      >
        {isLoading ? (
          <>
            <Spinner size={size} />
            {safeLoadingText ?? safeChildren}
          </>
        ) : (
          <>
            {leftIcon && <span aria-hidden="true">{leftIcon}</span>}
            {safeChildren}
            {rightIcon && <span aria-hidden="true">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  },
);

TkxButton.displayName = 'TkxButton';