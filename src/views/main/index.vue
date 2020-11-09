<template>
  <div class="main">
    <Header />
    <div class="main-body">
      <div
        class="main-menu"
      >
      <main-menu />
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import Header from './header';
import MainMenu from './menu'
export default {
  components: {
    Header,
    MainMenu
  }
}
</script>
<style lang="scss" scoped>
.main {
  height: 100%;
  .main-body{
    display: flex;
    width: 100%;
    height: calc(100% - #{$header-height});
  }
  .main-menu{
    width: 250px;
    height: 100%;
  }
  .content{
    flex: 1;
    height: 100%;
  }
}

</style>