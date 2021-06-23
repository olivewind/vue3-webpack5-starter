<template>
  <div class="ui-button" @click="onClick">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="less">
.ui-button {
  width: 100px;
  margin: 20px auto;
  padding: 0.75em 2em;
  color: #fff;
  text-align: center;
  background-color: #4fc08d;
  border-radius: 2em;
  cursor: pointer;
  user-select: none;
}
</style>
