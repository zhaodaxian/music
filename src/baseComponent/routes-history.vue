<template>
  <div class="history-box">
    <Icon
      icon="iconarrow-left-bold"
      slot="reference"
      size="14px"
      @click="back"
    />
    <Icon
      icon="iconarrow-right-bold"
      slot="reference"
      size="14px"
      class="next"
      @click="forward"
    />
  </div>
</template>
<script>
export default {
  methods: {
    back() {
      this.$router.back()
    },
    forward() {
      this.$router.forward()
    }
  },
}
</script>
<style lang="scss" scoped>
.history-box{
  display: flex;
  padding-left: 60px;
}
.next{
  margin-left: 10px;
}
</style>