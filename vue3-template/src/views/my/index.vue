<template>
  <div>我的{{ info }}</div>
</template>

<script>
import { onActivated, onMounted, reactive } from 'vue'
import { getInfo } from '@/api/common'
export default {
  name: 'My',
  beforeRouteLeave(to, from) {
    this.currentScroll = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop
  },
  setup() {
    const state = reactive({
      currentScroll: 0,
      info: ''
    })
    onActivated(() => {
      document.documentElement.scrollTop = document.body.scrollTop = state.currentScroll || 0
    })
    onMounted(async() => {
      const res = await getInfo()
      state.info = res.data || ''
    })
    return state
  }
}
</script>
