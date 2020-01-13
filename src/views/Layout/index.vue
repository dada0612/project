<template>
    <el-container class="container">
        <el-header class="nav-bar" height="100px">
            <NavBar></NavBar>
        </el-header>
        <el-container>
            <el-aside width="230px" class="aside">
                <Silder class="slider-bar"></Silder>
            </el-aside>
            <el-main>
                <Main></Main>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
import NavBar from "./components/NavBar";
import Silder from "./components/Silder";
import Main from "./components/Main";
export default {
    name: "Layout",
    components:{ NavBar, Silder, Main }
}
</script>

<style scoped>
.container {
    width: 100vw;
    height: 100vh;
}
.nav-bar {
    width: 100%;
    height: 300px;
}
.aside {
    margin: 10px;
}
</style>