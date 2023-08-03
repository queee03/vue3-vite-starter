import { createRouter, createWebHistory } from 'vue-router'
// 插件 vite-plugin-pages 自动生成的路径配置
import routes from '~pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(() => {
  //
})

export default router
