import { useState, type ComponentProps } from 'react';
import { TkxMenu, TkxButton } from 'tekivex-ui';
import type { Story } from '../src/types';

// MenuItem is not re-exported from the barrel; derive it from the props.
type MenuItem = ComponentProps<typeof TkxMenu>['items'][number];

function MenuStory(p: Record<string, any>) {
  const [showGrid, setShowGrid] = useState(true);
  const [sort, setSort] = useState('name');

  const items: MenuItem[] = [
    { id: 'new', label: 'New file', shortcut: 'Ctrl+N' },
    { id: 'open', label: 'Open…', shortcut: 'Ctrl+O', description: 'Browse local files' },
    { type: 'separator', id: 'sep1' },
    { type: 'check', id: 'grid', label: 'Show grid', checked: showGrid, onChange: setShowGrid },
    {
      type: 'radio-group', id: 'sort', label: 'Sort by', value: sort, onChange: setSort,
      options: [{ value: 'name', label: 'Name' }, { value: 'date', label: 'Date' }],
    },
    {
      type: 'submenu', id: 'export', label: 'Export',
      items: [{ id: 'csv', label: 'CSV' }, { id: 'pdf', label: 'PDF' }],
    },
    { type: 'separator', id: 'sep2' },
    { id: 'delete', label: 'Delete', danger: true },
  ];

  return (
    <div style={{ padding: 40 }}>
      <TkxMenu
        trigger={<TkxButton variant="outline">Actions ▾</TkxButton>}
        items={items}
        placement={p.placement}
        isDisabled={p.isDisabled}
      />
    </div>
  );
}

export const menu: Story = {
  name: 'TkxMenu',
  description: 'Dropdown menu with actions, check items, radio groups, submenus and separators.',
  controls: {
    placement: {
      type: 'select',
      options: ['bottom-start', 'bottom-end', 'top-start', 'top-end', 'right-start', 'left-start'],
      default: 'bottom-start',
    },
    isDisabled: { type: 'boolean', default: false },
  },
  render: (p) => <MenuStory {...p} />,
};
