<script>
export default {
  name:'welcome'
}
</script>

<template>
   <div class="welcome">
    <h1>欢迎来到主页面</h1>
    <!-- <el-button>去登录</el-button> -->
    <router-link to="/login">去登陆</router-link>
  </div>
</template>

<style scoped>
.welcome{
  
}
</style>
