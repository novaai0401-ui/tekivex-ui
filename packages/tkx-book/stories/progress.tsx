import { TkxProgress } from 'tekivex-ui';
import type { Story } from '../src/types';

export const progress: Story = {
  name: 'TkxProgress',
  description: 'Linear or circular progress indicator with optional label and value.',
  controls: {
    value: { type: 'number', default: 50, min: 0, max: 100 },
    variant: { type: 'select', options: ['linear', 'circular'], default: 'linear' },
    size: { type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
    label: { type: 'text', default: 'Uploading' },
    showValue: { type: 'boolean', default: true },
    color: { type: 'color', default: '' },
  },
  render: (p) => (
    <div style={{ minWidth: 320 }}>
      <TkxProgress
        value={p.value}
        variant={p.variant}
        size={p.size}
        label={p.label}
        showValue={p.showValue}
        color={p.color || undefined}
      />
    </div>
  ),
};
