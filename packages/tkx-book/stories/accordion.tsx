import { TkxAccordion } from 'tekivex-ui';
import type { Story } from '../src/types';

const ITEMS = [
  { id: 'shipping', title: 'Shipping', subtitle: '3–5 business days', content: 'Free shipping on orders over ₹999.' },
  { id: 'returns', title: 'Returns', content: '30-day no-questions-asked returns.' },
  { id: 'warranty', title: 'Warranty', content: 'One-year limited warranty.', disabled: true },
];

export const accordion: Story = {
  name: 'TkxAccordion',
  description: 'Expandable sections — single or multiple open, five visual variants.',
  controls: {
    variant: { type: 'select', options: ['default', 'bordered', 'separated', 'ghost', 'flush'], default: 'default' },
    size: { type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
    iconPosition: { type: 'select', options: ['right', 'left'], default: 'right' },
    iconStyle: { type: 'select', options: ['chevron', 'plus', 'arrow'], default: 'chevron' },
    multiple: { type: 'boolean', default: false },
    flush: { type: 'boolean', default: false },
  },
  render: (p) => (
    <div style={{ minWidth: 420 }}>
      <TkxAccordion
        key={String(p.multiple)}
        items={ITEMS}
        defaultOpen="shipping"
        variant={p.variant}
        size={p.size}
        iconPosition={p.iconPosition}
        iconStyle={p.iconStyle}
        multiple={p.multiple}
        flush={p.flush}
      />
    </div>
  ),
};
