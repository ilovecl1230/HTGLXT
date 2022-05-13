<script>
export default {
  name:'app',
  mounted(){
    this.$storage.setItem('userInfo',{age:30,name:'jack'})
    // this.$storage.clearItem("name")
    // this.$storage.clearAll()
  }
}
</script>

<template>
  <router-view></router-view>
</template>

<style>

</style>
