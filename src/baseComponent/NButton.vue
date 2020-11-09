<template>
  <div
    class="n-button"
    @click="onClick"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  methods: {
    onClick (event) {
      this.$emit('click', event)
    }
  },
}
</script>
<style lang="scss" scope>
  .n-button {
    display: inline-block;
    padding: 5px 16px;
    border: 1px solid var(--button-border-color);
    border-radius: 2px;
    text-align: center;
    cursor: pointer;

    &:hover {
      background: var(--button-hover-bgcolor);
    }
  }
</style>