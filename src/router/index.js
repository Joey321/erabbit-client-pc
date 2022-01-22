import { createRouter, createWebHashHistory } from 'vue-router'

// 路由懒加载
const Layout = () => import('@/views/Layout.vue')
const Home = () => import('@/views/home')
// 路由规则
const routes = [
  // 一级路由Layout
  {
    path: '/',
    component: Layout,
    children: [
      { path: '/', component: Home }
    ]
  }
]
// 创建路由实例
const router = createRouter({
  // hash模式
  history: createWebHashHistory(),
  routes
})

export default router
