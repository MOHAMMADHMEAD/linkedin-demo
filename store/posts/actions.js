export default {
  async getPosts({commit}) {
    let posts = await this.app.$axios.$get('/posts')
    commit('setPosts', posts)
  },
  async getPost(id) {
    let post = await this.app.$axios.$get(`/posts/${id}`)
    return post
  }
}
