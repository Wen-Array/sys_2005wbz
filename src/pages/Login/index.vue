<template>
  <div class="Login-Page">
    <legend>
      登录
      <hr />
      <el-form
        :model="loginForm"
        status-icon
        :rules="rules"
        ref="loginForm"
        label-width="100px"
        class="demo-loginForm"
      >
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model="loginForm.username"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="submitForm('loginForm')"
            >提交</el-button
          >
        </el-form-item>
      </el-form>
    </legend>
  </div>
</template>


<script>
//登录页面逻辑
//收集用户登录的username和password传递给后端

//登录通过后，将后端返回的token存到本地,跳转到主页

//每次请求的时候携带token

//展示token校验正确的数据

//校验不通过，跳到登录页面

import { login } from "@/api";
import{mapMutations} from "vuex";

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
        callback(new Error("请输入4到16位(字母，数字，下划线，减号)"));
      } else {
        callback();
      }
    };
    var validatePassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码！"));
      } else {
        callback();
      }
    };
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ validator: validateUsername, trigger: "blur" }],
        password: [{ validator: validatePassword, trigger: "blur" }]
      }
    };
  },
  methods: {
    ...mapMutations(['SET_USERINFO']),
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //代表本地校验通过

          //打开登入加载动画
          const loading = this.$loading({
            lock: true,
            text: "正在登录……",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.7)"
          });

          let { username, password } = this.loginForm; //解构出来
          //发送登入请求
          login(username, password)
            .then(res => {
              //服务器响应，关闭loading动画
              setTimeout(() => {
                loading.close();
              });

              if (res.data.state) {
                //用户名密码正确
                localStorage.setItem("wf-token", res.data.token);
                localStorage.setItem("wf-userInfo", JSON.stringify(res.data.userInfo));
                //更改vuex中的state['userinfo']的值
                this.SET_USERINFO(res.data.userInfo)
                //跳转到主页
                this.$router.push("/");
                this.$message.success("登录成功");
              } else {
                //用户名密码错误
                this.$message.error("用户名密码错误");
              }
            })
            .catch(err => {
              console.log(err);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style scoped>
/* 表单样式 */
.el-form {
  width: 400px;
}
</style>