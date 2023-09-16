import LoadingSpin from '@iconify/icons-quill/loading-spin';
import Checked from '@iconify/icons-si-glyph/checked';
import ExpandMore from '@iconify/icons-ic/outline-expand-more';
import RoundCheckCircle from '@iconify/icons-ic/round-check-circle';
import WarningFill from '@iconify/icons-ph/warning-fill';
import Info24Filled from '@iconify/icons-fluent/info-24-filled';
import CircleError from '@iconify/icons-si-glyph/circle-error';

import type { IconifyIcon } from '@iconify/types';

export default [
  ['quill:loading-spin', LoadingSpin],
  ['si-glyph:checked', Checked],
  ['ic:outline-expand-more', ExpandMore],
  ['ic:round-check-circle', RoundCheckCircle],
  ['ph:warning-fill', WarningFill],
  ['fluent:info-24-filled', Info24Filled],
  ['si-glyph:circle-error', CircleError],
] as [string, IconifyIcon][];
