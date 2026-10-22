import { useState } from 'react';
import { TkxDataGrid } from 'tekivex-ui';
import type { DataGridColumn } from 'tekivex-ui';
import type { Story } from '../src/types';

type Order = { id: string; customer: string; region: string; amount: number; status: string };

const REGIONS = ['North', 'South', 'East', 'West'];
const STATUSES = ['Paid', 'Pending', 'Refunded'];

const DATA: Order[] = Array.from({ length: 48 }, (_, i) => ({
  id: `ORD-${1000 + i}`,
  customer: ['Asha', 'Ben', 'Chen', 'Diya', 'Emil', 'Fatima'][i % 6] + ' ' + String.fromCharCode(65 + (i % 26)) + '.',
  region: REGIONS[i % REGIONS.length],
  amount: Math.round(((i * 7919) % 90000) / 100 + 25) ,
  status: STATUSES[i % STATUSES.length],
}));

const COLUMNS: DataGridColumn<Order>[] = [
  { key: 'id', header: 'Order', sortable: true, width: 110, pinned: 'left' },
  { key: 'customer', header: 'Customer', sortable: true, filterable: true, editable: true },
  { key: 'region', header: 'Region', sortable: true, filterable: true },
  {
    key: 'amount', header: 'Amount', sortable: true, align: 'right', aggregate: 'sum',
    renderCell: (v: number) => `₹${v.toLocaleString('en-IN')}`,
  },
  { key: 'status', header: 'Status', sortable: true, filterable: true },
];

function DataGridStory(p: Record<string, any>) {
  const [selected, setSelected] = useState<string[]>([]);
  const [rows, setRows] = useState(DATA);
  return (
    <div style={{ minWidth: 640 }}>
      <TkxDataGrid<Order>
        columns={COLUMNS}
        data={rows}
        rowKey="id"
        selectable={p.selectable}
        selectedRows={selected}
        onSelectionChange={setSelected}
        sortable={p.sortable}
        showFilters={p.showFilters}
        showExport={p.showExport}
        striped={p.striped}
        bordered={p.bordered}
        compact={p.compact}
        stickyHeader={p.stickyHeader}
        loading={p.loading}
        pageSize={p.pageSize > 0 ? p.pageSize : undefined}
        groupBy={p.groupBy === 'none' ? undefined : p.groupBy}
        maxHeight={360}
        onCellEdit={({ row, key, value }: any) =>
          setRows((r) => r.map((o) => (o.id === row.id ? { ...o, [key]: value } : o)))
        }
      />
      <p style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>
        selected: <strong>{selected.length}</strong> · double-click a Customer cell to edit
      </p>
    </div>
  );
}

export const dataGrid: Story = {
  name: 'TkxDataGrid',
  description: 'Feature-rich grid: selection, sorting, filters, pagination, grouping, pinned columns, inline edit, export.',
  controls: {
    selectable: { type: 'boolean', default: true },
    sortable: { type: 'boolean', default: true },
    showFilters: { type: 'boolean', default: false },
    showExport: { type: 'boolean', default: true },
    pageSize: { type: 'number', default: 10, min: 0, max: 50, step: 5 },
    groupBy: { type: 'select', options: ['none', 'region', 'status'], default: 'none' },
    striped: { type: 'boolean', default: true },
    bordered: { type: 'boolean', default: false },
    compact: { type: 'boolean', default: false },
    stickyHeader: { type: 'boolean', default: true },
    loading: { type: 'boolean', default: false },
  },
  render: (p) => <DataGridStory {...p} />,
};
