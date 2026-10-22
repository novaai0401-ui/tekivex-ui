import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { TkxRadio, TkxRadioGroup } from '../src/components/TkxRadio';
import { ThemeProvider, quantumDark } from '../src/themes';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={quantumDark}>{children}</ThemeProvider>;
}

describe('TkxRadio', () => {
  it('renders a radio group with items', () => {
    render(
      <TkxRadioGroup name="color" label="Pick a color">
        <TkxRadio label="Red" value="red" />
        <TkxRadio label="Blue" value="blue" />
      </TkxRadioGroup>,
      { wrapper: Wrapper },
    );
    expect(screen.getByRole('radiogroup')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(2);
  });

  // D4: radios must share a non-empty name to form a native group.
  it('generates a shared non-empty name when the group has none', () => {
    render(
      <TkxRadioGroup label="Plan">
        <TkxRadio label="Free" value="free" />
        <TkxRadio label="Pro" value="pro" />
      </TkxRadioGroup>,
      { wrapper: Wrapper },
    );
    const names = screen.getAllByRole('radio').map((r) => (r as HTMLInputElement).name);
    expect(names[0]).not.toBe('');
    expect(new Set(names).size).toBe(1);
  });

  it('uses the caller-provided group name when given', () => {
    render(
      <TkxRadioGroup name="plan">
        <TkxRadio label="Free" value="free" />
      </TkxRadioGroup>,
      { wrapper: Wrapper },
    );
    expect((screen.getByRole('radio') as HTMLInputElement).name).toBe('plan');
  });

  // D5: a disabled radio's hint must not be dimmed below AA.
  it('does not apply the disabled opacity to the hint text', () => {
    render(
      <TkxRadioGroup name="plan">
        <TkxRadio label="Enterprise" value="ent" disabled hint="Contact sales." />
      </TkxRadioGroup>,
      { wrapper: Wrapper },
    );
    const hint = screen.getByText('Contact sales.');
    let el: HTMLElement | null = hint;
    while (el) {
      expect(el.style.opacity === '' || Number(el.style.opacity) === 1).toBe(true);
      el = el.parentElement;
    }
    expect(hint.style.color).toContain('--tkx-textMuted');
  });

  it('renders labels for each radio', () => {
    render(
      <TkxRadioGroup name="fruit">
        <TkxRadio label="Apple" value="apple" />
        <TkxRadio label="Banana" value="banana" />
      </TkxRadioGroup>,
      { wrapper: Wrapper },
    );
    expect(screen.getByText('Apple')).toBeInTheDocument();
    expect(screen.getByText('Banana')).toBeInTheDocument();
  });

  it('calls onChange when selection changes', () => {
    const onChange = vi.fn();
    render(
      <TkxRadioGroup name="size" value="sm" onChange={onChange}>
        <TkxRadio label="Small" value="sm" />
        <TkxRadio label="Large" value="lg" />
      </TkxRadioGroup>,
      { wrapper: Wrapper },
    );
    fireEvent.click(screen.getByText('Large'));
    expect(onChange).toHaveBeenCalledWith('lg');
  });

  it('reflects selected value', () => {
    render(
      <TkxRadioGroup name="choice" value="b">
        <TkxRadio label="A" value="a" />
        <TkxRadio label="B" value="b" />
      </TkxRadioGroup>,
      { wrapper: Wrapper },
    );
    const radios = screen.getAllByRole('radio');
    expect(radios[1]).toBeChecked();
    expect(radios[0]).not.toBeChecked();
  });

  it('supports disabled state on group', () => {
    render(
      <TkxRadioGroup name="disabled" isDisabled>
        <TkxRadio label="Option" value="opt" />
      </TkxRadioGroup>,
      { wrapper: Wrapper },
    );
    expect(screen.getByRole('radio')).toBeDisabled();
  });

  it('displays error message', () => {
    render(
      <TkxRadioGroup name="err" isInvalid errorMessage="Selection required">
        <TkxRadio label="A" value="a" />
      </TkxRadioGroup>,
      { wrapper: Wrapper },
    );
    expect(screen.getByRole('alert')).toHaveTextContent('Selection required');
  });
});
