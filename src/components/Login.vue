<script>
// import {useRouter} from 'vue-router'
// const router = useRouter()
// const goHome = ()=>{
//   router.push('/welcome')
// }
import Welcome from './Welcome.vue'
export default{
  name:'Login',
  components:{Welcome},
  mounted(){
    /*
    this.$request({
      method:'get',
      url:'/login',
      data:{
        name:'jack'
      }
    }).then((res)=>{
      console.log(res);
    })
    */
   this.$request.get('/login',{name:'jack'},{mock:true,loading:true}).then(()=>{
     console.log(res);
   })
  },
  methods:{
    goHome(){
      this.$router.push('/welcome')
    }
  }
}
</script>

<template>
  <div>
    <h1>欢迎来到登录页面</h1>
    <el-button @click="goHome">回首页</el-button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
