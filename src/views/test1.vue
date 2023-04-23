<template>
  <div class="menu">
    <div class="menu-item" @click="changeLang('en')">English</div>
    <div class="menu-item" @click="changeLang('zh')">中文</div>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
const { locale } = useI18n();

const changeLang = (lang: string) => {
  locale.value = lang;
  localStorage.setItem("lang", lang); // 重要！下面遇到问题里解释
};
</script>
