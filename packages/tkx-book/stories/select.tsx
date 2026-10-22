import { useState } from 'react';
import { TkxSelect } from 'tekivex-ui';
import type { Story } from '../src/types';

const OPTIONS = [
  { value: 'in', label: 'India', group: 'Asia' },
  { value: 'sg', label: 'Singapore', group: 'Asia' },
  { value: 'jp', label: 'Japan', group: 'Asia' },
  { value: 'de', label: 'Germany', group: 'Europe' },
  { value: 'fr', label: 'France', group: 'Europe' },
  { value: 'us', label: 'United States', group: 'Americas' },
  { value: 'br', label: 'Brazil', group: 'Americas', disabled: true },
];

function SelectStory(p: Record<string, any>) {
  const [value, setValue] = useState<string | string[]>(p.multiple ? [] : '');
  return (
    <div style={{ minWidth: 320 }}>
      <TkxSelect
        options={OPTIONS}
        value={value}
        onChange={setValue}
        label={p.label}
        placeholder={p.placeholder}
        hint={p.hint || undefined}
        errorMessage={p.errorMessage || undefined}
        size={p.size}
        multiple={p.multiple}
        searchable={p.searchable}
        clearable={p.clearable}
        isDisabled={p.isDisabled}
        isInvalid={p.isInvalid}
        isLoading={p.isLoading}
      />
    </div>
  );
}

export const select: Story = {
  name: 'TkxSelect',
  description: 'Single / multi select with grouping, search, clear and loading states.',
  controls: {
    label: { type: 'text', default: 'Country' },
    placeholder: { type: 'text', default: 'Pick a country' },
    hint: { type: 'text', default: '' },
    errorMessage: { type: 'text', default: '' },
    size: { type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
    multiple: { type: 'boolean', default: false },
    searchable: { type: 'boolean', default: true },
    clearable: { type: 'boolean', default: true },
    isDisabled: { type: 'boolean', default: false },
    isInvalid: { type: 'boolean', default: false },
    isLoading: { type: 'boolean', default: false },
  },
  // key on `multiple` so the local state resets between string and string[]
  render: (p) => <SelectStory key={String(p.multiple)} {...p} />,
};
