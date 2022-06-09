import { defineUserConfig } from '@vuepress/cli';
import { defaultTheme } from '@vuepress/theme-default';
import { navbarEn, navbarZh, sidebarEn, sidebarZh } from './configs'
import { googleAnalyticsPlugin  } from '@vuepress/plugin-google-analytics'
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
    ['meta', { name: 'Keywords', content: 'Vuepress Docs' }],
    ['meta', { name: 'description', content: '个人学习文档网站' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }]
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
    googleAnalyticsPlugin({
      id: 'G-H4QKVC282H',
    }),
    docsearchPlugin({
      appId: '01XWVWAV2P',
      apiKey: '3fa7931b80f31ed9dd6e2b82a654ac1c',
      indexName: 'vuepress',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
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
