import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';


export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Stav Fernandes',
  },
  disableThemeSwitch: true,
  links: [
    {
      text: 'Posts',
      url: '/blog',
      active: 'nested-url',
    },
    
  ],

};
