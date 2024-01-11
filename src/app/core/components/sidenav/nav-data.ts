import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'dashboard',
    label: 'Dashboard',
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
