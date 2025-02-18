import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

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
    // googleAnalyticsPlugin({
    //   id: 'G-H4QKVC282H',
    // }),
  ],

});
