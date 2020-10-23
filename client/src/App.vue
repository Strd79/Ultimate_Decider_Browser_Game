<template>
  <div id="app">
    <h1>Ultimate Decider!</h1>
    <player-form></player-form>
  </div>
</template>

<script>
import { eventBus } from './main.js'
import PlayerItem from './components/PlayerItem'
import PlayerForm from './components/PlayerForm'
import PLayerServices from './services/PlayerServices.js'

export default {
  name: 'App',
  data(){
    return {
      player_one: null,
      player_two: null
    }
  },
  components: {
    'player-form': PlayerForm
   
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
