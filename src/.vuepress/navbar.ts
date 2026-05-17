import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "下载安装",
    icon: "download",
    link: "/guide/",
  },
  {
    text: "常见问题",
    icon: "circle-question",
    link: "/faq",
  },
  {
    text: "BsKeyTools",
    icon: "wrench",
    prefix: "/tools/bskeytools/",
    children: [
      {
        text: "工具首页",
        icon: "house",
        link: "",
      },
      {
        text: "快速入门",
        icon: "rocket",
        link: "quickstart",
      },
      {
        text: "功能总览",
        icon: "list",
        link: "features",
      },
      {
        text: "动画工具",
        icon: "film",
        link: "animation",
      },
      {
        text: "骨骼绑定",
        icon: "sitemap",
        link: "rigging",
      },
      {
        text: "蒙皮权重",
        icon: "palette",
        link: "skinning",
      },
      {
        text: "场景管理",
        icon: "folder",
        link: "scene",
      },
      {
        text: "独立插件",
        icon: "puzzle-piece",
        link: "plugins",
      },
    ],
  },
  {
    text: "关于",
    icon: "circle-info",
    link: "/intro",
  },
]);
