import { TkxAvatar } from 'tekivex-ui';
import type { Story } from '../src/types';

export const avatar: Story = {
  name: 'TkxAvatar',
  description: 'User avatar with image / initials fallback, shape and presence status.',
  controls: {
    useImage: { type: 'boolean', default: false },
    initials: { type: 'text', default: 'AP' },
    alt: { type: 'text', default: 'Asha Patel' },
    size: { type: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'], default: 'md' },
    shape: { type: 'select', options: ['circle', 'square'], default: 'circle' },
    status: { type: 'select', options: ['none', 'online', 'offline', 'away', 'busy'], default: 'online' },
  },
  render: (p) => (
    <TkxAvatar
      src={p.useImage ? 'https://i.pravatar.cc/128?img=5' : undefined}
      initials={p.initials}
      alt={p.alt}
      size={p.size}
      shape={p.shape}
      status={p.status === 'none' ? undefined : p.status}
    />
  ),
};
