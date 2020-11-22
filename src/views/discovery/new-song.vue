<template>
  <div
    class="new-songs"
  >
    <Title>最新音乐</Title>
    <div class="list-wrap">
      <div
        class="list"
        v-for="(list, listIndex) in thunkedList"
        :key="listIndex"
      >
        222
      </div>
    </div>
  </div>
</template>
<script>
import { getNewSongs } from "api"
const songsLimit = 10
export default {
  data() {
    return {
      chaukLimit: Math.ceil(songsLimit / 2),
      list: []
    }
  },
  computed: {
    thunkedList () {
      return [
        this.list.slice(0, this.chaukLimit),
        this.list.slice(this.chaukLimit, this.list.length)
      ]
    }
  },
  async created() {
    const { result} = await getNewSongs()
    this.list = result
  },
}
</script>
<style lang="scss" scoped>
.new-songs{
  margin-bottom: 36px;
  .list-wrap{
    display: flex;
  }
  .list{
    flex: 1;
    overflow: hidden;
  }
}
</style>