<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  watch: {
    $route(to) {
      const nowTitle = to.meta.title || 'Fun桌遊 - 線上購物';
      document.title = nowTitle;
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/all.scss";
</style>
