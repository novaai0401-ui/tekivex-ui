import { TkxToastProvider, TkxButton, useToast } from 'tekivex-ui';
import type { Story } from '../src/types';

function Trigger(p: Record<string, any>) {
  const t = useToast();
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <TkxButton
        variant="solid"
        onClick={() =>
          t.toast({
            title: p.title,
            description: p.description || undefined,
            variant: p.variant,
            duration: p.duration,
            action: p.withAction ? { label: 'Undo', onClick: () => console.log('undo') } : undefined,
          })
        }
      >
        Show toast
      </TkxButton>
      <TkxButton variant="ghost" onClick={() => t.dismissAll()}>Dismiss all</TkxButton>
    </div>
  );
}

export const toast: Story = {
  name: 'TkxToast',
  description: 'Toast notifications via TkxToastProvider + useToast(); six positions, five variants.',
  controls: {
    position: {
      type: 'select',
      options: ['top-right', 'top-left', 'top-center', 'bottom-right', 'bottom-left', 'bottom-center'],
      default: 'top-right',
    },
    variant: { type: 'select', options: ['default', 'success', 'danger', 'warning', 'info'], default: 'default' },
    title: { type: 'text', default: 'Invoice sent' },
    description: { type: 'text', default: 'INV-2041 was emailed to the customer.' },
    duration: { type: 'number', default: 4000, min: 1000, max: 15000, step: 500 },
    withAction: { type: 'boolean', default: true },
  },
  // `isolated` keeps this provider's store separate from any app-level one.
  render: (p) => (
    <TkxToastProvider key={p.position} position={p.position} isolated>
      <Trigger {...p} />
    </TkxToastProvider>
  ),
};
