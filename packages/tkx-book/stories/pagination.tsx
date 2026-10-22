import { useState } from 'react';
import { TkxPagination } from 'tekivex-ui';
import type { Story } from '../src/types';

function PaginationStory(p: Record<string, any>) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(p.pageSize);
  return (
    <div>
      <TkxPagination
        total={p.total}
        page={page}
        onChange={setPage}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
        siblingCount={p.siblingCount}
        showEdges={p.showEdges}
        showPageSize={p.showPageSize}
        size={p.size}
        variant={p.variant}
      />
      <p style={{ fontSize: 12, opacity: 0.7, marginTop: 12 }}>
        page <strong>{page}</strong> · pageSize <strong>{pageSize}</strong>
      </p>
    </div>
  );
}

export const pagination: Story = {
  name: 'TkxPagination',
  description: 'Page navigation with sibling window, edge buttons and page-size selector.',
  controls: {
    total: { type: 'number', default: 250, min: 0, max: 10000, step: 10 },
    pageSize: { type: 'number', default: 10, min: 5, max: 100, step: 5 },
    siblingCount: { type: 'number', default: 1, min: 0, max: 3 },
    showEdges: { type: 'boolean', default: true },
    showPageSize: { type: 'boolean', default: false },
    size: { type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
    variant: { type: 'select', options: ['default', 'outline', 'ghost'], default: 'default' },
  },
  render: (p) => <PaginationStory key={p.pageSize} {...p} />,
};
