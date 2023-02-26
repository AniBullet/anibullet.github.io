import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { commentPlugin } from "vuepress-plugin-comment2";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

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
    docsearchPlugin({
      appId: '4LHCI3MQ18',
      apiKey: '6637c1a28faaeb61ab77d63cb1cfd01a',
      indexName: 'anibulletio',
      locales: {
        '/': {
          placeholder: '搜索',
          translations: {
            button: {
              buttonText: '搜索',
              buttonAriaLabel: '搜索',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
    // googleAnalyticsPlugin({
    //   id: 'G-H4QKVC282H',
    // }),
  ],

});
