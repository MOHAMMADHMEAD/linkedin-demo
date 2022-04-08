<template>
  <div class="flex flex-col">
    <Header/>
    <div class="container mx-auto mobile:px-2 mobile:pr-2 px-52">
      <Nuxt
        class="content-wrapper"
      />
    </div>
  </div>
</template>

<script>
import Header from "~/components/header";

export default {
  name: "default",
  components: {Header},
  created() {
    this.$store.dispatch('users/getUsers')
    this.$store.dispatch('comments/getComments')
    this.$store.dispatch('posts/getPosts')
  }
}
</script>

<style scoped>

</style>
