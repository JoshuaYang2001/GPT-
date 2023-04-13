<template>
  <el-tabs class="demo-tabs">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>
</template>

<script setup lang="ts">
import { ElTabs } from "element-plus";
</script>

<style lang="less" scoped>
.tabs {
}
</style>
