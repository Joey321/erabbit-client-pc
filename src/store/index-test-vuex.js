import { createStore } from 'vuex'
const moduleA = {
  state: {
  // 不开启命名空间则只有state区分模块，其余都为全局使用
    name: 'moduleA'
  }
}
const moduleB = {
  // 开启命名空间
  // 使用时为$store.getters['moduleB/newName']的方式
  namespaced: true,
  state: {
    name: 'moduleB'
  },
  getters: {
    newName3 (state) {
      return '开启namespace的 ' + state.name
    }
  }
}

export default createStore({
  // 数据
  state: {
    name: 'zs',
    age: 18
  },
  // 计算属性
  getters: {
    newName (state) {
      return 'big ' + state.name
    }
  },
  // 修改方法
  mutations: {
    updateName (state) {
      state.name = 'ls'
    },
    updateName2 (state) {
      state.name = 'ww'
    }
  },
  // 异步获取数据
  actions: {
    updateNameSync (ctx) {
      setTimeout(() => {
        ctx.commit('updateName2')
      }, 1000)
    }
  },
  // 模块
  modules: {
    moduleA,
    moduleB
  }
})
