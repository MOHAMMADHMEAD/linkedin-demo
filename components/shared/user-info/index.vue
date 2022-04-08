<template>
  <div class="flex flex-row">
    <div class="mb-4 mr-3 w-[48px] h-[48px]">
      <Avatar/>
    </div>
    <div class="flex justify-start flex-1">
      <div class="info flex justify-start flex-col">
        <div>Mohammad Ihmaid</div>
        <div class="text-sm text-slate-500">CEO</div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "~/components/shared/avatar";

export default {
  name: "UserInfo",
  components: {Avatar}
}
</script>

<style scoped>

</style>
