<template>
  <div class="header-box">
    <div class="left">
      <routes-history />
    </div>
    <div class="right">
      <div class="search-right">
        <Search />
      </div>
      <Theme />
    </div>
  </div>
</template>
<script>
import Theme from 'components/Theme';
import Search from 'components/Search';
export default {
  components: {
    Theme,
    Search
  },
  data() {
    return {
      show: true
    }
  },
  methods: {
    onClick () {
      this.show = !this.show
    }
  },
}
</script>
<style lang="scss" scoped>
.header-box{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: $header-height;
  background-color: var(--header-bgcolor);
  padding-right: 36px;
  .right{
    display: flex;
    .search-right{
      margin-right: 30px;
    }
  }
}

</style>