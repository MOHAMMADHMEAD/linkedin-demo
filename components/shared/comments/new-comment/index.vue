<template>
  <div class="flex flex-row">
    <div class="w-[40px] h-[40px] mr-1">
      <Avatar/>
    </div>
    <div class="flex-1 relative text-gray-600">
      <input type="text" name="search" placeholder="Search"
             class="bg-white border-gray-300 w-full border h-10 px-5 pr-10 rounded-full text-sm focus:outline-none">
      <div class="absolute text-xl right-0 top-0 mt-1 mr-4">
        <i class="fa fa-smile-o mr-2"></i>
        <i class="fa fa-image"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "~/components/shared/avatar";

export default {
  name: "NewComment",
  components: {Avatar}
}
</script>

<style scoped>

</style>
