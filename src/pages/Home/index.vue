<template>
  <div class="Home-page">
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200">
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          :router="true"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">导航一
            </template>
            <el-menu-item-group>
              <span slot="title">分组一</span>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/student">
            <i class="el-icon-menu"></i>
            <span slot="title">学员信息</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶部栏 -->
        <el-header>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6"
              ><div class="grid-content bg-purple">
                <i
                  class="iconfont icon-shouqi"
                  @click="isCollapse = !isCollapse"
                ></i>
                图标
              </div>
            </el-col>
            <el-col :span="6"
              ><div class="grid-content bg-purple-light">
                万锋管理系统
              </div></el-col
            >
            <el-col :span="6"
              ><div class="grid-content bg-purple">
                <el-avatar
                  shape="square"
                  :size="40"
                  fit="fit"
                  src="http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIzXDib7zrmdYxdEQpYk85B26DZAJS6PUJC7ic4Fydibdz9L2gU3hloPcibuyo0xAFztxqPbgdVWp1zpQ/132"
                ></el-avatar>
                <span>欢迎您：</span>
                <b class="nickname">{{ userInfo.nickname }}</b>
                <span class="quit" @click="quit">退出</span>
              </div></el-col
            >
          </el-row>
        </el-header>
        <!-- 主题内容 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import { getLoginLog } from "@/api";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["userInfo"])
  },
  components: {},
  data() {
    return {
      isCollapse: false
    };
  },
  mounted() {
    getLoginLog().then(res => {
      console.log(res);
    });
  },
  methods: {
    quit() {
      localStorage.removeItem("wf-token");
      localStorage.removeItem("wf-userInfo");
      this.$router.push("/login");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
.icon-shouqi {
  cursor: pointer;
}
.quit {
  cursor: pointer;
  color: rgb(127, 129, 255);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header,
.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
.el-avatar {
  vertical-align: middle;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.el-row {
  margin-bottom: 20px;
}
.el-row:last-child {
  margin-bottom: 0;
  padding: 0;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  background-color: #ffffff;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>