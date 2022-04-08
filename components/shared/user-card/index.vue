<template>
  <Card custom-class="w-[225px] user-card pb-5 mobile:w-full">
    <div class="cover-img w-full h-[55px]"
         style="background-image:url(https://media-exp1.licdn.com/dms/image/C5616AQEJ6wu8fvYn5Q/profile-displaybackgroundimage-shrink_200_800/0/1548945899872?e=1654732800&v=beta&t=s-Zog5uqjMwzQs2APnHMH9wjoLbBspf-sjivpoB3g18)">

    </div>
    <div class="mb-4  w-[78px] h-[78px] -mt-[30px]">
      <Avatar/>
    </div>
    <div class="border-b w-full">
      <div class="info mb-4 flex justify-center flex-col items-center">
        <div>Mohammad Ihmaid</div>
        <div class="text-slate-500">CEO</div>
        <div class="text-slate-500">mohammad@gmail.com</div>
      </div>
    </div>
    <div
      class="connect-btn w-[193px]">
      <button classs="lg:text-sm text-lg font-bold">Connect</button>
    </div>
  </Card>
</template>

<script>
import Card from "~/components/shared/card";
import Avatar from "~/components/shared/avatar";

export default {
  name: "UserCard",
  components: {Avatar, Card}
}
</script>

<style scoped lang="scss">
@import "user-card";
</style>
