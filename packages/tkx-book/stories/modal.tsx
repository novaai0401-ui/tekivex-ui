import { useState } from 'react';
import { TkxModal, TkxButton } from 'tekivex-ui';
import type { Story } from '../src/types';

function ModalStory(p: Record<string, any>) {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <TkxButton variant="solid" onClick={() => setOpen(true)}>
        Open modal
      </TkxButton>
      <TkxModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        title={p.title}
        size={p.size}
        closeOnOverlayClick={p.closeOnOverlayClick}
        closeOnEscape={p.closeOnEscape}
        footer={
          p.showFooter ? (
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <TkxButton variant="ghost" onClick={() => setOpen(false)}>Cancel</TkxButton>
              <TkxButton variant="solid" colorScheme="danger" onClick={() => setOpen(false)}>Delete</TkxButton>
            </div>
          ) : undefined
        }
      >
        <p style={{ margin: 0 }}>
          This action cannot be undone. Focus is trapped inside the dialog and
          returned to the trigger on close.
        </p>
      </TkxModal>
    </>
  );
}

export const modal: Story = {
  name: 'TkxModal',
  description: 'Focus-trapped dialog with sizes, optional footer and overlay/escape dismissal.',
  controls: {
    title: { type: 'text', default: 'Delete project?' },
    size: { type: 'select', options: ['sm', 'md', 'lg', 'full'], default: 'md' },
    closeOnOverlayClick: { type: 'boolean', default: true },
    closeOnEscape: { type: 'boolean', default: true },
    showFooter: { type: 'boolean', default: true },
  },
  render: (p) => <ModalStory {...p} />,
};
