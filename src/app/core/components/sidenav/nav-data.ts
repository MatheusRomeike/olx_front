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
    routeLink: 'configuracoes',
    icon: 'settings',
    label: 'Configurações',
    expanded: true,
    items: [
      {
        routeLink: 'configuracoes',
        label: 'Meu cadastro',
        icon: 'person',
      },
      {
        routeLink: 'login',
        label: 'Logout',
      },
    ],
  },
  {
    routeLink: 'anuncio',
    icon: 'add',
    label: 'Anunciar'
  },
  {
    routeLink: 'anuncio/lista',
    icon: 'list',
    label: 'Anúncios'
  },
];
