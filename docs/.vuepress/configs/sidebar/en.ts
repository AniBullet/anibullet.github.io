import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/en/guide/': [
    {
      text: 'Test',
      children: [
        '/en/guide/1.md',
      ],
    },
  ],
}
