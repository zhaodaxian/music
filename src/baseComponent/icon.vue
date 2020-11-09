<template>
  <div @click="click" class="icon-box" :style="boxStyle">
    <i
      :class="['iconfont', icon]"
      :style="positionStyle"
    ></i>
  </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: '12px'
    },
    color: {
      type: String
    },
    bgcolor: {
      type: String
    }
  },
  computed: {
    positionStyle () {
      return {
        'font-size': this.size,
        'color': this.color,
      }
    },
    boxStyle () {
      return {
        'background-color': this.bgcolor,
        'width': parseInt(this.size, 10) * 2 + 'px',
        'height': parseInt(this.size, 10) * 2 + 'px',
      }
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  },
}
</script>
<style lang="scss" scope>
  .icon-box{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: var(--header-font-color);
    transition: .6s;
    cursor: pointer;
  }
  .icon-box:hover{
    background-color: var(--round-hover-bgcolor);
    // background-color: var(--header-font-color);
  }

</style>