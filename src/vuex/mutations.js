const mutations = {
  getDefaultActive(state) {
    state.defaultActive = Lockr.get('defaultActive');
  },
  upDefaultActive(state, defaultActive) {
    Lockr.set('defaultActive', defaultActive);
    state.defaultActive = Lockr.get('defaultActive');
  },
}
export default mutations
