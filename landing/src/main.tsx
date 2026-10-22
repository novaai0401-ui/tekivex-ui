import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, auroraLight } from 'tekivex-ui';
import 'tekivex-ui/styles';
import { App } from './App';
import './styles.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* The landing flipped to a light surface in 2026-05 but kept the dark theme
        here, so every component preview painted light text on white cards.
        Dark example pages opt back in via ExampleShell surface="dark". */}
    <ThemeProvider theme={auroraLight}>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
