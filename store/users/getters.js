export default {
  getUsersList(state) {
    return state.users
  },
  getUser: (state) => (id) => {
    let user = state.users.find(user => user.id === id)
    if (user) {
      if (!user.company)
        user.company = {}
    }
    return user || {}
  }
}
