<template>
  <div>{{ count }} is {{ evenOrOdd }}.</div>
  <van-button type="primary" @click="incrementAsync">
    Increment async
  </van-button>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
export default {
  name: 'Home',
  setup() {
    const store = useStore()
    return {
      count: computed(() => store.state.counter.count),
      evenOrOdd: computed(() => store.getters['counter/evenOrOdd']),
      incrementAsync: () => store.dispatch('counter/incrementAsync')
    }
  }
}
</script>
