<template>
  <div class="Login-Page">
    <legend>
    登录
    <hr>
    <el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-loginForm">
  <el-form-item label="用户名" prop="username">
    <el-input type="password" v-model="loginForm.username" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="success" @click="submitForm('loginForm')">提交</el-button>
  </el-form-item>
</el-form>
</legend>
  </div>
</template>


<script>
  export default {
    data() {
      /**
       * @param { object } rule 就是一个表单验证对象
       * @param { String } value 输入值
       */
      var validateUsername = (rule, value, callback) => {
        //用户名正则，4到16位（字母，数字，下划线，减号）
        // var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
        if (!value) {
          callback(new Error('请输入4到16位(字母，数字，下划线，减号)'));
        } else{
          callback();
        }
      };
      var validatePassword = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入密码！'));
        } else{
          callback();
        }
      };
      return {
        loginForm: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { validator: validateUsername, trigger: 'blur' }
          ],
          password: [
            { validator: validatePassword, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
<style scoped>
/* 表单样式 */
.el-form {
    width: 400px;
}
</style>