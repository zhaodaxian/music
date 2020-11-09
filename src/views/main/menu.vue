<template>
  <div class="menu-box">
    <div
      class="menu-block"
      v-for="(menu, index) in menus"
      :key="index"
    >
      <ul class="menu-list">
        <router-link
          :key="index"
          :to="item.path"
          active-class="menu-item-active"
          class="menu-item"
          tag="li"
          v-for="(item, index) in menu.children"
        >
          <Icon
            size="16px"
            :icon="item.meta.icon"
            class="iconfont"
          />
          <span class="menu-title">{{ item.meta.title }}</span>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
import { valueRouter } from "@/router"
export default {
  data() {
    return {
      menus: [
        {
          type: "root",
          children: valueRouter
        }
      ]
    }
  },
  created() {
  },
}
</script>
<style lang="scss" scoped>
.menu-box{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--menu-bgcolor);
  color: var(--menu-font-color);
  .menu-block{
    flex: 1;
    margin-bottom: 16px;
  }
  .menu-list{
    .menu-item {
      @include text-ellipsis;
      padding: 12px 18px;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        background: var(--menu-item-hover-bg);
      }

      &-active {
        color: $theme-color;
        background: var(--menu-item-active-bg);
        i {
          color: $theme-color;
        }
      }

      .iconfont {
        font-size: $font-size-medium-sm;
      }

      .menu-title {
        font-size: $font-size-medium-sm;
        margin-left: 8px;
      }
    }
  }
}

</style>