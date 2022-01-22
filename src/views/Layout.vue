<template>
<!-- 顶部导航 -->
  <AppTopnav />
<!-- 头部 -->
  <AppHeader />
  <!-- 主体 -->
  <div class="app-body">
    <!-- 二级路由Home -->
    <RouterView />
  </div>
  <!-- 底部 -->
  <AppFooter />
</template>

<script>
import AppTopnav from '@/components/app-topnav.vue'
import AppHeader from '@/components/app-header.vue'
import AppFooter from '@/components/app-footer.vue'
export default {
  components: {
    AppTopnav,
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="less" scoped>
  .app-body {
    height: 600px;
  }
</style>
