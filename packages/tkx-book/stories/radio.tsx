import { useState } from 'react';
import { TkxRadio, TkxRadioGroup } from 'tekivex-ui';
import type { Story } from '../src/types';

function RadioStory(p: Record<string, any>) {
  const [value, setValue] = useState('monthly');
  return (
    <TkxRadioGroup
      name="billing"
      label={p.label}
      value={value}
      onChange={setValue}
      orientation={p.orientation}
      isDisabled={p.isDisabled}
      isInvalid={p.isInvalid}
      errorMessage={p.errorMessage || undefined}
    >
      <TkxRadio value="monthly" label="Monthly" hint="Billed every month" size={p.size} colorScheme={p.colorScheme} />
      <TkxRadio value="yearly" label="Yearly" hint="Two months free" size={p.size} colorScheme={p.colorScheme} />
      <TkxRadio value="lifetime" label="Lifetime" size={p.size} colorScheme={p.colorScheme} />
    </TkxRadioGroup>
  );
}

export const radio: Story = {
  name: 'TkxRadio / TkxRadioGroup',
  description: 'Radio buttons inside a labelled, keyboard-navigable group.',
  controls: {
    label: { type: 'text', default: 'Billing cycle' },
    orientation: { type: 'select', options: ['vertical', 'horizontal'], default: 'vertical' },
    size: { type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
    colorScheme: { type: 'select', options: ['primary', 'success', 'danger'], default: 'primary' },
    isDisabled: { type: 'boolean', default: false },
    isInvalid: { type: 'boolean', default: false },
    errorMessage: { type: 'text', default: '' },
  },
  render: (p) => <RadioStory {...p} />,
};
