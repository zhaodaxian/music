<template>
  <div class="recommend" v-if="list.length">
    <Title>推荐歌单</Title>
    <div class="list-wrap">
      <PlaylistCard 
        v-for="item in list"
        :desc="item.copywriter"
        :id="item.id"
        :img="item.picUrl"
        :key="item.id"
        :name="item.name"
      />
    </div>
  </div>
</template>
<script>
import PlaylistCard from "@/components/playlist-card";
import { getPersonalized } from "api"
export default {
  name: 'NewPlaylists',
  components: {
    PlaylistCard
  },
  data () {
    return {
      list: []
    }
  },
  async created() {
    const { result } = await getPersonalized({ limit: 10 })
    this.list = result
  },
}
</script>
<style lang="scss" scoped>
  .list-wrap {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -4px;
  }
</style>