import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "下载安装",
      icon: "creative",
      prefix: "/guide/",
      link: "/guide/",
    },
    {
      text: "常见问题",
      icon: "ask",
      link: "/faq.md",
    },
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
});