import { forwardRef, type HTMLAttributes } from 'react';
import { cssTokens } from '../themes/cssTokens';
import { getAccessibleForeground } from '../engine/wcag';
import { sanitizeString } from '../engine/security';

const HEX_RE = /^#[0-9a-fA-F]{6}$|^#[0-9a-fA-F]{3}$/;

/**
 * Black or white, whichever contrasts more with `bg`. A literal hex is decided
 * in JS; a `var()` reference is decided by CSS (relative colour syntax,
 * WCAG luminance threshold L = 0.179), which also tracks live theme changes.
 */
function contrastForeground(bg: string): string {
  if (HEX_RE.test(bg.trim())) return getAccessibleForeground(bg);
  const lum = `(0.2126 * pow(r / 255, 2.2) + 0.7152 * pow(g / 255, 2.2) + 0.0722 * pow(b / 255, 2.2))`;
  const ch = `clamp(0, (0.179 - ${lum}) * 100000, 255)`;
  return `rgb(from ${bg} ${ch} ${ch} ${ch})`;
}
import { tkx, cx } from '../engine/tkx';

export type BadgeVariant = 'default' | 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface TkxBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  pulse?: boolean;
  outlined?: boolean;
}

const SIZE_CLASS: Record<BadgeSize, string> = {
  sm: 'text-xs px-1.5 py-[2px] min-h-[16px]',
  md: 'text-xs px-2 py-[3px] min-h-[20px]',
  lg: 'text-sm px-3 py-1 min-h-[24px]',
};

const DOT_SIZE: Record<BadgeSize, string> = { sm: 'size-[6px]', md: 'size-2', lg: 'size-2.5' };

export const TkxBadge = forwardRef<HTMLSpanElement, TkxBadgeProps>(
  ({ variant = 'default', size = 'md', dot = false, pulse = false, outlined = false, children, className, style, ...rest }, ref) => {

    const colorMap: Record<BadgeVariant, string> = {
      default: cssTokens.border, primary: cssTokens.primary, secondary: cssTokens.secondary,
      danger: cssTokens.danger, warning: cssTokens.warning, success: cssTokens.success, info: cssTokens.info,
    };
    const bgColor = colorMap[variant] || '#666666';
    // TkxBadge is RSC-safe (no theme context), so the background is only ever
    // known as a `var(--tkx-*)` reference that JS contrast maths cannot read
    // (it decoded as black → white text on every variant: 1.42:1 on the light
    // border token, 2.37:1 on the light warning token). Let CSS pick black or
    // white from the resolved token's luminance instead.
    const textColor = contrastForeground(bgColor);

    const safeChildren = typeof children === 'string' ? sanitizeString(children) : children;

    if (dot) {
      return (
        <span
          ref={ref}
          aria-label={typeof children === 'string' ? sanitizeString(children) : undefined}
          className={cx(tkx('inline-block rounded-full', DOT_SIZE[size], pulse && 'animate-pulse'), className)}
          style={{ backgroundColor: bgColor, ...style }}
          {...rest}
        />
      );
    }

    return (
      <span
        ref={ref}
        className={cx(tkx(
          'inline-flex items-center justify-center rounded-full font-semibold font-sans tracking-wide',
          SIZE_CLASS[size],
          pulse && 'animate-pulse',
        ), className)}
        style={{
          backgroundColor: outlined ? 'transparent' : bgColor,
          color: outlined ? bgColor : textColor,
          border: outlined ? `1px solid ${bgColor}` : 'none',
          ...style,
        }}
        {...rest}
      >
        {safeChildren}
      </span>
    );
  },
);

TkxBadge.displayName = 'TkxBadge';