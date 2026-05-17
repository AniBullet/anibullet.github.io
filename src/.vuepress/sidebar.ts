import { sidebar } from "vuepress-theme-hope";

// 通用侧边栏配置
const commonSidebar = [
  {
    text: "快速开始",
    icon: "lightbulb",
    collapsible: false,
    children: [
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
        text: "关于作者",
        icon: "circle-info",
        link: "/intro",
      },
    ],
  },
  {
    text: "BsKeyTools",
    icon: "wrench",
    collapsible: false,
    children: [
      {
        text: "工具首页",
        icon: "house",
        link: "/tools/bskeytools/",
      },
      {
        text: "快速入门",
        icon: "rocket",
        link: "/tools/bskeytools/quickstart",
      },
      {
        text: "安装指南",
        icon: "download",
        link: "/tools/bskeytools/install",
      },
      {
        text: "功能总览",
        icon: "list",
        link: "/tools/bskeytools/features",
      },
    ],
  },
  {
    text: "工具详解",
    icon: "cubes",
    collapsible: true,
    children: [
      {
        text: "动画工具",
        icon: "film",
        link: "/tools/bskeytools/animation",
      },
      {
        text: "骨骼绑定",
        icon: "sitemap",
        link: "/tools/bskeytools/rigging",
      },
      {
        text: "蒙皮权重",
        icon: "palette",
        link: "/tools/bskeytools/skinning",
      },
      {
        text: "场景管理",
        icon: "folder",
        link: "/tools/bskeytools/scene",
      },
      {
        text: "视口显示",
        icon: "eye",
        link: "/tools/bskeytools/viewport",
      },
      {
        text: "动画重定向",
        icon: "right-left",
        link: "/tools/bskeytools/retarget",
      },
    ],
  },
  {
    text: "插件扩展",
    icon: "puzzle-piece",
    collapsible: true,
    children: [
      {
        text: "独立插件",
        icon: "puzzle-piece",
        link: "/tools/bskeytools/plugins",
      },
      {
        text: "链条工具",
        icon: "link",
        link: "/tools/bskeytools/ChainsTools",
      },
    ],
  },
];

export default sidebar({
  "/": commonSidebar,
  "/guide/": commonSidebar,
  "/faq": commonSidebar,
  "/intro": commonSidebar,
  "/tools/": commonSidebar,
  "/tools/bskeytools/": commonSidebar,

  "/functions/": [
    {
      text: "方法整理",
      icon: "code",
      children: ["maxscript"],
    },
  ],
});
