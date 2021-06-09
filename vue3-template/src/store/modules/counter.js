const state = function() {
  return {
    count: 0
  }
}
const mutations = {
  increment(state, count) {
    state.count++
  }
}
const actions = {
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}
const getters = {
  evenOrOdd(state) {
    return state.count % 2 === 0 ? 'even' : 'odd'
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
