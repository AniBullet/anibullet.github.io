import { defineUserConfig } from 'vuepress';
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: '/',

  dest: 'docs/.vuepress/dist',

  theme: hopeTheme({
    // 主题配置
    iconAssets: 'fontawesome',
    docsDir: 'docs',
  }),

  shouldPrefetch: false,
});
