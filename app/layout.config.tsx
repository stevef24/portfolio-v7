import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';


export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    title: 'My App',
  },
  links: [
    {
      text: 'Blog',
      url: '/blog',
      active: 'nested-url',
    },
  ],
};
