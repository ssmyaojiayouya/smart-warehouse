<template>
  <div class="layout">
    <div class="login">
      <h2>用户登录</h2>
      <el-form label-width="70px" class="acco-pass">
        <el-form-item label="用户名：" prop="account">
        <el-input v-model="account"></el-input>
        </el-form-item>
        <el-form-item label="密码：" prop="password">
        <el-input type="password" v-model="password" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
        <el-button type="primary" @click="submitLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import { useRouter } from 'vue-router'

  const $router = useRouter()

  let account = ref('');
  let password = ref('');


  const submitLogin = () => {
    console.log(account, password)
    if (account.value === 'admin' && password.value === 'admin') {
      console.log('登录成功')
      // 跳转到  mainLayout.vue页面
      $router.push({
        path: '/threeD'
      })
    } else {
      console.log('登录失败')
    }
  }

</script>

<style lang="less" scoped>
.layout{
  height: 100%;
  width: 100%;
  background-image: url(../assets/backgroundImage.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  .login {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60%;
    left: 72%;
    h2{
      margin-left:150px;
      color: white;
    }
    .acco-pass {
      width: 350px;
      color: white;
    }
  }
}
/deep/ .el-form-item__label {
  color: white;
}

</style>
