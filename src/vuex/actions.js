const actions = {
  getDefaultActive({commit}) {
    commit('getDefaultActive')
  },
  upDefaultActive({commit},value) {
    commit('upDefaultActive',value)
  },
}
export default actions
