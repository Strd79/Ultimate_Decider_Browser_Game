<template>
    <div class='playerRps'>
        <h2 v-if="playerOne && !winner && !draw">Player: {{ this.activePlayer.name}}</h2>
        
        <button v-on:click="makeRock">Rock</button>
        <button v-on:click="makePaper">Paper</button>
        <button v-on:click="makeScissors">Scissors</button>
        <button v-on:click="makeLizard">Lizard</button>
        <button v-on:click="makeSpock">Spock</button>
        
    </div>
  
</template>

<script>
import { eventBus } from '@/main'
import VueSimpleAlert from '@/main.js'

export default {
    name: 'playerRps',

    props: ['playerOne_choice', 'playerTwo_choice', 'playerOne', 'playerTwo', 'activePlayer', 'winner', 'draw'],

    methods: {
        makeScissors(){
            eventBus.$emit("scissors", this.activePlayer)
        },
         makePaper(){
            eventBus.$emit("paper", this.activePlayer)
        }, 
        makeRock(){
            eventBus.$emit("rock", this.activePlayer)
        },
        makeSpock(){
            eventBus.$emit("spock", this.activePlayer)
        },
        makeLizard(){
            eventBus.$emit("lizard", this.activePlayer)
        }

    }

}
</script>

<style>

</style>