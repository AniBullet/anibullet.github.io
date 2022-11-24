import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { commentPlugin } from "vuepress-plugin-comment2";

export default defineUserConfig({
  base: "/",

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '✨aniBullet Docs',
      description: '个人学习文档记录',
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: '✨aniBullet Docs',
    //   description: 'Personal learning documentation',
    // },
  },

  theme,

  shouldPrefetch: false,
  
  plugins: [
    commentPlugin({
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "AniBullet/anibullet.github.io",
      repoId: "R_kgDOHcvcKQ",
      category: "Announcements",
      categoryId: "DIC_kwDOHcvcKc4CSDpj",

      /**
       * Using twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    }),
  ],

});
