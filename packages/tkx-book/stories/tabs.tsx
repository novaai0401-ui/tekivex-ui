import { useState } from 'react';
import { TkxTabs, TkxTabList, TkxTab, TkxTabPanels, TkxTabPanel } from 'tekivex-ui';
import type { Story } from '../src/types';

const LABELS = ['Overview', 'Activity', 'Settings', 'Billing'];

function TabsStory(p: Record<string, any>) {
  const [active, setActive] = useState(0);
  // The book seeds control defaults in an effect, so the first render sees
  // undefined — fall back to 3 rather than producing NaN.
  const count = Math.max(1, Math.min(LABELS.length, Number(p.tabCount) || 3));
  return (
    <div style={{ minWidth: 420 }}>
      <TkxTabs activeIndex={Math.min(active, count - 1)} onChange={setActive} tabCount={count}>
        <TkxTabList>
          {LABELS.slice(0, count).map((label, i) => (
            <TkxTab key={label} index={i} disabled={p.disableSecond && i === 1}>
              {label}
            </TkxTab>
          ))}
        </TkxTabList>
        <TkxTabPanels>
          {LABELS.slice(0, count).map((label, i) => (
            <TkxTabPanel key={label} index={i}>
              <p style={{ margin: '12px 0 0' }}>{label} panel content.</p>
            </TkxTabPanel>
          ))}
        </TkxTabPanels>
      </TkxTabs>
      <p style={{ fontSize: 12, opacity: 0.7, marginTop: 12 }}>
        Controlled: activeIndex = <strong>{Math.min(active, count - 1)}</strong>. Arrow keys move between tabs.
      </p>
    </div>
  );
}

export const tabs: Story = {
  name: 'TkxTabs',
  description: 'Compound tabs (TabList / Tab / TabPanels / TabPanel) with roving tabindex.',
  controls: {
    tabCount: { type: 'number', default: 3, min: 1, max: 4 },
    disableSecond: { type: 'boolean', default: false },
  },
  render: (p) => <TabsStory {...p} />,
};
