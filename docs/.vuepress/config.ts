import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs'
// import { googleAnalyticsPlugin  } from '@vuepress/plugin-google-analytics'
import { docsearchPlugin  } from '@vuepress/plugin-docsearch'

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
    // editLink: false,
    // contributors: false,
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
        tip: 'TIP',
        warning: 'WARNING',
        danger: 'DANGER',
        notFound: [
          'There is nothing here',
          'How did we get here?',
          'This is a 404 page',
          'Looks like we entered the wrong link',
        ],
      }
    },
  }),

  plugins: [
    // googleAnalyticsPlugin({
    //   id: 'G-H4QKVC282H',
    // }),
    docsearchPlugin({
      appId: '01XWVWAV2P',
      apiKey: '3fa7931b80f31ed9dd6e2b82a654ac1c',
      indexName: 'vuepress',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
      locales: {
        '/en/': {
          placeholder: 'Search',
          translations: {
            button: {
              buttonText: 'Search',
              buttonAriaLabel: 'Search',
            },
            modal: {
              searchBox: {
                resetButtonTitle: 'Clear the query',
                resetButtonAriaLabel: 'Clear the query',
                cancelButtonText: 'Cancel',
                cancelButtonAriaLabel: 'Cancel',
              },
              startScreen: {
                recentSearchesTitle: 'Search history',
                noRecentSearchesText: 'No search history',
                saveRecentSearchButtonTitle: 'Save to search history',
                removeRecentSearchButtonTitle: 'Remove from search history',
                favoriteSearchesTitle: 'Collect',
                removeFavoriteSearchButtonTitle: 'Remove from collection',
              },
              errorScreen: {
                titleText: 'Can not get results',
                helpText: 'You may need to check your internet connection',
              },
              footer: {
                selectText: 'Select',
                navigateText: 'Toggle',
                closeText: 'Close',
                searchByText: 'Search by',
              },
              noResultsScreen: {
                noResultsText: 'No results',
                suggestedQueryText: 'You can try query',
                reportMissingResultsText: 'Do you think this query should have results?',
                reportMissingResultsLinkText: 'Click for feedback',
              },
            },
          },
        },
      },
    }),
  ],

});
