<template>
  <Card custom-class="w-[225px] mobile:w-full">
    <div class="flex flex-col w-full border-b">
      <div class="flex flex-col w-full p-3">
        <div class="flex mb-3 flex-col w-full">
          <div class="mb-2">
            Recent
          </div>
          <div class="flex flex-col">
            <div class="flex-row mb-1 text-sm flex text-sub" v-for="item in 3">
              <div class="mr-2"><i class="fa fa-users"></i></div>
              <div>FrontEnd</div>
            </div>
          </div>
        </div>
        <div class="flex flex-col mb-3 w-full">
          <div class="mb-2 text-blue-700">
            Groups
          </div>
          <div class="flex flex-col">
            <div class="flex-row mb-1 text-sm flex text-sub" v-for="item in 3">
              <div class="mr-2"><i class="fa fa-users"></i></div>
              <div>FrontEnd</div>
            </div>
            <div class="flex-row mb-1 text-sm text-sub flex px-6">
              <div class="">See all</div>
            </div>
          </div>
        </div>
        <div class="flex justify-between mb-2 w-full">
          <div class="text-blue-700">Events</div>
          <i class="fa fa-plus text-sub py-1.5"></i>
        </div>
        <div class="flex justify-between w-full">
          <div class="text-blue-700">Fllowed Hashtag</div>
        </div>
      </div>
    </div>
    <div class="p-2 text-sub">
      Discover More
    </div>
  </Card>
</template>

<script>
import Card from "~/components/shared/card";

export default {
  name: "Recent",
  components: {Card}
}
</script>

<style scoped>

</style>
