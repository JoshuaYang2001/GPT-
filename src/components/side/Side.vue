<template>
  <div class="flex flex-col w-72 h-screen bg-indigo-100 border-r-2 border-indigo-500">
    <div class="basis-11/12">
      <div class="cursor-pointer rounded-md m-4 border-dotted border-4 border-indigo-600 text-center">
        New Chat
      </div>
      <div class="flex cursor-pointer content-center items-center rounded-md m-4 p-2 border-solid border-2 border-indigo-600">
        <el-icon><chat-dot-square/></el-icon>
        <span class="ml-2 overflow-hidden text-ellipsis whitespace-nowrap">typescript 封装一个axios请求</span>
      </div>
    </div>
    <div class="flex items-center h-20 h-12 border-t-2 border-indigo-500">
      <div class="flex">
        <img class="ml-2 inline-block h-10 w-10 rounded-full ring-2 ring-white"
             src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
             alt="">
        <span class="leading-10 ml-2 font-bold">name</span>
        <el-icon><Setting/></el-icon>
      </div>
    </div>
  </div>
</template>