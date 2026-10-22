import { TkxSkeleton } from 'tekivex-ui';
import type { Story } from '../src/types';

export const skeleton: Story = {
  name: 'TkxSkeleton',
  description: 'Loading placeholder — text lines, circles or rectangles, pulse / wave animation.',
  controls: {
    variant: { type: 'select', options: ['text', 'circular', 'rectangular'], default: 'text' },
    animation: { type: 'select', options: ['pulse', 'wave', 'none'], default: 'pulse' },
    lines: { type: 'number', default: 3, min: 1, max: 8 },
    width: { type: 'text', default: '320px' },
    height: { type: 'text', default: '' },
  },
  render: (p) => (
    <div style={{ minWidth: 340 }}>
      <TkxSkeleton
        variant={p.variant}
        animation={p.animation === 'none' ? false : p.animation}
        lines={p.lines}
        width={p.width || undefined}
        height={p.height || (p.variant === 'circular' ? 48 : p.variant === 'rectangular' ? 120 : undefined)}
      />
    </div>
  ),
};
