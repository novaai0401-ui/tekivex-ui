import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TkxButton } from '../src/components/TkxButton';
import { ThemeProvider } from '../src/themes';
import { quantumDark, auroraLight } from '../src/themes';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={quantumDark}>{children}</ThemeProvider>;
}

describe('TkxButton', () => {
  // D1: the accent must be resolved to a literal hex before the contrast
  // check, otherwise every scheme gets white text.
  it('solid warning uses dark text on the light theme warning token', () => {
    render(
      <ThemeProvider theme={auroraLight}>
        <TkxButton colorScheme="warning">Warn</TkxButton>
      </ThemeProvider>,
    );
    expect(screen.getByRole('button').style.color).toBe('rgb(0, 0, 0)');
  });

  it('solid secondary keeps white text on the light theme secondary token', () => {
    render(
      <ThemeProvider theme={auroraLight}>
        <TkxButton colorScheme="secondary">Go</TkxButton>
      </ThemeProvider>,
    );
    expect(screen.getByRole('button').style.color).toBe('rgb(255, 255, 255)');
  });

  it('renders children', () => {
    render(<TkxButton>Click me</TkxButton>, { wrapper: Wrapper });
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    const onClick = vi.fn();
    render(<TkxButton onClick={onClick}>Press</TkxButton>, { wrapper: Wrapper });
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    const onClick = vi.fn();
    render(<TkxButton disabled onClick={onClick}>Disabled</TkxButton>, { wrapper: Wrapper });
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('shows loading spinner and aria-busy when isLoading', () => {
    render(<TkxButton isLoading loadingText="Saving...">Save</TkxButton>, { wrapper: Wrapper });
    const btn = screen.getByRole('button');
    expect(btn).toHaveAttribute('aria-busy', 'true');
    expect(screen.getByText('Saving...')).toBeInTheDocument();
  });

  it('is disabled when isLoading', () => {
    render(<TkxButton isLoading>Wait</TkxButton>, { wrapper: Wrapper });
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('sanitizes string children — XSS vectors are escaped', () => {
    render(<TkxButton>{'<script>alert(1)</script>'}</TkxButton>, { wrapper: Wrapper });
    const btn = screen.getByRole('button');
    expect(btn.innerHTML).not.toContain('<script>');
  });

  it('renders with fullWidth style', () => {
    render(<TkxButton isFullWidth>Full</TkxButton>, { wrapper: Wrapper });
    const btn = screen.getByRole('button');
    expect(btn).toHaveStyle({ width: '100%' });
  });

  it('renders left and right icons', () => {
    render(
      <TkxButton leftIcon={<span data-testid="left-icon">L</span>} rightIcon={<span data-testid="right-icon">R</span>}>
        Icon Button
      </TkxButton>,
      { wrapper: Wrapper },
    );
    expect(screen.getByTestId('left-icon')).toBeInTheDocument();
    expect(screen.getByTestId('right-icon')).toBeInTheDocument();
  });
});
