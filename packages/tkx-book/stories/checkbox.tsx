import { useState } from 'react';
import { TkxCheckbox } from 'tekivex-ui';
import type { Story } from '../src/types';

function CheckboxStory(p: Record<string, any>) {
  const [checked, setChecked] = useState(true);
  return (
    <TkxCheckbox
      label={p.label}
      hint={p.hint || undefined}
      errorMessage={p.errorMessage || undefined}
      size={p.size}
      colorScheme={p.colorScheme}
      isInvalid={p.isInvalid}
      isIndeterminate={p.isIndeterminate}
      disabled={p.disabled}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}

export const checkbox: Story = {
  name: 'TkxCheckbox',
  description: 'Checkbox with label, hint, indeterminate and error states.',
  controls: {
    label: { type: 'text', default: 'Accept terms and conditions' },
    hint: { type: 'text', default: '' },
    errorMessage: { type: 'text', default: '' },
    size: { type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
    colorScheme: { type: 'select', options: ['primary', 'success', 'danger', 'warning'], default: 'primary' },
    isIndeterminate: { type: 'boolean', default: false },
    isInvalid: { type: 'boolean', default: false },
    disabled: { type: 'boolean', default: false },
  },
  render: (p) => <CheckboxStory {...p} />,
};
