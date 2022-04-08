<template>
  <div class="flex flex-col">
    <div class="mb-2">
      <h1 class="text-xl">Intrestes</h1>
    </div>
    <InterestedCard :title="item.title" class="mb-6" v-for="item in list"/>
    <div>

    </div>
  </div>
</template>

<script>
import InterestedCard from "~/components/shared/intrested";

export default {
  name: "InterestedList",
  components: {InterestedCard},
  data() {
    return {
      list: [
        {
          title: 'User1'
        },
        {
          title: 'User2'
        },
        {
          title: 'User3'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
