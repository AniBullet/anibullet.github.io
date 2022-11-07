import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "工具",
      icon: "edit",
      prefix: "tools/",
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
});
