import { TkxBreadcrumb } from 'tekivex-ui';
import type { Story } from '../src/types';

const ITEMS = [
  { label: 'Home', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'tekivex-ui', href: '#' },
  { label: 'packages', href: '#' },
  { label: 'tkx-book' },
];

export const breadcrumb: Story = {
  name: 'TkxBreadcrumb',
  description: 'Hierarchical navigation trail with overflow collapsing via maxItems.',
  controls: {
    maxItems: { type: 'number', default: 5, min: 2, max: 5 },
    separator: { type: 'select', options: ['/', '›', '→', '•'], default: '/' },
  },
  render: (p) => (
    <TkxBreadcrumb
      items={ITEMS}
      maxItems={p.maxItems}
      separator={p.separator}
      onNavigate={(item) => console.log('navigate', item.label)}
    />
  ),
};
