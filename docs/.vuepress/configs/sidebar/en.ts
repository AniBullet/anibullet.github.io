import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/en/posts/': [
    {
      text: 'Test',
      children: [
        '/en/posts/1.html',
      ],
    },
  ],
}
