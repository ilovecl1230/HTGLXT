<script>
export default {
  name:'app'
}
</script>

<template>
<!-- 路由的使用，从App组件开始解析，直接跳转到home路由（Home组件） -->
  <router-view></router-view>
</template>

<style lang="scss">
@import './assets/style/reset.css';
@import './assets/style/index.scss';
</style>
