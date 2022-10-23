import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://animatorbullet.github.io",

  author: {
    name: "Bullet.S",
    url: "https://anibullet.com",
  },

  iconAssets: "//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css",

  logo: "/logo.svg",

  repo: "AnimatorBullet/animatorbullet.github.io",

  docsDir: "docs",

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  fullscreen: true,

  themeColor: {
    WASURENAGUSA: "#7DB9DE",
    MOMO: "#F596AA",
    KUCHINASHI: "#F6C555",
  },

  locales: {
    "/": {
      // navbar
      navbar: navbar.zh,

      // sidebar
      sidebar: sidebar.zh,

      footer: 'Copyright © 2022 by <a href="https://www.anibullet.com/"> ⭐ Bullet.S</a><br>Powered by <a href="https://v2.vuepress.vuejs.org/zh/"> Vuepress</a> Theme <a href="https://vuepress-theme-hope.github.io/v2/zh/">Hope</a>',

      displayFooter: true,

      // blog: {
      //   description: "A FrontEnd programmer",
      //   intro: "/intro.html",
      // },
      
      copyright: false,

      // selectLanguageName: '简体中文',
      // selectLanguageText: '选择语言',
      // selectLanguageAriaLabel: '选择语言',
      // page meta
      // editLinkText: '在 GitHub 上编辑此页',
      // lastUpdatedText: '上次更新',
      // contributorsText: '贡献者',
      // custom containers
      // tip: '提示',
      // warning: '注意',
      // danger: '警告',
      // 404 page
      // notFound: [
      //   '这里什么都没有',
      //   '我们怎么到这来了？',
      //   '这是一个 404 页面',
      //   '看起来我们进入了错误的链接',
      // ],
      // backToHome: '返回首页',
      // a11y
      // openInNewWindow: '在新窗口打开',
      // toggleDarkMode: '切换夜间模式',
      // toggleSidebar: '切换侧边栏',
    },

    /**
     * Chinese locale config
     */
    // "/en/": {
      // navbar
      // navbar: navbar.en,

      // sidebar
      // sidebar: sidebar.en,

      // footer: 'Copyright © 2022 by <a href="https://www.anibullet.com/"> ⭐ Bullet.S</a><br>Powered by <a href="https://v2.vuepress.vuejs.org/zh/"> Vuepress</a> Theme <a href="https://vuepress-theme-hope.github.io/v2/zh/">Hope</a>',

      // displayFooter: true,

      // blog: {
      //   description: "A FrontEnd programmer",
      //   intro: "/en/intro.html",
      // },

      // copyright: false,

      // selectLanguageName: 'English',
      // selectLanguageText: 'Language',
      // selectLanguageAriaLabel: 'Language',
      // // page meta
      // editLinkText: 'Edit this page on GitHub',
      // lastUpdatedText: 'LastUpdated',
      // contributorsText: 'Contributors',
      // tip: 'TIP',
      // warning: 'WARNING',
      // danger: 'DANGER',
      // notFound: [
      //   'There is nothing here',
      //   'How did we get here?',
      //   'This is a 404 page',
      //   'Looks like we entered the wrong link',
      // ],
    // },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/en/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },
  },
});
