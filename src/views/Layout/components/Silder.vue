<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      text-color="#909399"
      active-text-color="rgb(0,229,238)"
    >
      <p class="silder-title">
        <span>编成树</span>
      </p>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-tickets" />
          <span>红方</span>
        </template>
        <el-menu-item index="1-1">
          <i class="el-icon-menu" />
          <span
            ><router-link to="/map" class="clear-decoration"
              >部队1</router-link
            ></span
          >
        </el-menu-item>
        <el-menu-item index="1-2">
          <i class="el-icon-menu" />
          <span>部队2</span>
        </el-menu-item>
        <el-menu-item index="1-3">
          <i class="el-icon-menu" />
          <span>部队3</span>
        </el-menu-item>
        <el-menu-item index="1-4">
          <i class="el-icon-menu" />
          <span>部队4</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-position" />
          <span>蓝方</span>
        </template>
        <el-menu-item index="2-1">
          <i class="el-icon-menu" />
          <span>部队1</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <i class="el-icon-menu" />
          <span>部队2</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <i class="el-icon-menu" />
          <span>部队3</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-edit-outline" />
          <span>绿方</span>
        </template>
        <el-menu-item index="3-1">
          <i class="el-icon-menu" />
          <span>部队1</span>
        </el-menu-item>
        <el-menu-item index="3-2">
          <i class="el-icon-menu" />
          <span>部队2</span>
        </el-menu-item>
        <el-menu-item index="3-3">
          <i class="el-icon-menu" />
          <span>部队3</span>
        </el-menu-item>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-date" />
          <span>紫方</span>
        </template>
        <el-menu-item index="4-1">
          <i class="el-icon-menu" />
          <span>部队1</span>
        </el-menu-item>
        <el-menu-item index="4-2">
          <i class="el-icon-menu" />
          <span>部队2</span>
        </el-menu-item>
        <el-menu-item index="4-3">
          <i class="el-icon-menu" />
          <span>部队3</span>
        </el-menu-item>
        <el-menu-item index="4-4">
          <i class="el-icon-menu" />
          <span>部队4</span>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Silder",
  data() {
    return {
      isCollapse: true
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  height: calc(100vh - 130px);
  background: none;
  border: 1px solid rgb(0, 143, 254);
  border-radius: 5px;
  box-sizing: border-box;
  overflow-y: auto;
}
.el-menu-vertical-demo::-webkit-scrollbar {
  width: 4px;
}
.el-menu-vertical-demo::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgb(142, 213, 181);
  background: rgba(177, 167, 248, 0.26);
}
.el-menu-vertical-demo::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(142, 213, 181, 0.2);
  border-radius: 0;
  background: rgba(177, 167, 248, 0.26);
}
.silder-title {
  font-size: 18px;
  margin: 0;
  text-align: center;
}
.silder-title span {
  display: inline-block;
  width: 80px;
  height: 30px;
  border-bottom: 1px solid rgb(0, 143, 254);
  position: relative;
}
.silder-title span::before {
  content: "";
  display: inline-block;
  height: 35px;
  width: 1px;
  background: rgb(0, 143, 254);
  transform: rotate(-30deg);
  transform-origin: -15px 58px;
  position: absolute;
}
.silder-title span::after {
  content: "";
  display: inline-block;
  height: 35px;
  width: 1px;
  position: absolute;
  background: rgb(0, 143, 254);
  transform: rotate(30deg);
  transform-origin: 15px 57px;
}
.clear-decoration {
  color: #909399;
  text-decoration: none;
}
</style>
