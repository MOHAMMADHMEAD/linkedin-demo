<template>
  <div :class="customClass" class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    customClass: {
      type: String,
      default: () => ''
    }
  }
}
</script>

<style scoped lang="scss">
@import "card.scss";
</style>
