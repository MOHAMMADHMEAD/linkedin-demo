<template>
  <Card custom-class="w-[315px] mobile:w-full">
    <div class="flex flex-col w-full p-2">
      <div class="text-base mb-2">
        {{ title }}
      </div>
      <div>
        <UserInfo/>
      </div>
      <div
        class=" flex justify-start px-12">
        <button class="w-[100px] follow-btn lg:text-sm text-lg font-bold">
          <i class="fa fa-plus mr-2"></i>Follow
        </button>
      </div>
    </div>
  </Card>
</template>

<script>
import UserInfo from "~/components/shared/user-info";
import Card from "~/components/shared/card";

export default {
  name: "InterestedCard",
  props: {
    title: {
      type: String,
      default: () => 'title'
    },
    user: {
      type: Object,
      default: () => {
      }
    },
  },
  components: {Card, UserInfo}
}
</script>

<style scoped lang="scss">
@import "intrested";
</style>
