import { FlagIc } from 'components/Icons';

const PRIORITIES_COLOR: string[] = ['#d1453b', '#eb8909', '#246fe0', '#058527'];

export const PRIORITIES = PRIORITIES_COLOR.map((color, index) => ({
  label: `Priority ${index + 1}`,
  icon: FlagIc,
  color: color,
}));
