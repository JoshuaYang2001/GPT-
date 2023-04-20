<template>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="全局设置" name="first">
      <div class="flex margin">
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
      <div class="flex margin">
        <span>主题</span>
        <div class="flex flex-wrap items-center gap-4">
          <template v-for="item of themeOptions" :key="item.key">
            <el-button>
              <el-icon @click="toggleMode" v-if="item.icon === 'light'"
                ><Sunny
              /></el-icon>
              <el-icon v-else> <Moon /> </el-icon>
            </el-button>
          </template>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="用户信息" name="second"
      >角色信息
      <div :class="{ dark: isDarkMode }">
        <!-- 在上面的div元素中添加了一个dark类，当isDarkMode为true时，该类会生效，从而实现深色模式。 -->

        <p :class="{ 'text-white': isDarkMode, 'text-black': !isDarkMode }">
          当前主题模式：{{ isDarkMode ? "深夜模式" : "白天模式" }}
        </p>

        <button
          :class="{ 'bg-gray-800': isDarkMode, 'bg-gray-200': !isDarkMode }"
          @click="toggleMode"
        >
          {{ isDarkMode ? "关闭深夜模式" : "开启深夜模式" }}
        </button>
      </div>
    </el-tab-pane>
    <el-tab-pane label="系统信息" name="third">系统信息</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import { useStore } from "@/store/modules/app/index";
import { storeToRefs } from "pinia";
const store = useStore();
// 使用storeToRefs才会变成响应式
const { isDarkMode } = storeToRefs(store);
function toggleMode() {
  store.toggleMode();
  console.log(isDarkMode);
}

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
    icon: "light",
  },
  {
    label: "Dark",
    key: "dark",
    icon: "dark",
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

  span {
    display: inline-block;
    margin-right: 20px;
  }
}
.margin {
  margin: 10px 20px 20px 0;
}
</style>
