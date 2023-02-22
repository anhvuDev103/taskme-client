import { FC } from 'react';

export interface SidebarItemType {
  title: string;
  Icon?: FC;
  path: string;
  numberOfTask?: number;
  color?: string;
  ref?: any;
}

export interface Option {
  color?: string;
  label: string;
}
