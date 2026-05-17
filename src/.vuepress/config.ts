import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "✨aniBullet docs",
      description: "个人学习文档记录",
    },
  },

  theme,
  shouldPrefetch: false,
  plugins: [],
});
