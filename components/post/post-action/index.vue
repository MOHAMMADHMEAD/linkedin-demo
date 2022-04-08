<template>
  <div class="grid-cols-4 grid justify-center items-center">
    <div class="flex justify-center text-sub-text flex-row hover:bg-gray-200 hover:rounded  p-2 cursor-pointer"
         :key="index"
         v-for="(action,index) in actions">
      <div class="icon mr-2"><i :class="action.icon"/></div>
      <div class="title ">{{ action.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostAction",
  props: {
    actions: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>

</style>
