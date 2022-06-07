import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { addViteOptimizeDepsInclude } from "vuepress-shared";

export default defineUserConfig({
  base: "/",

  dest: "./dist",

  head: [
    [
      "meta",
      {
        name: "google-site-verification",
        content: "_6RYTn9r5LrzCfkK1tfbs2wu0AYafihPtBJvrCm6uE4",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "主题演示",
      description: "vuepress-theme-hope 的演示",
    },
    "/en/": {
      lang: "en-US",
      title: "Theme Demo",
      description: "A demo for vuepress-theme-hope",
    },
  },

  theme: hopeTheme({
    // 主题配置
    logo: "/images/DocsLogo.ico",
    iconAssets: "fontawesome",
  }),

  plugins: [
    docsearchPlugin({
      appId: "01XWVWAV2P",
      apiKey: "3fa7931b80f31ed9dd6e2b82a654ac1c",
      indexName: "aniBulletDocs",
      locales: {
        "/zh/": {
          placeholder: "搜索文档",
          translations: {
            button: {
              buttonText: "搜索文档",
              buttonAriaLabel: "搜索文档",
            },
            modal: {
              searchBox: {
                resetButtonTitle: "清除查询条件",
                resetButtonAriaLabel: "清除查询条件",
                cancelButtonText: "取消",
                cancelButtonAriaLabel: "取消",
              },
              startScreen: {
                recentSearchesTitle: "搜索历史",
                noRecentSearchesText: "没有搜索历史",
                saveRecentSearchButtonTitle: "保存至搜索历史",
                removeRecentSearchButtonTitle: "从搜索历史中移除",
                favoriteSearchesTitle: "收藏",
                removeFavoriteSearchButtonTitle: "从收藏中移除",
              },
              errorScreen: {
                titleText: "无法获取结果",
                helpText: "你可能需要检查你的网络连接",
              },
              footer: {
                selectText: "选择",
                navigateText: "切换",
                closeText: "关闭",
                searchByText: "搜索提供者",
              },
              noResultsScreen: {
                noResultsText: "无法找到相关结果",
                suggestedQueryText: "你可以尝试查询",
                reportMissingResultsText: "你认为该查询应该有结果？",
                reportMissingResultsLinkText: "点击反馈",
              },
            },
          },
        },
      },
    }),
  ],

  pagePatterns: ["**/*.md", "!**/*.snippet.md", "!.vuepress", "!node_modules"],

  extendsBundlerOptions: (config: unknown, app): void => {
    if (app.env.isDev)
      addViteOptimizeDepsInclude({ app, config }, [
        "dayjs",
        "dayjs/plugin/localizedFormat",
        "dayjs/plugin/objectSupport",
        "dayjs/plugin/timezone",
        "dayjs/plugin/utc",
        "vuepress-shared/lib/client",
      ]);

    addViteOptimizeDepsInclude({ app, config }, [
      "axios",
      "three",
      "three/examples/jsm/controls/OrbitControls",
      "three/examples/jsm/loaders/STLLoader",
    ]);
  },

  shouldPrefetch: false,
});
