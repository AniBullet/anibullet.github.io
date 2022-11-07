import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "K帧工具_BsKeyTools",
      icon: "edit",
      link: "tools/",
      children: ["bskeytools/"],
    },
  ],
  "/functions/": [
    {
      text: "Maxscript",
      icon: "code",
      children: ["maxscript.md"],
    },
  ],
});
