<template>
  <div
    class="h-full bg-white dark:bg-slate-800 px-6 py-8 ring-1 ring-slate-900/5 shadow-xl"
  >
    <div>
      <div class="flex items-stretch justify-center">
        <div
          class="px-16 py-4 bg-cyan-400 dark:bg-indigo-500 shadow-lg shadow-cyan-500/50 text-white rounded-md m-1"
        >
          Flex01
        </div>
        <div
          class="self-auto bg-cyan-400 dark:bg-indigo-500 shadow-lg shadow-cyan-500/50 px-16 py-4 text-white rounded-md m-1"
        >
          Flex02
        </div>
        <div
          class="px-16 py-4 bg-cyan-400 dark:bg-indigo-500 shadow-lg shadow-cyan-500/50 text-white m-1 rounded-md"
        >
          Flex03
        </div>
      </div>
      <div class="my-20">
        <button
          class="text-white px-2.5 py-1.5 mx-10 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-md"
          @click="lightMode"
        >
          普通模式
        </button>
        <button
          class="text-white px-2.5 py-1.5 mx-10 bg-blue-500 shadow-lg shadow-blue-500/50 rounded-md"
          @click="darkMode"
        >
          暗黑模式
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const darkMode = () => {
  //这个条件用于判断当前系统应用模式是否开启了“暗”模式（win10在   个性化-颜色-选择默认应用模式  中修改）
  // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  if (localStorage.theme === "dark" || !("theme" in localStorage)) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  localStorage.theme = "light";

  localStorage.theme = "dark";

  localStorage.removeItem("theme");
};
const lightMode = () => {
  document.documentElement.classList.remove("dark");
};
</script>
