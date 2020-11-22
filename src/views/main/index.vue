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
        <router-view :class="routerViewCls" />
      </div>
    </div>
  </div>
</template>
<script>
import Header from './header';
import MainMenu from './menu';
import { layoutCenterNames } from "@/router"
export default {
  components: {
    Header,
    MainMenu
  },
  computed: {
    routerViewCls() {
      return layoutCenterNames.find(name => name === this.$route.name)
        ? "router-view-center"
        : ""
    }
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
    height: calc(100% - #{$mini-player-height});
  }
  .content{
    flex: 1;
    overflow-y: auto;
    min-width: $layout-content-min-width;
    margin-bottom: $mini-player-height;
    .router-view-center {
      max-width: $center-content-max-width;
      margin: auto;
    }
  }
}

</style>