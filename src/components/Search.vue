<template>
  <div class="search" >
    <el-input
      size="mini"
      @click.native="onClickInput"
      @input="onInput"
      @keypress.native.enter="onEnterPress"
      placeholder="搜索"
      prefix-icon="el-icon-search"
      ref="input"
      v-model.trim="searchKeyword"
    ></el-input>
    <Toggle
      :reserveDoms="[$refs.input && $refs.input.$el]"
      :show.sync="searchPanelShow"
    >
      <div
        v-show="searchPanelShow"
        class="search-panel"
      >
        <div class="block">
          <p class="title">
            热门搜索
          </p>
          <div class="tags">
            <NButton
            @click="onClick"
              class="button"
            >
              ssss
            </NButton>
          </div>
        </div>
        <div class="block">
          222
        </div>
      </div>
    </Toggle>
  </div>
</template>
<script>
import Toggle from 'basecomponents/toggle'
export default {
  components: {
    Toggle
  },
  data() {
    return {
      searchKeyword: '',
      searchPanelShow: false
    }
  },
  methods: {
    onClickInput (){
      this.searchPanelShow = true
    },
    onInput () {
    },
    onEnterPress (event) {
      console.log(event )
    },
    onClick (e) {
    }
  },
}
</script>
<style lang="scss" scoped>
.search-panel{
  position: fixed;
  top: $header-height;
  bottom: $mini-player-height;
  right: 0;
  width: 350px;
  background: var(--search-bgcolor);
  // z-index: $search-panel-z-index;
  font-size: $font-size-sm;
  overflow-y: auto;
  @include box-shadow;
  .block{
    padding: 16px 24px;
    .title {
      color: var(--font-color-grey);
      margin-bottom: 16px;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      .button {
        margin-bottom: 12px;
        margin-right: 6px;
        font-size: $font-size-sm;
      }
    }
  }
}
</style>