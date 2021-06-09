<template>
  <div class="app-layout">
    <!-- <router-view></router-view> -->
    <router-view v-slot="{ Component, route }">
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="Component" />
      </keep-alive>
      <component :is="Component" v-else />
    </router-view>
  </div>
  <van-tabbar v-model="active">
    <van-tabbar-item to="/home" icon="home-o">
      首页
    </van-tabbar-item>
    <van-tabbar-item to="/my" icon="user-o">
      我的
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'Layout',
  setup() {
    const getFullPath = (fullPath) => ['/home', '/my'].indexOf(fullPath)
    const route = useRoute()
    const index = getFullPath(route.fullPath)
    const active = ref(index)
    watch(() => route.name, (val, oldVal) => {
      active.value = getFullPath(route.fullPath)
    })
    return { active, getFullPath }
  }
}
</script>
