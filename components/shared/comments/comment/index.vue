<template>
  <div class="flex flex-row">
    <div class="w-[40px] h-[40px] mr-1 mt-1">
      <Avatar/>
    </div>
    <div class="bg-gray-100 flex-1 relative rounded-xl text-black flex flex-col leading-5 p-4">
      <div class="name">{{ comment.name }}</div>
      <div class="company text-sm text-slate-500 mb-2">{{ user.company ? user.company.name : '' }}</div>
      <div class="time text-sm">
        {{ comment.body }}
      </div>
      <div class="action-list absolute top-4 text-slate-500 right-3 cursor-pointer">
        <i class="fa fa-ellipsis-h"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "~/components/shared/avatar";

export default {
  name: "Comment",
  props: {
    comment: {
      type: Object,
      default: () => {
      }
    }
  },
  computed: {
    user() {
      return this.$store.getters["users/getUser"](this.comment.postId)
    },
  },
  components: {Avatar}
}
</script>

<style scoped>

</style>
