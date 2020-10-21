<template>
  <div class="Home-page">
    <el-container>
      <el-aside width="200px">
        <!-- 侧边栏 -->
        <subMenu></subMenu>
      </el-aside>
      <el-container>
        <!-- 顶部栏 -->
        <el-header>
          <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="6"
              ><div class="grid-content bg-purple">图标</div></el-col
            >
            <el-col :span="6"
              ><div class="grid-content bg-purple-light">
                万能管理系统
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
                <b class="nickname">{{userInfo.nickname}}</b>
                <span class="quit"
                @click="quit">退出</span>
              </div></el-col
            >
          </el-row>
        </el-header>
        <!-- 主题内容 -->
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import { getLoginLog } from "@/api";
import subMenu from "../../components/subMenu";
import { mapState } from "vuex";
export default {
  computed:{
    ...mapState(['userInfo'])
  },
  components: {
    subMenu
  },
  mounted() {
    getLoginLog().then(res => {
      console.log(res);
    });
  },
  methods:{
    quit(){
      localStorage.removeItem("wf-token")
      localStorage.removeItem("wf-userInfo")
      this.$router.push("/login")
    }
  }
};
</script>
<style>
.quit{
  cursor: pointer;
  color: rgb(127, 129, 255);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
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
  &:last-child {
    margin-bottom: 0;
  }
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
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>