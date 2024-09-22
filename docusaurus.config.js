// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WinBidPro 16 Docs',
  tagline: 'Welcome to the WinBidPro Documentation. Click below to start learning our software.',
  url: 'https://docs.winbidpro.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'gdsestimating',
  projectName: 'winbidpro16-docs',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gdsestimating/winbidpro16-docs/edit/trunk',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        { name: 'msapplication-TileColor', content: '#2d89ef' },
        { name: 'theme-color', content: '#ffffff' }
      ],
      navbar: {
        title: 'WinBidPro',
        logo: {
          alt: 'WinBidPro 16 Logo',
          src: 'img/w.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'whats-new-list',
            position: 'left',
            label: 'Docs',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Facebook',
                href: 'https://facebook.com/gdsestimating',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/gdsestimating',
              },
              {
                label: 'Feature Requests',
                href: 'https://feedback.winbidpro.com'
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/gdsestimating/winbidpro15-docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GDS Estimating`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;
