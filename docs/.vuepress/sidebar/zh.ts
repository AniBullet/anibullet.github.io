import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
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
      prefix: "bskeytools/",
      link: "bskeytools/",
      children: ["ChainsTools"],
    },
  ],
});
