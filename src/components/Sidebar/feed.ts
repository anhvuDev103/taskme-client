import { CalendarIc, FilterIc, InboxIc, TodayIc } from 'components/Icons';
import { SidebarItemType } from './types';
import { generalTheme } from 'assets/styles/themes.styled';

export const SIDEBAR_ITEMS: SidebarItemType[] = [
  {
    title: 'Inbox',
    Icon: InboxIc,
    path: '/app/project',
    numberOfTask: 0,
    color: generalTheme.baseColor.blue,
  },
  {
    title: 'Today',
    Icon: TodayIc,
    path: '/app/today',
    numberOfTask: 0,
    color: generalTheme.baseColor.green,
  },
  {
    title: 'Upcoming',
    Icon: CalendarIc,
    path: '/app/upcoming',
    numberOfTask: 0,
    color: generalTheme.baseColor.purple,
  },
  {
    title: 'Filters & Labels',
    Icon: FilterIc,
    path: '/app/filters-labels',
    numberOfTask: 0,
    color: generalTheme.baseColor.orange,
  },
];
