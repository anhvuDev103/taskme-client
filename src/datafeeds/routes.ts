import FiltersLabels from 'pages/FiltersLabels';
import Inbox from 'pages/Inbox';
import Project from 'pages/Project';
import Today from 'pages/Today';
import Upcoming from 'pages/Upcoming';

import { Route } from './types';

const ROUTES: Route[] = [
  {
    title: 'Inbox',
    name: 'inbox',
    path: '/app/project',
    component: Inbox,
  },
  {
    title: 'Today',
    name: 'today',
    path: '/app/today',
    component: Today,
  },
  {
    title: 'Upcoming',
    name: 'upcoming',
    path: '/app/upcoming',
    component: Upcoming,
  },
  {
    title: 'Filters & Labels',
    name: 'filters-labels',
    path: '/app/filters-labels',
    component: FiltersLabels,
  },
  {
    title: 'Projects',
    name: 'projects',
    path: '/app/projects/active',
    component: Project,
  },
];

export default ROUTES;
