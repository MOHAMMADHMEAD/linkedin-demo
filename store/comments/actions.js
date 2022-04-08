export default {
  async getComments({commit}) {
    let comments = await this.app.$axios.$get('/comments')
    commit('setComments', comments)
  }
}
