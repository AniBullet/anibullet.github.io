import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, zhNavbar } from "./navbar/index.js";
import { enSidebar, zhSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://anibullet.github.io",

  author: {
    name: "Bullet.S",
    url: "https://anibullet.com",
  },

  // darkmode: "switch",

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "AniBullet/anibullet.github.io",

  docsDir: "/src",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  // fullscreen: true,

  // themeColor: {
  //   WASURENAGUSA: "#7DB9DE",
  //   MOMO: "#F596AA",
  //   KUCHINASHI: "#F6C555",
  // },

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

      footer: 'Copyright © 2022 by <a href="https://www.anibullet.com/"> ⭐ Bullet.S</a><br>Powered by <a href="https://v2.vuepress.vuejs.org/zh/"> Vuepress</a> Theme <a href="https://vuepress-theme-hope.github.io/v2/zh/">Hope</a>',

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
    //   repo: "AniBullet/anibullet.github.io",
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
  },
});
