import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "工具文档",
      icon: "edit",
      prefix: "/tools/",
      link: "/tools/",
      children: [
        "bskeytools/",
      ],
    },
  ],
  "/functions/": [
    {
      text: "方法整理",
      icon: "code",
      children: ["maxscript"],
    },
  ],
  "/guide/": [
    {
      text: "工具文档",
      icon: "edit",
      prefix: "/tools/",
      link: "/tools/",
      children: [
        "bskeytools/",
      ],
    },
  ],
});
