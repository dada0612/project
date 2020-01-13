<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 100vw;
  height: 100vh;
  background-image: url("./assets/background-image.png");
  background-repeat: no-repeat;
  background-size: 100vw 100vh;
  user-select: none;
  color: white;
  font-size: 12px;
  overflow: hidden;
}
.el-menu {
  background: none !important;
}
.el-menu--horizontal>.el-menu-item {
  height: 100px !important;
}
.el-menu.el-menu--horizontal {
  border-bottom: none !important;
}
</style>
