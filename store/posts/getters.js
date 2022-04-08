export default {
  getPostsList(state) {
    return state.posts
  },
  getPostById: (state) => (id) => {
    console.log('state', state, state.posts)
    let post = state.posts.find(post => post.id.toString() === id)
    return post || {}
  }
}
