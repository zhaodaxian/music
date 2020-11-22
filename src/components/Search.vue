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
          <div class="tags" v-if="hotList.length">
            <NButton
              @click="onClick"
              class="button"
              v-for="(item, index) in hotList"
              :key="index"
            >
              {{item.first}}
            </NButton>
          </div>
          <div v-else>
            当前暂无热门内容
          </div>
        </div>
        <div class="block">
          <p class="title">
            热门搜索
          </p>
          <div class="tags" v-if="localList.length">
            <NButton
              @click="onClick"
              class="button"
              v-for="(item, index) in localList"
              :key="index"
            >
              {{item.first}}
            </NButton>
          </div>
          <div v-else>
            暂无搜索历史
          </div>
        </div>
      </div>
    </Toggle>
  </div>
</template>
<script>
import storage from 'good-storage'
import { getSearch } from 'api';
const SEARCH_HISTORY_KEY = "__search_history__"
export default {
  data() {
    return {
      searchKeyword: '',
      searchPanelShow: false,
      hotList: [],
      localList: storage.get(SEARCH_HISTORY_KEY, [])
    }
  },
  methods: {
    onClickInput (){
      this.searchPanelShow = true
    },
    onInput () {
    },
    onEnterPress (event) {
      if (this.searchKeyword) {
        this.goSearch(this.searchKeyword)
      }
    },
    goSearch (value) {
      this.localList.unshift({first: value})
      this.localList.splice(10,1)
      storage.set(SEARCH_HISTORY_KEY, this.localList)
      this.searchPanelShow = false
      this.searchKeyword = ''

    },
    onClick (e) {
    }
  },
  beforeCreate() {
    getSearch()
    .then((res) => {
      this.hotList = res.result.hots
    })
  },
  created() {
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
  z-index: $search-panel-z-index;
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