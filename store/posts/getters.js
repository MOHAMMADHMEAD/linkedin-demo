export default {
  getPostsList(state) {
    return state.posts
  },
  getPostById: (state) => (id) => {
    let post = state.posts.find(post => post.id.toString() === id)
    return post || {}
  }
}
