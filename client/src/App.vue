<template>
  <div id="app">
    <h1>Ultimate Decider!</h1>
    <div class="intro"> 
    <p>Can't decide who's turn it is to do the dishes? Or who's turn is it to take the rubbish out?</p>
    <p>Let <span>ULTIMATE DECIDER</span> help with a best of 5 games match.</p>
    </div>
    <player-form :playersList="playersList"></player-form>
    <game-box class="game-box" :playerOne='playerOne' :playerTwo="playerTwo"></game-box>
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
      playersList: [],
      modalOpen: false,
      currentWinner: null
    }
  },
  components: {
    'player-form': PlayerForm,
    'game-box': GameBox,
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
    },
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#app > h1 {
  font-size: 100px;
  margin: 40px 0;
  font-family: 'Bangers', cursive;
  color: rgb(197, 5, 5);
  text-shadow: 5px 5px rgb(255, 255, 255);
}

html {
  min-height: 100vh;
}

body {
  color: white;
  background-image: radial-gradient(rgba(4, 104, 218, 0.4), rgb(4, 104, 218));
}

.game-box {
margin-bottom: 50px;
}

span {
  font-family: 'Bangers', cursive;
  font-size: 25px;
}

p {
  font-size: 20px;
}

.intro {
  margin-bottom: 50px;
}

</style>
