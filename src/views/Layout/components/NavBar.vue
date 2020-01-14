<template>
  <div class="nav-bar-container">
    <p class="nav-bar-logo">ZK统计分析系统</p>
    <div class="nav-bar-menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        text-color='#409EFF'
        active-text-color='#2cf5ff'
      >
        <el-menu-item index="1">
          <p>态势显示</p>
        </el-menu-item>

        <el-menu-item index="2">
          <p>ZS统计</p>
        </el-menu-item>

        <el-menu-item index="3">
          <p>ZG统计</p>
        </el-menu-item>

        <el-menu-item index="4">
          <p>消耗统计</p>
        </el-menu-item>
        <el-menu-item index="5">
          <p>统计制定</p>
        </el-menu-item>
        <el-menu-item index="6">
          <p>系统设置</p>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="nav-bar-user">
      <div>
        <img src="../../../assets/help.png" alt="帮助" />
        <span>帮助</span>
        <span class="segmentation"> | </span>
        <span>关于 </span>
        <span class="segmentation"> | </span>
        <span>退出</span>
      </div>
      <div class="user-name">
        <span>admin</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped>
.nav-bar-container {
  width: 100%;
  height: 100%;
  display: flex;
  border-bottom: 1px solid white;
}
.nav-bar-logo {
  width: 250px;
  height: 60px;
  /*background-color: #2a568b;*/
  background-image: url("../../../assets/topleft.jpg");
  background-repeat: no-repeat;
  background-size: 250px 60px;
  text-align: center;
  line-height: 60px;
  color: white;
  font-size: 25px;
  border-radius: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.nav-bar-menu {
  flex-grow: 1;
}
.el-menu-demo {
  margin-left: 80px;
  height: 100px;
  overflow: hidden;
}
/* .menu-item-img {
  display: block;
  margin-top: 10px;
} */
.nav-bar-user {
  /*width: 150px;*/
  flex: 0 0 150px;
  text-align: center;
  padding: 20px 0;
}
.segmentation {
  color: #01a8ab;
}
.user-name {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: rgba(0,0,0,0.3);
  border-radius: 20px;
  margin-top: 10px;
}
</style>
