<template>
  <div id="app">
    <h1>Ultimate Decider!</h1>
    <player-form :playersList="playersList"></player-form>
    
    <game-box :playerOne='playerOne' :playerTwo="playerTwo"></game-box>
  </div>
</template>

<script>
import { eventBus } from './main.js'
import MatchScoreBoard from './components/MatchScoreBoard'
import PlayerForm from './components/PlayerForm'
import PlayerServices from './services/PlayerServices.js'
import GameBox from './components/GameBox'
import MemoryGame from './components/memoryMatch/MemoryMatchGame'

export default {
  name: 'App',
  data(){
    return {
      playerOne: null,
      playerTwo: null,
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
    eventBus.$on('game-started', (player1, player2) => {
      this.playerOne = player1
      this.playerTwo = player2
    })
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
