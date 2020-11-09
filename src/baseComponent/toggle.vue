<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
function hasParent (dom, banDom) {
  banDom = Array.isArray(banDom) ? banDom : [banDom]
  while (dom) {
    if (banDom.find(p => p === dom)) {
      return true
    }else{
      dom = dom.parentNode
    }
  }
}
export default {
  props: {
    show: {
      type: Boolean,
      define: false
    },
    reserveDoms: {
      type: Array,
      define: []
    }
  },
  methods: {
    clickEvent (event) {
      const triggerElement = event.target
      const firstDom = this.$slots.default[0].elm
      const defineArray = [firstDom, ...this.reserveDoms]
      if (!hasParent(triggerElement, defineArray)) {
        this.$emit('update:show', false)
      }
    },
    openClick () {
      document.addEventListener('mousedown', this.clickEvent)
    },
    removeClick () {
      document.removeEventListener('mousedown', this.clickEvent)
    }
  },
  watch: {
    show (newVal) {
      if (newVal) {
        this.openClick()
      }else{
        this.removeClick()
      }
    }
  },
}
</script>