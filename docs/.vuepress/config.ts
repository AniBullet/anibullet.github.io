import { defineUserConfig } from 'vuepress';
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: '/',

  dest: 'docs/.vuepress/dist',

  head: [
    [
      'meta',
      {
        name: 'google-site-verification',
        content: '_6RYTn9r5LrzCfkK1tfbs2wu0AYafihPtBJvrCm6uE4',
      },
    ],
  ],

  locales: {
    '/': {
      lang: 'zh-CN',
      title: '测试',
      description: '文档测试',
    },
    '/en/': {
      lang: 'en-US',
      title: 'Demo',
      description: 'A demo site for vuepress',
    },
  },

  theme: hopeTheme({
    // 主题配置
    iconAssets: 'fontawesome',
    docsDir: 'docs',
  }),

  shouldPrefetch: false,
});
