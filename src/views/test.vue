<script lang="ts" setup>
import { useRouter } from "vue-router";

// 引入i18n
// import { useI18n } from "vue-i18n";

// const { t } = useI18n();

// console.log(t("login.useName"));

// const { locale } = useI18n();

// const changeLang = (lang: string) => {
//   locale.value = lang;
//   localStorage.setItem("lang", lang); // 重要！下面遇到问题里解释
// };

const router = useRouter();

function goHome() {
  router.push("/");
}
</script>

<template>
  <div class="flex h-full">
    <div class="px-4 m-auto space-y-4 text-center max-[400px]">
      <h1 class="text-4xl text-slate-800 dark:text-neutral-200">
        Sorry, page not found!
      </h1>
      <p class="text-base text-slate-500 dark:text-neutral-400">
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </p>
      <div class="flex items-center justify-center text-center">
        <div class="w-[300px]">
          <img src="../../img/404.svg" alt="404" />
        </div>
      </div>
      <el-button type="primary" @click="goHome"> 回到首页 </el-button>

      <!-- <div>
        {{ `$t('login.userName')` }}
      </div>
      <div v-t="'login.password'"></div>

      <h1>看下面</h1>
      <template>
        <div class="menu">
          <div class="menu-item" @click="changeLang('en')">English</div>
          <div class="menu-item" @click="changeLang('zh')">中文</div>
        </div>
      </template> -->
    </div>
  </div>
</template>
