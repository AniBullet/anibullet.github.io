import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "下载安装",
    icon: "install",
    link: "/guide/",
  },
  {
    text: "常见问题",
    icon: "ask",
    link: "/faq",
  },
  {
    text: "BsKeyTools",
    icon: "tool",
    prefix: "/tools/bskeytools/",
    children: [
      {
        text: "工具首页",
        icon: "home",
        link: "",
      },
      {
        text: "快速入门",
        icon: "launch",
        link: "quickstart",
      },
      {
        text: "功能总览",
        icon: "list",
        link: "features",
      },
      {
        text: "动画工具",
        icon: "animation",
        link: "animation",
      },
      {
        text: "骨骼绑定",
        icon: "tree",
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
        icon: "plugin",
        link: "plugins",
      },
    ],
  },
  {
    text: "关于",
    icon: "info",
    link: "/intro",
  },
]);
