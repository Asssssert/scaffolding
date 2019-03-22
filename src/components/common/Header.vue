<template>
  <div class="header">
    <div class="h-name">
      <el-dropdown size="small" placement="bottom-start" trigger="click" @command="handleCommand">
      <span class="el-dropdown-link">
        张三<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">个人设置</el-dropdown-item>
          <el-dropdown-item command="b">注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    components: {},
    data() {
      return {}
    },
    mounted: function () {
    },
    methods: {
      handleCommand(command) {
      }
    },
    filters: {}
  }
</script>

<style scoped>

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }

  .h-name {
    position: relative;
    top: 50%;
    transform: translate(100%, 80%);
    margin-right: 150px;
  }

  .header {
    overflow:hidden;
    height: 75px;
  }
</style>
