<template>
  <div class="flex flex-row mobile:flex-col  pt-10">
    <aside class="mobile:mb-2 mr-5 mobile:mr-0">
      <Recent/>
    </aside>
    <main class="mobile:mb-2">
      <PostCard v-for="post in posts" :show-full-comments="false" :post="post"/>
    </main>
  </div>
</template>

<script>
import UserCard from "~/components/shared/user-card";
import PostCard from "~/components/post";
import InterestedCard from "~/components/shared/intrested";
import InterestedList from "~/components/intrested-list";
import Recent from "~/components/recent";

export default {
  name: 'Home',
  components: {Recent, InterestedList, InterestedCard, PostCard, UserCard},

  computed: {
    posts() {
      let posts = [...this.$store.getters["posts/getPostsList"]]
      return posts.splice(0, 10)
    },
  }
}
</script>

<style lang="scss" scoped>
.s {

}
</style>
