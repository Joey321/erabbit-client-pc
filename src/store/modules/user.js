// 用户模块
export default {
  namespaced: true,
  state () {
    return {
      // 用户信息
      profile: {
        id: '',
        nickname: '',
        avatar: '',
        token: '',
        mobile: '',
        account: ''
      }
    }
  },
  mutations: {
    // payload用户信息对象
    setUser (state, payload) {
      state.profile = payload
    }
  }
}
