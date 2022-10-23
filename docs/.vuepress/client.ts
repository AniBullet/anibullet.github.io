import { defineClientConfig } from "@vuepress/client";
import Layout from "./wrapper";

export default defineClientConfig({
  // 你可以在这里覆盖或新增布局
    layouts: {
    // 比如这里我们将 vuepress-theme-hope 的默认布局改为自己主题下的 layouts/Layout.vue
        Layout,
    },
});
