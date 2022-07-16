import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  "/",
  // { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "帮助文档",
    icon: "edit",
    // prefix: "/posts/",
    children: [
      {
        text: "BsKeyTools",
        icon: "edit",
        link: "bskeytools/",
      },
    ],
  },
  {
    text: "Markdown",
    icon: "markdown",
    link: "/markdown.md",
  },
]);
