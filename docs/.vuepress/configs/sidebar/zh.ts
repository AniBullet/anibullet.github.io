import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/posts/': [
    {
      text: '测试',
      children: [
        '/posts/1.html',
      ],
    },
  ],
}
