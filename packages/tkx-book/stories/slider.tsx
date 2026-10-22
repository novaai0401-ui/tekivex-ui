import { useState } from 'react';
import { TkxSlider } from 'tekivex-ui';
import type { Story } from '../src/types';

function SliderStory(p: Record<string, any>) {
  const [value, setValue] = useState(40);
  const [range, setRange] = useState<[number, number]>([20, 60]);
  return (
    <div style={{ minWidth: 360, minHeight: p.orientation === 'vertical' ? 240 : undefined, padding: 16 }}>
      <TkxSlider
        label={p.label}
        min={p.min}
        max={p.max}
        step={p.step}
        isRange={p.isRange}
        value={value}
        onChange={setValue}
        rangeValue={range}
        onRangeChange={setRange}
        showValue={p.showValue}
        showTicks={p.showTicks}
        showTooltip={p.showTooltip === 'false' ? false : p.showTooltip}
        colorScheme={p.colorScheme}
        size={p.size}
        orientation={p.orientation}
        gradient={p.gradient}
        isDisabled={p.isDisabled}
      />
      <p style={{ fontSize: 12, opacity: 0.7, marginTop: 12 }}>
        {p.isRange ? `range: ${range[0]} – ${range[1]}` : `value: ${value}`}
      </p>
    </div>
  );
}

export const slider: Story = {
  name: 'TkxSlider',
  description: 'Single or range slider with ticks, tooltip, gradient fill and vertical orientation.',
  controls: {
    label: { type: 'text', default: 'Volume' },
    min: { type: 'number', default: 0, min: 0, max: 100 },
    max: { type: 'number', default: 100, min: 1, max: 1000 },
    step: { type: 'number', default: 1, min: 1, max: 25 },
    isRange: { type: 'boolean', default: false },
    showValue: { type: 'boolean', default: true },
    showTicks: { type: 'boolean', default: false },
    showTooltip: { type: 'select', options: ['hover', 'always', 'false'], default: 'hover' },
    colorScheme: { type: 'select', options: ['primary', 'success', 'danger', 'warning'], default: 'primary' },
    size: { type: 'select', options: ['sm', 'md', 'lg'], default: 'md' },
    orientation: { type: 'select', options: ['horizontal', 'vertical'], default: 'horizontal' },
    gradient: { type: 'boolean', default: false },
    isDisabled: { type: 'boolean', default: false },
  },
  render: (p) => <SliderStory {...p} />,
};
