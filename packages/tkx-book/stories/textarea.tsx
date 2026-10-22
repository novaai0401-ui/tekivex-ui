import { TkxTextarea } from 'tekivex-ui';
import type { Story } from '../src/types';

export const textarea: Story = {
  name: 'TkxTextarea',
  description: 'Multi-line input with auto-resize, character counter and Unicode-safe sanitisation.',
  controls: {
    label: { type: 'text', default: 'Message' },
    placeholder: { type: 'text', default: 'Tell us what happened…' },
    hint: { type: 'text', default: '' },
    error: { type: 'text', default: '' },
    isInvalid: { type: 'boolean', default: false },
    isRequired: { type: 'boolean', default: false },
    autoResize: { type: 'boolean', default: true },
    minRows: { type: 'number', default: 3, min: 1, max: 10 },
    maxRows: { type: 'number', default: 8, min: 1, max: 20 },
    showCount: { type: 'boolean', default: true },
    maxLength: { type: 'number', default: 200, min: 10, max: 2000 },
    disabled: { type: 'boolean', default: false },
  },
  render: (p) => (
    <div style={{ minWidth: 360 }}>
      <TkxTextarea
        label={p.label}
        placeholder={p.placeholder}
        hint={p.hint || undefined}
        error={p.error || undefined}
        isInvalid={p.isInvalid}
        isRequired={p.isRequired}
        autoResize={p.autoResize}
        minRows={p.minRows}
        maxRows={p.maxRows}
        showCount={p.showCount}
        maxLength={p.maxLength}
        disabled={p.disabled}
      />
    </div>
  ),
};
