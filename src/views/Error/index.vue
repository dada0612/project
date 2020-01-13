<template>
    <div class="err-container">
        <img src="../../assets/404.png" alt="404-error" class="error-img">
    </div>
</template>

<script>
export default {
  name: "Error"
};
</script>

<style scoped>
    .err-container {
        width: 100vw;
        height: 100vh;
    }
    .error-img {
        width: 500px;
        height: 150px;
        display: block;
        margin: calc(50vh - 75px) auto;
    }
</style>
