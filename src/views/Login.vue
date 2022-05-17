<script>
// import {useRouter} from 'vue-router'
// const router = useRouter()
// const goHome = ()=>{
//   router.push('/welcome')
// }
export default{
  name:'Login',
  data(){
    return {
      user:{
        userName:'',
        userPwd:''
      },
      rules:{
        userName: [
          {
            required:true,message:"请输入用户名",trigger:"blur"
          }
        ],
        userPwd: [
          {
            required:true,message:"请输入密码",trigger:"blur"
          }
        ]
      }
    }
  },
  methods:{
    login(){
      this.$refs.userForm.validate((valid)=>{
        if(valid){
          this.$api.login(this.user).then((res)=>{
            //跨页面数据交互
            this.$store.commit('saveUserInfo',res)
            this.$router.push('/welcome')
          })
          //原来的方法如下，也是可以的
          // this.$request.post('/users/login').then((res)=>{
          //   this.$router.push('welcome')
          // })
        }else{
          return false
        }
      })
    },
    goHome(){
      this.$router.push('/welcome')
    }
  }
}
</script>

<template>
  <div>
    <div class="login-wrapper">
      <div class="modal">
        <!-- ref提供操作原生DOM的一个句柄，方便我们操作 -->
        <el-form ref="userForm" :model="user" status-icon :rules="rules">
          <div class="title">火星</div>
          <!-- 校验时 必须在标签填入prop -->
          <el-form-item prop="userName">
            <el-input type="text" prefix-icon="el-icon-user" v-model="user.userName"/>
          </el-form-item>
          <el-form-item prop="userPwd">
            <el-input type="password" prefix-icon="el-icon-view" v-model="user.userPwd"/>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="btn-login" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .login-wrapper{
    display: flex;
    //水平居中
    justify-content: center;
    //垂直居中
    align-items: center;
    background-color: #f9fcff;
    //1vw等于宽度的百分之一
    width: 100vw;
    height: 100vh;
    .modal{
      width: 500px;
      padding: 50px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: 0px 0px 10px 3px #c7c9cb4d;
    }
    .title{
      font-size: 50px;
      line-height: 1.5;
      text-align: center;
      margin-bottom: 30px;
    }
    .btn-login{
      width: 100%;
    }
  }
</style>
