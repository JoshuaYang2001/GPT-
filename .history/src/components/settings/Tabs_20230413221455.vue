<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="User" name="first">全局设置</el-tab-pane>
    <el-tab-pane label="Role" name="second">角色信息</el-tab-pane>
    <el-tab-pane label="System" name="third">系统信息</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue";
// import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
