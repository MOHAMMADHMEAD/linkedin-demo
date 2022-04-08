<template>
  <div class="flex flex-row mobile:flex-col justify-between pt-10">
    <aside class="mobile:mb-2">
      <UserCard/>
    </aside>
    <main class="mobile:mb-2">
      <PostCard v-if="post&&post.id" :post="post"/>
    </main>
    <aside class="mobile:mb-2">
      <InterestedList/>
    </aside>
  </div>
</template>

<script>
import InterestedList from "~/components/intrested-list";
import InterestedCard from "~/components/shared/intrested";
import PostCard from "~/components/post";
import UserCard from "~/components/shared/user-card";

export default {
  name: "PostDetails",
  components: {InterestedList, InterestedCard, PostCard, UserCard},
  data() {
    return {
      post: {}
    }
  },
  async mounted() {
    if (this.$store.getters["posts/getPostsList"].length > 0) {
      this.post = this.$store.getters["posts/getPostById"](this.$route.params.id)
    } else {
      this.post = (await this.$store.dispatch('posts/getPost'))(this.$route.params.id)
    }
  }

}
</script>

<style scoped>

</style>
