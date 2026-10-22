// Aggregate every story file. Adding a new story = drop a file here + import it.

import type { Story } from '../src/types';
import { button } from './button';
import { card } from './card';
import { input } from './input';
import { badge } from './badge';
import { alert } from './alert';
import { progress } from './progress';
import { select } from './select';
import { checkbox } from './checkbox';
import { radio } from './radio';
import { toggle } from './toggle';
import { textarea } from './textarea';
import { modal } from './modal';
import { drawer } from './drawer';
import { tooltip } from './tooltip';
import { tabs } from './tabs';
import { accordion } from './accordion';
import { menu } from './menu';
import { breadcrumb } from './breadcrumb';
import { pagination } from './pagination';
import { table } from './table';
import { dataGrid } from './dataGrid';
import { datePicker } from './datePicker';
import { slider } from './slider';
import { avatar } from './avatar';
import { skeleton } from './skeleton';
import { toast } from './toast';
import { phoneInput } from './phoneInput';
import { signaturePad } from './signaturePad';
import { confetti } from './confetti';
import { addressInput } from './addressInput';
import { currencyInput } from './currencyInput';
import { aadhaarInput } from './aadhaar';
import { kyc } from './kyc';
import { subscription } from './subscription';

// Slug = URL (?story=<slug>) and the name of the sibling .mdx docs file.
export const stories: Record<string, Story> = {
  // Core
  button,
  input,
  select,
  checkbox,
  radio,
  toggle,
  textarea,
  slider,
  'date-picker': datePicker,
  // Overlays
  modal,
  drawer,
  tooltip,
  menu,
  toast,
  // Navigation & layout
  tabs,
  accordion,
  breadcrumb,
  pagination,
  card,
  // Data display
  table,
  'data-grid': dataGrid,
  avatar,
  badge,
  alert,
  progress,
  skeleton,
  // Domain inputs
  'phone-input': phoneInput,
  'signature-pad': signaturePad,
  'confetti': confetti,
  'address-input': addressInput,
  'currency-input': currencyInput,
  'aadhaar-input': aadhaarInput,
  'kyc-inputs': kyc,
  'subscription': subscription,
};
