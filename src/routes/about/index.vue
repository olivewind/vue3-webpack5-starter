<template>
  <div class="about">
    <h1>ABOUT PAGE</h1>
    <br />
    <h1>{{ count }}</h1>
    <br />
    <div>
      <router-link to="/">Back</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue';
import { useStore } from '@stores';

export default {
  setup() {
    const store = useStore();
    return {
      count: computed(() => store.state.counter.count)
    };
  }
};
</script>

<style scoped lang="less">
.about {
  margin-top: 60px;
  color: #4fc08d;
  text-align: center;
}
</style>
