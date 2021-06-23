<template>
  <div class="homepage">
    <div class="center">
      <img src="../../assets/images/logo.svg" alt="" />
      <ui-button @click="onClick">CLICK ME</ui-button>
      <h1>{{ count }}</h1>
      <router-link to="/about">Go To About Page</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from '@stores';

export default {
  setup() {
    const store = useStore();

    function onClick() {
      store.commit('counter/increment');
    }
    return {
      count: computed(() => store.state.counter.count),
      onClick
    };
  }
};
</script>

<style scoped lang="less">
.homepage {
  color: #4fc08d;

  .center {
    width: 300px;
    margin: 0 auto;
    padding-top: 60px;
    text-align: center;

    img {
      width: 200px;
    }
  }
}
</style>
