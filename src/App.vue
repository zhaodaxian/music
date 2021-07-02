<template>
  //新增加一些注释用来做测试用
  <div id="app">
    <Main />
    <!-- <router-view/> -->
  </div>
</template>
<script>
import Main from '@/views/main'
export default {
  components: {
    Main
  }
}
</script>
<style lang="scss">
#app{
  height: 100%;
}

</style>
