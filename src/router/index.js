import { createRouter, createWebHashHistory } from 'vue-router'

// 路由规则
const routes = []

// 创建路由实例
const router = createRouter({
  // hash模式
  history: createWebHashHistory(),
  routes
})

export default router
