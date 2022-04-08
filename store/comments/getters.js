export default {
  getCommentsList(state) {
    return state.comments
  },
  getPostComments: (state) => (id) => {
    let comments = state.comments.filter(comment => comment.postId === id)
    console.log('comments', comments)
    return comments || []
  }
}
