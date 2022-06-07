import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
// import { docsearchPlugin } from "@vuepress/plugin-docsearch";
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

  // plugins: [

  // ],

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
