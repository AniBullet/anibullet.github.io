/*
 * @Description: 
 * @Author: Bullet.S
 * @Date: 2022-06-07 19:45:50
 * @LastEditors: Bullet.S
 * @LastEditTime: 2022-06-07 21:36:06
 * @Email: animator.bullet@foxmail.com
 */
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
