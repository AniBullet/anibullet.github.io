import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs'

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
      title: '✨aniBulletDocs',
      description: '个人学习文档网站',
    },
    '/en/': {
      lang: 'en-US',
      title: '✨aniBulletDocs',
      description: 'Documentation website',
    },
  },

  theme: defaultTheme({
    // 主题配置
    iconAssets: 'fontawesome',
    docsDir: 'docs',
    logo: '/favicon.ico',
    repo: 'AnimatorBullet/animatorbullet.github.io',
    locales: {
      '/': {
        // navbar
        navbar: navbarZh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // sidebar
        sidebar: sidebarZh,
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language',
        selectLanguageAriaLabel: 'Language',
        // navbar
        navbar: navbarEn,
        // sidebar
        sidebar: sidebarEn,
        // page meta
        editLinkText: 'Edit this page on GitHub',
        lastUpdatedText: 'LastUpdated',
        contributorsText: 'Contributors',
      }
    },
  }),



});
