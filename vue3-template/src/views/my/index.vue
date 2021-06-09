<template>
  <div>我的</div>
</template>

<script>
import { onActivated, reactive } from 'vue'

export default {
  name: 'My',
  beforeRouteLeave(to, from) {
    this.currentScroll = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop
  },
  setup() {
    const state = reactive({
      currentScroll: 0
    })
    onActivated(() => {
      document.documentElement.scrollTop = document.body.scrollTop = state.currentScroll || 0
    })
    return state
  }
}
</script>
