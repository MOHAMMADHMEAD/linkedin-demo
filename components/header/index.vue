<template>
  <header class="bg-white header h-14 items-center flex">
    <div class="container items-center mx-auto flex flex-row mobile:px-2 mobile:pr-2 px-52">
      <div class="flex justify-start">
        <i class="fa mr-3 fa-linkedin-square text-4xl text-blue-700"></i>
        <div class="flex search h-10 items-center px-4  w-72 space-x-4 rounded-lg">
          <i class="fa fa-search"></i>
          <input class="bg-gray-100 outline-none" type="text" placeholder="search"/>
        </div>
      </div>
      <div class="flex flex-1 text-sub justify-end mobile:hidden">
        <div class="flex justify-center  items-center flex-col mr-2 relative">
          <i class="fa fa-home text-2xl"></i>
          <span class="text-sm">Home</span>
          <span
            class="absolute top-1 right-0  inline-block rounded-full text-white bg-red-500 px-1 py-1 text-xs font-bold mr-3"></span>
        </div>
        <div class="flex justify-center items-center flex-col">
          <i class="fa fa-users text-2xl"></i>
          <span class="text-sm">My Network</span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
@import "header.scss";
</style>
