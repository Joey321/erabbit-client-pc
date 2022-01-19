<template>
  <p>app</p>
  <p>{{$store.state.user.profile.nickname}}</p>
  <button @click="$store.commit('user/setUser', {nickname: 'zs'})">Commit</button>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  components: {

  },
  setup () {
    const store = useStore()
    return {
      store
    }
  }

}
</script>

<style>
</style>
