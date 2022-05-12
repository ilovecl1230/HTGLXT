<script>
export default {
  name:'welcome',
  props:['msg']
}
</script>

<template>
   <div>
    <h1>欢迎来到主页面-{{msg}}</h1>
    <!-- <el-button>去登录</el-button> -->
    <router-link to="/login">去登陆</router-link>
  </div>
</template>

<style scoped>

</style>
