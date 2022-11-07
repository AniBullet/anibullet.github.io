import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    // "slide",
    // {
    //   text: "如何使用",
    //   icon: "creative",
    //   prefix: "guide/",
    //   link: "guide/",
    //   children: "structure",
    // },
    {
      text: "K帧工具_BsKeyTools",
      icon: "edit",
      link: "tools/bskeytools/",
      children: ["chainstools"],
    },
  ],
});
