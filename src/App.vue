<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
export default {
  provide() {
    return {
      reload: this.reload,
    };
  },
  data() {
    return {
      isRouterAlive: true,
    };
  },
  methods: {
    reload() {
      const vm = this;
      vm.isRouterAlive = false;
      vm.$nextTick(() => {
        vm.isRouterAlive = true;
      });
    },
  },
};
</script>

<style lang="scss">
@import "./assets/scss/all.scss";
</style>
