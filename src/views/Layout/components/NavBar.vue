<template>
  <div class="nav-bar-container">
    <p class="nav-bar-logo">ZK统计分析系统</p>
    <div class="nav-bar-menu">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">
          <img
            src="../../../assets/icon01.png"
            alt="态势显示"
            class="menu-item-img"
          />
          <span>态势显示</span>
        </el-menu-item>

        <el-menu-item index="2">
          <img
            src="../../../assets/icon02.png"
            alt="ZS统计"
            class="menu-item-img"
          />
          <span>ZS统计</span>
        </el-menu-item>

        <el-menu-item index="3">
          <img
            src="../../../assets/icon03.png"
            alt="ZG统计"
            class="menu-item-img"
          />
          <span>ZG统计</span>
        </el-menu-item>

        <el-menu-item index="4">
          <img
            src="../../../assets/icon04.png"
            alt="消耗统计"
            class="menu-item-img"
          />
          <span>消耗统计</span>
        </el-menu-item>
        <el-menu-item index="5">
          <img
            src="../../../assets/icon05.png"
            alt="统计制定"
            class="menu-item-img"
          />
          <span>统计制定</span>
        </el-menu-item>
        <el-menu-item index="6">
          <img
            src="../../../assets/icon06.png"
            alt="系统设置"
            class="menu-item-img"
          />
          <span>系统设置</span>
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
  width: 200px;
  height: 50px;
  /*background-color: #2a568b;*/
  background-image: url("../../../assets/topleft.jpg");
  background-repeat: no-repeat;
  background-size: 200px 50px;
  text-align: center;
  line-height: 50px;
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
.menu-item-img {
  display: block;
  margin-top: 10px;
}
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
