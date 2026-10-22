import { describe, it, expect, vi } from 'vitest';
import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { TkxCheckbox } from '../src/components/TkxCheckbox';
import { ThemeProvider, quantumDark } from '../src/themes';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={quantumDark}>{children}</ThemeProvider>;
}

describe('TkxCheckbox', () => {
  it('renders with a label', () => {
    render(<TkxCheckbox label="Accept terms" />, { wrapper: Wrapper });
    expect(screen.getByText('Accept terms')).toBeInTheDocument();
  });

  it('renders a checkbox input', () => {
    render(<TkxCheckbox label="Check me" />, { wrapper: Wrapper });
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('calls onChange when clicked', () => {
    const onChange = vi.fn();
    render(<TkxCheckbox label="Toggle" onChange={onChange} />, { wrapper: Wrapper });
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  // D3: the documented contract is boolean-first; the event rides second.
  it('onChange receives (checked: boolean, event)', () => {
    const onChange = vi.fn();
    render(<TkxCheckbox label="Toggle" onChange={onChange} />, { wrapper: Wrapper });
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onChange.mock.calls[0][0]).toBe(true);
    expect(onChange.mock.calls[0][1]).toMatchObject({ target: expect.anything() });
  });

  it('controlled usage with onChange={setChecked} can uncheck', () => {
    function Controlled() {
      const [checked, setChecked] = useState(false);
      return <TkxCheckbox label="Ctl" checked={checked} onChange={setChecked} />;
    }
    render(<Controlled />, { wrapper: Wrapper });
    const box = screen.getByRole('checkbox');
    fireEvent.click(box);
    expect(box).toBeChecked();
    fireEvent.click(box);
    expect(box).not.toBeChecked();
  });

  it('sets aria-checked="mixed" and input.indeterminate when isIndeterminate', () => {
    render(<TkxCheckbox label="Mixed" isIndeterminate />, { wrapper: Wrapper });
    const box = screen.getByRole('checkbox') as HTMLInputElement;
    expect(box).toHaveAttribute('aria-checked', 'mixed');
    expect(box.indeterminate).toBe(true);
  });

  it('does not set aria-checked when not indeterminate', () => {
    render(<TkxCheckbox label="Plain" />, { wrapper: Wrapper });
    expect(screen.getByRole('checkbox')).not.toHaveAttribute('aria-checked');
  });

  it('reflects checked state', () => {
    render(<TkxCheckbox label="Checked" checked onChange={() => {}} />, { wrapper: Wrapper });
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('is disabled when disabled prop is set', () => {
    render(<TkxCheckbox label="Disabled" disabled />, { wrapper: Wrapper });
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('sets aria-invalid when isInvalid is true', () => {
    render(<TkxCheckbox label="Invalid" isInvalid />, { wrapper: Wrapper });
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('displays error message', () => {
    render(<TkxCheckbox label="Terms" isInvalid errorMessage="Required" />, { wrapper: Wrapper });
    expect(screen.getByRole('alert')).toHaveTextContent('Required');
  });
});

// ── ARIA regression: aria-describedby must never dangle ─────────────────────
describe('TkxCheckbox — aria-describedby mirrors the render gates', () => {
  const idrefs = (el: Element) =>
    (el.getAttribute('aria-describedby') ?? '').split(/\s+/).filter(Boolean);

  it('omits describedby entirely when there is no hint and no error', () => {
    render(<TkxCheckbox label="Plain" />, { wrapper: Wrapper });
    expect(screen.getByRole('checkbox')).not.toHaveAttribute('aria-describedby');
  });

  it('does not reference an error id when isInvalid has no errorMessage', () => {
    const { container } = render(<TkxCheckbox label="Terms" isInvalid />, { wrapper: Wrapper });
    const input = screen.getByRole('checkbox');
    for (const ref of idrefs(input)) {
      expect(container.ownerDocument.getElementById(ref)).not.toBeNull();
    }
    expect(idrefs(input)).toHaveLength(0);
  });

  it('drops the hint idref once an error replaces the hint', () => {
    const { container } = render(
      <TkxCheckbox label="Terms" hint="Read them" isInvalid errorMessage="Required" />,
      { wrapper: Wrapper },
    );
    const input = screen.getByRole('checkbox');
    const refs = idrefs(input);
    expect(refs).toHaveLength(1);
    expect(refs[0]).toMatch(/-error$/);
    expect(container.ownerDocument.getElementById(refs[0])).not.toBeNull();
    expect(container.ownerDocument.querySelector('[id$="-hint"]')).toBeNull();
  });

  it('every describedby idref resolves for the hint-only case', () => {
    const { container } = render(<TkxCheckbox label="Terms" hint="Read them" />, {
      wrapper: Wrapper,
    });
    const refs = idrefs(screen.getByRole('checkbox'));
    expect(refs).toHaveLength(1);
    expect(container.ownerDocument.getElementById(refs[0])).not.toBeNull();
  });
});
