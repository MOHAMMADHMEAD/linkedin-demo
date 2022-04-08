<template>
  <Card custom-class="w-[540px] p-2 mobile:w-full mb-3">
    <div class="flex flex-col w-full">
      <div class="flex justify-end items-center  border-b">
        <Ellipsis/>
      </div>

      <div class="flex flex-row mt-3">
        <div class="w-[48px] mr-4">
          <Avatar/>
        </div>
        <div class="flex flex-col leading-5">
          <div class="name">{{ user.name }}</div>
          <div class="company text-sm text-slate-500">{{ user.company ? user.company.name : '' }}</div>
          <div class="time text-sm text-slate-500">5 h. <i class="fa fa-globe"></i></div>
        </div>
      </div>
      <a :href="`/post/${post.id}`" class="text-sm mt-3">
        {{ post.body }}
      </a>
      <div class="flex justify-end w-full border-b mt-3">
        <span class="text-sm text-slate-500 mb-3">{{ totalComments }} comment</span>
      </div>
      <div class="mt-1">
        <PostAction :actions="actions"/>
      </div>
      <div class="mt-2">
        <Comments :list="comments"/>
      </div>
    </div>

  </Card>
</template>

<script>
import Card from "~/components/shared/card";
import Ellipsis from "~/components/svg-icons/ellipsis";
import Avatar from "~/components/shared/avatar";
import PostAction from "~/components/post/post-action";
import Comments from "~/components/shared/comments";

export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      default: () => {
      }
    },
    showFullComments: {
      type: Boolean,
      default: () => true
    },
  },
  computed: {
    user() {
      return this.$store.getters["users/getUser"](this.post.userId)
    },
    comments() {
      let comments = this.$store.getters["comments/getPostComments"](this.post.id)
      this.totalComments = comments.length
      if (!this.showFullComments) {
        comments = comments.slice(0, 2)
      }
      return comments
    }
  },
  components: {Comments, PostAction, Avatar, Ellipsis, Card},
  data() {
    return {
      actions: [
        {
          title: 'Like',
          icon: 'fa fa-thumbs-up'
        },
        {
          title: 'Comment',
          icon: 'fa fa-comment'
        },
        {
          title: 'Share',
          icon: 'fa fa-share'
        },
        {
          title: 'Send',
          icon: 'fa fa-paper-plane'
        }

      ],
      totalComments: 0
    }
  }
}
</script>

<style scoped>

</style>
