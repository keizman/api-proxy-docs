// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'facebook', // Usually your GitHub org/user name.
  // projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'zh', 'ja', 'pt-BR', 'hi'],
  //   localeConfigs: {
  //     en: {
  //       label: 'English',
  //     },
  //     zh: {
  //       label: '中文',
  //     },
  //     ja: {
  //       label: '日本語',
  //     },
  //     'pt-BR': {
  //       label: 'Português (Brasil)',
  //     },
  //     hi: {
  //       label: 'हिन्दी',
  //     },
  //   },
  // },
  plugins: [
    // [
    //   '@easyops-cn/docusaurus-search-local',
    //   {
    //     // 可选: 默认 "en"
    //     hashed: true,
    //     // 搜索的文档类型
    //     docsRouteBasePath: '/',
    //     // 可选: 默认 ["title", "content"]
    //     searchResultLimits: 8,
    //     // 可选: 加载语言分词器
    //     language: ["zh"],
    //   }
      
    // ],
    'docusaurus-plugin-sass',
  ],

    //     '@docusaurus/plugin-content-docs',
    //     {
    //       id: 'docs', // Default docs plugin
    //       path: 'docs',
    //       routeBasePath: 'docs',
    //       sidebarPath: require.resolve('./sidebars.js'),
    //       sidebarItemsGenerator: async ({
    //         defaultSidebarItemsGenerator,
    //         ...args
    //       }) => {
    //         const sidebarItems = await defaultSidebarItemsGenerator(args);
            
    //         // Your existing sidebar items generator function
    //         function processSidebarItems(items, level = 1) {
    //           return items.map(item => {
    //             if (item.type === 'category') {
    //               const updatedItem = {
    //                 ...item,
    //                 collapsible: level !== 1,
    //                 collapsed: level !== 3 && level !== 1 && level !== 4 && level !== 2,
    //               };
                  
    //               if (item.items) {
    //                 updatedItem.items = processSidebarItems(item.items, level + 1);
    //               }
                  
    //               return updatedItem;
    //             }
    //             return item;
    //           });
    //         }
            
    //         return processSidebarItems(sidebarItems);
    //       },
    //     },
    //   ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

        docs: {
          // ...other docs options...
          sidebarPath: './sidebars.js',
          // Add the sidebarItemsGenerator here
          sidebarItemsGenerator: async ({
            defaultSidebarItemsGenerator,
            ...args
          }) => {
            const sidebarItems = await defaultSidebarItemsGenerator(args);
            
            // Recursive function to process sidebar items at any depth
            function processSidebarItems(items, level = 1) {
              return items.map(item => {
                if (item.type === 'category') {
                  // Top-level categories: non-collapsible
                  // Third-level categories: expanded by default
                  const updatedItem = {
                    ...item,
                    collapsible: level !== 1, // not show collapsible for top-level
                    collapsed: level !== 3 && level !== 1 && level !== 4 && level !== 2, // default to collapsed
                  };
                  
                  // Process children recursively if they exist
                  if (item.items) {
                    updatedItem.items = processSidebarItems(item.items, level + 1);
                  }
                  
                  return updatedItem;
                }
                return item;
              });
            }
            
            return processSidebarItems(sidebarItems);
          },
        },
        // docs: false,
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/scss/__index.scss'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/resize_png.png',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/resize_png.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'PRO_side_bar',
          //   position: 'left',
          //   label: 'PRO',
          // },

          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://api.llmproai.xyz',
            label: 'Go back to our Site',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/API Docs',
              },
            ],
          },
          {
            title: 'Support',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/Gd2Hy78HM3',
              },
              {
                label: 'Email to us',
                href: 'mailto:support@planktonfly.com',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              // {
              //   label: 'GitHub',
              //   href: 'https://github.com/facebook/docusaurus',
              // },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Planktonfly, Inc..`,
      },
      prism: {
        // theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
