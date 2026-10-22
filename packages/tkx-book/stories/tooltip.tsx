import { TkxTooltip, TkxButton } from 'tekivex-ui';
import type { Story } from '../src/types';

export const tooltip: Story = {
  name: 'TkxTooltip',
  description: 'Hover / focus tooltip with four placements and open delay.',
  controls: {
    content: { type: 'text', default: 'Saves your changes (Ctrl+S)' },
    placement: { type: 'select', options: ['top', 'bottom', 'left', 'right'], default: 'top' },
    delay: { type: 'number', default: 200, min: 0, max: 2000, step: 50 },
    disabled: { type: 'boolean', default: false },
  },
  render: (p) => (
    <div style={{ padding: 60 }}>
      <TkxTooltip content={p.content} placement={p.placement} delay={p.delay} disabled={p.disabled}>
        <TkxButton variant="outline">Hover or focus me</TkxButton>
      </TkxTooltip>
    </div>
  ),
};
