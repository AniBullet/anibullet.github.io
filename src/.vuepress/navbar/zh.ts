import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  "/",
  // { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "下载安装",
    icon: "creative",
    link: "/guide/",
  },
  {
    text: "常见问题",
    icon: "ask",
    link: "/faq.md",
  },
  {
    text: "文档",
    icon: "edit",
    prefix: "/tools/",
    children: ["bskeytools/"],
  },
  {
    text: "Fn",
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
