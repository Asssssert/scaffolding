<template>
  <el-container>
    <el-header height="80px">
      <router-view name="header"></router-view>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <router-view name="aside"></router-view>
      </el-aside>
      <el-container>
        <el-main>
          <router-view name="main"></router-view>
        </el-main>
        <el-footer>
          <router-view name="footer"></router-view>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
  export default {
    name: "Home",
    components: {},
    data() {
      return {}
    },
    mounted: function () {
    },
    methods: {},
    filters: {}
  }
</script>

<style scoped>

  .el-header{
    background-color: #B3C0D1;
    padding: 0px;
  }
</style>
