import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'dashboard',
    label: 'Dashboard',
  },
  {
    routeLink: 'accounts',
    icon: 'account_tree',
    label: 'Accounts',
    items: [
      {
        routeLink: 'accounts/overview',
        label: 'Overview',
      },
      {
        routeLink: 'accounts/integration',
        label: 'Integration',
      },
      {
        routeLink: 'accounts/logs',
        label: 'Logs',
      },
    ],
  },
];
