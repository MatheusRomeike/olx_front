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
        routeLink: 'accounts/manage',
        label: 'Manage',
      },
      {
        routeLink: 'accounts/publish',
        label: 'Publish',
      },
      {
        routeLink: 'accounts/logs',
        label: 'Logs',
      },
    ],
  },
  {
    routeLink: 'settings',
    icon: 'settings',
    label: 'Settings',
    expanded: true,
    items: [
      {
        routeLink: 'settings/profile',
        label: 'Profile',
        icon: 'person',
      },
      {
        routeLink: 'settings/customize',
        label: 'Logout',
      },
    ],
  },
];
