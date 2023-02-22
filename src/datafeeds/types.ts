import { FC } from 'react';

interface Route {
  title: string;
  name: string;
  path: string;
  component: FC;
}

export type { Route };
