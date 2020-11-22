import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/main/index.vue'

Vue.use(Router)

// 引入界面
const Discovery = () => import(/* webpackChunkName: "Discovery" */ '@/views/discovery')
const Playlists = () => import(/* webpackChunkName: "Playlists" */ '@/views/playlists')
const Songs = () => import(/* webpackChunkName: "Songs" */ '@/views/songs')
const Mvs = () => import(/* webpackChunkName: "Mvs" */ '@/views/mvs')

// 内容需要居中的页面
export const layoutCenterNames = ['discovery', 'playlists', 'songs', 'mvs']

export const valueRouter = [
  {
    path: '/discovery',
    name: 'discovery',
    component: Discovery,
    meta: {
      title: '发现音乐',
      icon: 'iconmusic1',
    },
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: Playlists,
    meta: {
      title: '推荐歌单',
      icon: 'iconmusic',
    },
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs,
    meta: {
      title: '最新音乐',
      icon: 'iconyinyue',
    },
  },
  {
    path: '/mvs',
    name: 'mvs',
    component: Mvs,
    meta: {
      title: '最新MV',
      icon: 'iconshipin',
    },
  },
]

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/discovery',
    },
    ...valueRouter
  ]
})
