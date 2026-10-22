import { TkxTable } from 'tekivex-ui';
import type { Story } from '../src/types';

type Row = { name: string; role: string; status: string; joined: string };

const DATA: Row[] = [
  { name: 'Asha Patel', role: 'Engineer', status: 'Active', joined: '2023-02-14' },
  { name: 'Ben Okafor', role: 'Designer', status: 'Active', joined: '2022-11-03' },
  { name: 'Chen Wei', role: 'PM', status: 'On leave', joined: '2021-06-21' },
  { name: 'Diya Rao', role: 'Engineer', status: 'Active', joined: '2024-01-09' },
  { name: 'Emil Novak', role: 'Support', status: 'Inactive', joined: '2020-09-30' },
];

const COLUMNS = [
  { key: 'name' as const, header: 'Name', sortable: true },
  { key: 'role' as const, header: 'Role', sortable: true },
  { key: 'status' as const, header: 'Status' },
  { key: 'joined' as const, header: 'Joined', sortable: true, width: '120px' },
];

export const table: Story = {
  name: 'TkxTable',
  description: 'Accessible data table with sorting, striped / bordered / compact modes and loading state.',
  controls: {
    caption: { type: 'text', default: 'Team members' },
    sortable: { type: 'boolean', default: true },
    striped: { type: 'boolean', default: true },
    bordered: { type: 'boolean', default: false },
    compact: { type: 'boolean', default: false },
    stickyHeader: { type: 'boolean', default: false },
    isLoading: { type: 'boolean', default: false },
    empty: { type: 'boolean', default: false },
  },
  render: (p) => (
    <div style={{ minWidth: 520 }}>
      <TkxTable<Row>
        columns={COLUMNS}
        data={p.empty ? [] : DATA}
        caption={p.caption}
        sortable={p.sortable}
        striped={p.striped}
        bordered={p.bordered}
        compact={p.compact}
        stickyHeader={p.stickyHeader}
        isLoading={p.isLoading}
        emptyState="No members match your filter."
      />
    </div>
  ),
};
