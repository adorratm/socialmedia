<template>
    <Nuxt />
</template>

<script>
export default {
  name:'default'
};
</script>

<style scoped>
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}
</style>