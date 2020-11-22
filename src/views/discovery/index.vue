<template>
  <div class="discovery">
    <banner />
    <new-playlists />
    <new-song />
  </div>
</template>
<script>
import banner from './banner';
import NewPlaylists from './new-playlists';
import NewSong from './new-song'
export default {
  components: {
    banner,
    NewPlaylists,
    NewSong
  }
}
</script>
<style lang="scss" scoped>
.discovery {
  padding: 18px 32px;
}
</style>