import { createStore } from 'vuex'
// vuex持久化插件
// 默认存储在localStorage
import createPersistedState from 'vuex-persistedstate'

import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'
export default createStore({

  modules: {
    user,
    cart,
    category
  },
  plugins: [
    createPersistedState({
      key: 'erabbit-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
// 688
