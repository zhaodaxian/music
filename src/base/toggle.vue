<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
import {
  hasParent,
  aa
} from '@/utils/dom'
export default {
  name: 'Toggle',
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
      const targetElement = event.target
      const slotElement = this.$slots.default[0].elm
      const defaultDom = [slotElement, ...this.reserveDoms]
      if (!hasParent(targetElement, defaultDom)) {
        this.$emit('update:show', false)
      }
    },
    openClick (event) {
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