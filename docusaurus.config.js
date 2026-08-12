// @ts-check

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WinBidPro Docs',
  tagline: 'Welcome to the WinBidPro Documentation',
  url: 'https://docs.winbidpro.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'favicon.ico',

  // GitHub pages deployment config.
  organizationName: 'gdsestimating',
  //projectName: 'winbidpro16-docs',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          lastVersion: 'current',
          versions: {
            current: {
              label: '16',
              path: '16',
            },
          },
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
    plugins: [
      [
        '@docusaurus/plugin-content-docs',
        {
          id: 'glossary',
          path: 'glossary',
          routeBasePath: 'glossary',
          sidebarPath: './sidebarsGlossary.js',
          // ... other options
        },
      ]
    ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'WinBidPro',
        logo: {
          alt: 'WinBidPro 16 Logo',
          src: 'img/w.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
            versions: {
              current: {label: 'V16 Docs'}, 
              '15': {label: 'V15 Docs'},
            },
          },
          {
            type:'docSidebar',
            sidebarId:'glossary',
            docsPluginId: 'glossary',
            label: 'Glossary',
            position: 'left',
          },
          { to: '/blog', label: 'Patch Notes', position: 'left' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Socials',
            items: [
              {
                html: `<a href="https://www.youtube.com/@gdsestimating6835" target="_blank" rel="noopener noreferrer" class="footer__icon-link" title="YouTube">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  <span>YouTube</span>
                </a>`,
              },
              {
                html: `<a href="https://facebook.com/gdsestimating" target="_blank" rel="noopener noreferrer" class="footer__icon-link" title="Facebook">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                  <span>Facebook</span>
                </a>`,
              },
              {
                html: `<a href="http://linkedin.com/company/gds-estimating" target="_blank" rel="noopener noreferrer" class="footer__icon-link" title="LinkedIn">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  <span>LinkedIn</span>
                </a>`,
              },
            ],
          },
          {
            title: 'Resources',
            items: [
              {
                html: `<a href="https://feedback.winbidpro.com" target="_blank" rel="noopener noreferrer" class="footer__icon-link" title="Submit ideas and vote on upcoming features">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6A4.997 4.997 0 017 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>
                  <span>Feature Requests</span>
                </a>`,
              },
              {
                html: `<a href="https://www.gdsestimating.com/support" target="_blank" rel="noopener noreferrer" class="footer__icon-link" title="Get help from GDS support">
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M11.5 2C6.81 2 3 5.81 3 10.5S6.81 19 11.5 19h.5v3c4.86-2.34 8-7 8-11.5C20 5.81 16.19 2 11.5 2zm1 14.5h-2v-2h2v2zm0-3.5h-2c0-3.25 3-3 3-5 0-1.1-.9-2-2-2s-2 .9-2 2h-2c0-2.21 1.79-4 4-4s4 1.79 4 4c0 2.5-3 2.75-3 5z"/></svg>
                  <span>Support</span>
                </a>`,
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

export default config;
