<template>
  <div id="app">
    <h1>Ultimate Decider!</h1>
    <player-form></player-form>
    <select name="player1">
      <option v-for="(player, index) in playersList" :player="player" :key="index" :value="player">{{player.name}}</option>
    </select>
    <game-box></game-box>
  </div>
</template>

<script>
import { eventBus } from './main.js'
import PlayerItem from './components/PlayerItem'
import PlayerForm from './components/PlayerForm'
import PlayerServices from './services/PlayerServices.js'
import GameBox from './components/GameBox'
import MemoryGame from './components/MemoryMatchGame'

export default {
  name: 'App',
  data(){
    return {
      player_one: null,
      player_two: null,
      playersList: []
    }
  },
  components: {
    'player-form': PlayerForm,
    'game-box': GameBox
   
  },

  mounted(){
    this.fetchPlayers()

    eventBus.$on('player-added', (player) => this.playersList.push(player))
  },

  methods: {
    fetchPlayers() {
      PlayerServices.getPlayers()
      .then(players => this.playersList = players)
    }
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
