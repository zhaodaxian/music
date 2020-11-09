<template>
  <div>
    <el-popover
      placement="top-start"
      width="200"
      trigger="click">
      <div class="themes">
        <div
          :key="index"
          @click="changeTheme(themeKey)"
          class="theme-item"
          v-for="(themeValue, themeKey, index) in themeMap"
        >
          <div
            :style="themeValue.style"
            class="theme-icon"
          ></div>
          <p>{{themeValue.title}}</p>
        </div>
      </div>
      <Icon
        icon="icontheme"
        slot="reference"
        size="16px"
      />
    </el-popover>
  </div>
</template>
<script>
import variables from 'style/theme/variables'
import variablesDark from 'style/theme/variables-dark'
const THEME_KEY = "__theme__"
const themes = {
  white: "white",
  dark: "dark",
}
export default {
  data() {
    return {
      themeMap: {
        [themes.white]: {
          title: "白色",
          file: variables,
          style: {
            backgroundColor: "rgb(246, 246, 246)"
          }
        },
        [themes.red]: {
          title: "暗色",
          file: variablesDark,
          style: {
            backgroundColor: "black"
          }
        }
      }
    }
  },
  methods: {
    changeTheme(themeKey) {
      const theme = this.themeMap[themeKey].file
      localStorage.setItem(THEME_KEY, themeKey)
      Object.keys(theme).forEach(key => {
        let value = theme[key]
        document.documentElement.style.setProperty(key, value)
      })
    }
  },
  created() {
    let key = localStorage.getItem(THEME_KEY)
    this.changeTheme(key)
  }
}
</script>
<style lang="scss" scoped>
  .themes {
  @include flex-center();

  .theme-item {
    @include flex-center();
    flex-direction: column;
    margin: 0 8px;
    cursor: pointer;

    .theme-icon {
      width: 25px;
      height: 25px;
      border-radius: 50%;
      margin-bottom: 4px;
    }
  }
}
</style>