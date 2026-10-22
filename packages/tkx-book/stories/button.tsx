import { TkxButton } from 'tekivex-ui';
import type { Story } from '../src/types';

export const button: Story = {
  name: 'TkxButton',
  description: 'Primary action button — variants, sizes, color schemes, loading state.',
  controls: {
    variant: { type: 'select', options: ['solid', 'outline', 'ghost', 'link'], default: 'solid' },
    size: { type: 'select', options: ['sm', 'md', 'lg', 'xl'], default: 'md' },
    colorScheme: { type: 'select', options: ['primary', 'secondary', 'danger', 'warning', 'success'], default: 'primary' },
    label: { type: 'text', default: 'Click me' },
    isLoading: { type: 'boolean', default: false },
    disabled: { type: 'boolean', default: false },
  },
  render: (p) => (
    <TkxButton
      variant={p.variant}
      size={p.size}
      colorScheme={p.colorScheme}
      isLoading={p.isLoading}
      disabled={p.disabled}
    >
      {p.label}
    </TkxButton>
  ),
};
