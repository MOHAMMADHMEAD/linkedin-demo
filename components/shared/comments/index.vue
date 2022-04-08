<template>
  <div class="flex flex-col">
    <div class="mb-2">
      <NewComment/>
    </div>
    <div class="mb-2" v-for="comment in list">
      <Comment :comment="comment"/>
    </div>
  </div>
</template>

<script>
import NewComment from "~/components/shared/comments/new-comment";
import Comment from "~/components/shared/comments/comment";

export default {
  name: "Comments",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  components: {Comment, NewComment},
}
</script>

<style scoped>

</style>
