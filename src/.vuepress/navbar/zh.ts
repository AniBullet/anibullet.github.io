import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "帮助文档",
    icon: "edit",
    prefix: "/tools/",
    children: ["bskeytools/"],
  },
  {
    text: "方法整理",
    icon: "code",
    prefix: "/functions/",
    children: ["maxscript.md"],
  },
  {
    text: "Markdown",
    icon: "markdown",
    link: "/markdown.md",
  },
]);
