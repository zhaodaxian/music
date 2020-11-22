<template>
  <div class="discovery">
    <banner />
    <new-playlists />
  </div>
</template>
<script>
import banner from './banner';
import NewPlaylists from './new-playlists'
export default {
  components: {
    banner,
    NewPlaylists
  }
}
</script>
<style lang="scss" scoped>
.discovery {
  padding: 18px 32px;
}
</style>