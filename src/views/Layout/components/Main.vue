<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
  </section>
</template>

<script>
export default {
  name: "Main"
};
</script>

<style lang="scss" scoped>
/*.app-main {*/
/*  width: 100%;*/
/*  position: relative;*/
/*  overflow: hidden;*/
/*}*/

</style>
