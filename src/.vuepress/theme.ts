import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://animatorbullet.github.io",

  author: {
    name: "Bullet.S",
    url: "https://anibullet.com",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "AnimatorBullet/animatorbullet.github.io",

  docsDir: "/src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  fullscreen: true,

  themeColor: {
    WASURENAGUSA: "#7DB9DE",
    MOMO: "#F596AA",
    KUCHINASHI: "#F6C555",
  },

  locales: {
    // "/en/": {
    //   // navbar
    //   navbar: enNavbar,

    //   // sidebar
    //   sidebar: enSidebar,

    //   footer: 'Copyright © 2022 by <a href="https://www.anibullet.com/"> ⭐ Bullet.S</a><br>Powered by <a href="https://v2.vuepress.vuejs.org/zh/"> Vuepress</a> Theme <a href="https://vuepress-theme-hope.github.io/v2/zh/">Hope</a>',

    //   displayFooter: true,

    //   // metaLocales: {
    //   //   editLink: "Edit this page on GitHub",
    //   // },
    // },

    /**
     * Chinese locale config
     */
    "/": {
      // navbar
      navbar: zhNavbar,

      // sidebar
      sidebar: zhSidebar,

      footer: "默认页脚",

      displayFooter: true,

      // page meta
      // metaLocales: {
      //   editLink: "在 GitHub 上编辑此页",
      // },

      copyright: false,
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["4869"],
    },
  },

  plugins: {
    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // comment: {
    //   // /**
    //   //  * Using Giscus
    //   //  */
    //   provider: "Giscus",
    //   repo: "AnimatorBullet/animatorbullet.github.io",
    //   repoId: "R_kgDOHcvcKQ",
    //   category: "Announcements",
    //   categoryId: "DIC_kwDOHcvcKc4CSDpj",

    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",

    //   /**
    //    * Using Waline
    //    */
    //   // provider: "Waline",
    //   // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    // Disable features you don't want here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageLazyload: true,
      imageTitle: true,
      imageSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vpre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/logo.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/logo.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/logo.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/logo.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/logo.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/logo.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "BsDocs",
            short_name: "BsDocs",
            url: "/",
            icons: [
              {
                src: "/logo.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/logo.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },

        // googleAnalyticsPlugin({
    //   id: 'G-H4QKVC282H',
    // }),
    // docsearchPlugin({
      // appId: '4MJKI2RCHN',
      // apiKey: '2f1043acaebc95abbf1b86f3007608fc',
      // indexName: 'vuepress',
      // searchParameters: {
      //   facetFilters: ['tags:v2'],
      // },
      // locales: {
      //   '/': {
      //     placeholder: '搜索',
      //     translations: {
      //       button: {
      //         buttonText: '搜索',
      //         buttonAriaLabel: '搜索',
      //       },
      //       modal: {
      //         searchBox: {
      //           resetButtonTitle: '清除查询条件',
      //           resetButtonAriaLabel: '清除查询条件',
      //           cancelButtonText: '取消',
      //           cancelButtonAriaLabel: '取消',
      //         },
      //         startScreen: {
      //           recentSearchesTitle: '搜索历史',
      //           noRecentSearchesText: '没有搜索历史',
      //           saveRecentSearchButtonTitle: '保存至搜索历史',
      //           removeRecentSearchButtonTitle: '从搜索历史中移除',
      //           favoriteSearchesTitle: '收藏',
      //           removeFavoriteSearchButtonTitle: '从收藏中移除',
      //         },
      //         errorScreen: {
      //           titleText: '无法获取结果',
      //           helpText: '你可能需要检查你的网络连接',
      //         },
      //         footer: {
      //           selectText: '选择',
      //           navigateText: '切换',
      //           closeText: '关闭',
      //           searchByText: '搜索提供者',
      //         },
      //         noResultsScreen: {
      //           noResultsText: '无法找到相关结果',
      //           suggestedQueryText: '你可以尝试查询',
      //           reportMissingResultsText: '你认为该查询应该有结果？',
      //           reportMissingResultsLinkText: '点击反馈',
      //         },
      //       },
      //     },
      //   },
        // '/en/': {
        //   placeholder: 'Search',
        //   translations: {
        //     button: {
        //       buttonText: 'Search',
        //       buttonAriaLabel: 'Search',
        //     },
        //     modal: {
        //       searchBox: {
        //         resetButtonTitle: 'Clear the query',
        //         resetButtonAriaLabel: 'Clear the query',
        //         cancelButtonText: 'Cancel',
        //         cancelButtonAriaLabel: 'Cancel',
        //       },
        //       startScreen: {
        //         recentSearchesTitle: 'Search history',
        //         noRecentSearchesText: 'No search history',
        //         saveRecentSearchButtonTitle: 'Save to search history',
        //         removeRecentSearchButtonTitle: 'Remove from search history',
        //         favoriteSearchesTitle: 'Collect',
        //         removeFavoriteSearchButtonTitle: 'Remove from collection',
        //       },
        //       errorScreen: {
        //         titleText: 'Can not get results',
        //         helpText: 'You may need to check your internet connection',
        //       },
        //       footer: {
        //         selectText: 'Select',
        //         navigateText: 'Toggle',
        //         closeText: 'Close',
        //         searchByText: 'Search by',
        //       },
        //       noResultsScreen: {
        //         noResultsText: 'No results',
        //         suggestedQueryText: 'You can try query',
        //         reportMissingResultsText: 'Do you think this query should have results?',
        //         reportMissingResultsLinkText: 'Click for feedback',
        //       },
        //     },
        //   },
        // },
      // },
    // }),
  },
});
