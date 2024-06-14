import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'dashboard',
    label: 'Dashboard',
  },

  {
    routeLink: 'anuncio',
    icon: 'add',
    label: 'Anunciar',
  },
  {
    routeLink: 'anuncio/lista',
    icon: 'list',
    label: 'Anúncios',
  },
  {
    routeLink: 'chat',
    icon: 'chat',
    label: 'Conversas',
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
];
