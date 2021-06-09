import { createRouter, createWebHashHistory } from 'vue-router'
import tabBar from './modules/tabBar'
// 静态路由
export const constantRoutes = [tabBar]

// 动态路由
export const asyncRoutes = []

const router = createRouter({
  // 新的 history 配置取代 mode
  history: createWebHashHistory(),
  routes: constantRoutes
  // Vue3 中scrollBehavior返回的对象 x 改名为 left，y 改名为 top
  // scrollBehavior: () => ({ top: 0 })
})

export default router
