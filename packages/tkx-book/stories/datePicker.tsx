import { useState } from 'react';
import { TkxDatePicker } from 'tekivex-ui';
import type { Story } from '../src/types';

function DatePickerStory(p: Record<string, any>) {
  const [date, setDate] = useState<Date | null>(null);
  const [range, setRange] = useState<[Date | null, Date | null]>([null, null]);
  const [multi, setMulti] = useState<Date[]>([]);
  const [time, setTime] = useState({ h: 9, m: 30 });

  const summary =
    p.mode === 'single'
      ? date?.toDateString() ?? '—'
      : p.mode === 'range'
        ? `${range[0]?.toDateString() ?? '—'} → ${range[1]?.toDateString() ?? '—'}`
        : multi.map((d) => d.toDateString()).join(', ') || '—';

  return (
    <div style={{ minWidth: 340 }}>
      <TkxDatePicker
        mode={p.mode}
        value={date}
        onChange={setDate}
        rangeValue={range}
        onRangeChange={setRange}
        multiValue={multi}
        onMultiChange={setMulti}
        label={p.label}
        placeholder={p.placeholder}
        hint={p.hint || undefined}
        errorMessage={p.errorMessage || undefined}
        locale={p.locale}
        weekStartsOn={Number(p.weekStartsOn) as 0 | 1 | 6}
        numberOfMonths={p.numberOfMonths}
        showTime={p.showTime}
        timeValue={time}
        onTimeChange={setTime}
        showPresets={p.showPresets}
        isDisabled={p.isDisabled}
        isInvalid={p.isInvalid}
      />
      <p style={{ fontSize: 12, opacity: 0.7, marginTop: 8 }}>value: {summary}</p>
    </div>
  );
}

export const datePicker: Story = {
  name: 'TkxDatePicker',
  description: 'Single / range / multiple date selection with locale, presets and optional time.',
  controls: {
    mode: { type: 'select', options: ['single', 'range', 'multiple'], default: 'single' },
    label: { type: 'text', default: 'Start date' },
    placeholder: { type: 'text', default: 'Select a date' },
    hint: { type: 'text', default: '' },
    errorMessage: { type: 'text', default: '' },
    locale: { type: 'select', options: ['en-IN', 'en-US', 'en-GB', 'de-DE', 'ja-JP'], default: 'en-IN' },
    weekStartsOn: { type: 'select', options: ['0', '1', '6'], default: '1' },
    numberOfMonths: { type: 'number', default: 1, min: 1, max: 2 },
    showTime: { type: 'boolean', default: false },
    showPresets: { type: 'boolean', default: false },
    isDisabled: { type: 'boolean', default: false },
    isInvalid: { type: 'boolean', default: false },
  },
  render: (p) => <DatePickerStory key={p.mode} {...p} />,
};
