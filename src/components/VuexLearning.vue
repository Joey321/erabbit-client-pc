<template>
  <p>{{$store.state.name}}</p>
  <p>{{store.state.age}}</p>
  <p>{{store.getters['newName']}}</p>
  <button @click="updateName">通过mutations修改state的name</button>
  <p>{{$store.getters['moduleB/newName3']}}</p>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'vuex',
  components: {

  },
  setup () {
    const store = useStore()
    const updateName = () => {
      store.commit('updateName')
      // 触发actions的异步函数
      store.dispatch('updateNameSync')
    }
    return {
      store,
      updateName
    }
  }

}
</script>

<style>

</style>
