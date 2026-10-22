import { useState } from 'react';
import { TkxDrawer, TkxButton } from 'tekivex-ui';
import type { Story } from '../src/types';

function DrawerStory(p: Record<string, any>) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <TkxButton variant="solid" onClick={() => setOpen(true)}>
        Open drawer
      </TkxButton>
      <TkxDrawer
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        placement={p.placement}
        size={p.size}
        title={p.title || undefined}
        ariaLabel={p.title ? undefined : 'Filters'}
        closeOnOverlayClick={p.closeOnOverlayClick}
        closeOnEsc={p.closeOnEsc}
        footer={
          p.showFooter ? (
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <TkxButton variant="ghost" onClick={() => setOpen(false)}>Reset</TkxButton>
              <TkxButton variant="solid" onClick={() => setOpen(false)}>Apply</TkxButton>
            </div>
          ) : undefined
        }
      >
        <p style={{ margin: 0 }}>
          Drawer body. Change <code>placement</code> and <code>size</code> in the
          controls, then reopen.
        </p>
      </TkxDrawer>
    </>
  );
}

export const drawer: Story = {
  name: 'TkxDrawer',
  description: 'Edge-anchored panel (left / right / top / bottom) with focus trap and optional footer.',
  controls: {
    placement: { type: 'select', options: ['right', 'left', 'top', 'bottom'], default: 'right' },
    size: { type: 'select', options: ['sm', 'md', 'lg', 'xl', 'full'], default: 'md' },
    title: { type: 'text', default: 'Filters' },
    closeOnOverlayClick: { type: 'boolean', default: true },
    closeOnEsc: { type: 'boolean', default: true },
    showFooter: { type: 'boolean', default: true },
  },
  render: (p) => <DrawerStory {...p} />,
};
