import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TkxBadge } from '../src/components/TkxBadge';
import { ThemeProvider, quantumDark } from '../src/themes';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={quantumDark}>{children}</ThemeProvider>;
}

describe('TkxBadge', () => {
  // D13: the foreground must not be hard white on a var() background; the
  // component is context-free, so it hands the decision to CSS.
  it('does not paint white text over the default/warning token backgrounds', () => {
    for (const variant of ['default', 'warning'] as const) {
      const { unmount } = render(<TkxBadge variant={variant}>{variant}</TkxBadge>, { wrapper: Wrapper });
      const color = screen.getByText(variant).style.color;
      expect(color).not.toMatch(/^(#fff(fff)?|rgb\(255, 255, 255\))$/i);
      unmount();
    }
  });

  it('renders children text', () => {
    render(<TkxBadge>New</TkxBadge>, { wrapper: Wrapper });
    expect(screen.getByText('New')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<TkxBadge variant="primary">Primary</TkxBadge>, { wrapper: Wrapper });
    expect(screen.getByText('Primary')).toBeInTheDocument();

    rerender(<ThemeProvider theme={quantumDark}><TkxBadge variant="danger">Danger</TkxBadge></ThemeProvider>);
    expect(screen.getByText('Danger')).toBeInTheDocument();
  });

  it('renders with different sizes', () => {
    const { container } = render(<TkxBadge size="lg">Large</TkxBadge>, { wrapper: Wrapper });
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('renders as dot variant', () => {
    const { container } = render(<TkxBadge dot>Status</TkxBadge>, { wrapper: Wrapper });
    const dot = container.querySelector('span');
    expect(dot).toBeInTheDocument();
    expect(dot).toHaveAttribute('aria-label', 'Status');
  });

  it('renders outlined style', () => {
    render(<TkxBadge outlined>Outlined</TkxBadge>, { wrapper: Wrapper });
    const badge = screen.getByText('Outlined');
    // outlined badge has border and transparent background (stored as inline style)
    expect(badge).toBeInTheDocument();
    expect((badge as HTMLElement).style.border).toMatch(/1px solid/);
  });

  it('applies pulse animation class', () => {
    const { container } = render(<TkxBadge pulse>Pulsing</TkxBadge>, { wrapper: Wrapper });
    expect(container.querySelector('span')).toBeInTheDocument();
  });
});
