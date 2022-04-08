export default {
  async getUsers({commit}) {
    let users = await this.app.$axios.$get('/users')
    commit('setUsers', users)
  }
}
