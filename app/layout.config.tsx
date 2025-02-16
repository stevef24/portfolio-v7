import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';


export const baseOptions: BaseLayoutProps = {
  nav: {
    title: 'Stav Fernandes',
  },
  disableThemeSwitch: true,
  links: [
    {
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
    
  ],

};
