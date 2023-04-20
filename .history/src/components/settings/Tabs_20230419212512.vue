<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="全局设置" name="first">
      <div class="flex">
        <span>语言</span>
        <el-select v-model="value" placeholder="Select">
          <el-option
            v-for="item in languageOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="flex">
        <span>主题</span>
        <div class="flex flex-wrap items-center gap-4">
          <template v-for="item of themeOptions" :key="item.key">
            <el-button>
              <el-icon v-if="item.icon === '1'"><Sunny /></el-icon>
              <el-icon v-else> <Moon /> </el-icon>
            </el-button>
          </template>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="用户信息" name="second">角色信息</el-tab-pane>
    <el-tab-pane label="系统信息" name="third">系统信息</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue";
// import type { TabsPaneContext } from "element-plus";
const value = ref("");
// 语言选项
const languageOptions = [
  {
    value: "Chinese",
    label: "简体中文",
  },
  {
    value: "English",
    label: "English",
  },
];
// 主题选项
const themeOptions = [
  {
    label: "Light",
    key: "light",
    icon: "1",
  },
  {
    label: "Dark",
    key: "dark",
    icon: "2",
  },
];
const activeName = ref("first");
</script>
<style lang="less" scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.flex {
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  span {
    display: inline-block;
    margin-right: 20px;
  }
}
</style>
