import { useState } from 'react';
import { TkxToggle } from 'tekivex-ui';
import type { Story } from '../src/types';

function ToggleStory(p: Record<string, any>) {
  const [checked, setChecked] = useState(true);
  return (
    <TkxToggle
      checked={checked}
      onChange={setChecked}
      label={p.label}
      size={p.size}
      hideLabel={p.hideLabel}
      disabled={p.disabled}
    />
  );
}

export const toggle: Story = {
  name: 'TkxToggle',
  description: 'Switch-style boolean control (role="switch").',
  controls: {
    label: { type: 'text', default: 'Email notifications' },
    size: { type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
    hideLabel: { type: 'boolean', default: false },
    disabled: { type: 'boolean', default: false },
  },
  render: (p) => <ToggleStory {...p} />,
};
