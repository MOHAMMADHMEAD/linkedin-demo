<template>
  <div class="flex flex-row mobile:flex-col  pt-10">
    <aside class="mobile:mb-2 mr-5 mobile:mr-0">
      <Recent/>
    </aside>
    <main class="mobile:mb-2" ref="post-list">
      <div class="flex flex-col">
        <vue-loadmore
          :on-loadmore="loadMore"
          :immediate-check="true"
          :finished="stopScroll"
        >
          <PostCard v-for="(post,i) in items" :id="post.id" :show-full-comments="false"
                    :post="post"/>
        </vue-loadmore>
      </div>
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
  data() {
    return {
      start: 0,
      end: 10,
      stopScroll: false,
      items: []
    }
  },
  computed: {
    posts() {
      let posts = [...this.$store.getters["posts/getPostsList"]]
      return posts
    },
  },
  mounted() {
    this.items = this.posts.slice(this.start, this.end)
  },
  methods: {
    loadMore(done) {
      if (this.start + 10 < this.posts.length && this.end + 10 < this.posts.length) {
        this.start += 10
        this.end += 10
        this.items = this.items.concat(this.posts.slice(this.start, this.end))
        console.log('load', this.posts.length)
        done()
      }
      done()
    },
  }
}
</script>
