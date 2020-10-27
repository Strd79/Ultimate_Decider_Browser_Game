<template>
    <div class='playerRps'>
        <h2 v-if="playerOne && !winner && !draw">Player: {{ this.activePlayer.name}}</h2>
        <div v-if="winner">
            <h2> {{this.playerOne.name}} picked {{this.playerOne_choice}}.</h2> 
            <h2> {{this.playerTwo.name}} picked {{this.playerTwo_choice}}.</h2> 
            <h2 > And the winner is {{this.winner}}!</h2>
        </div>
        <div v-if="draw">
            <h2> {{this.playerOne.name}} picked {{this.playerOne_choice}}.</h2> 
            <h2> {{this.playerTwo.name}} picked {{this.playerTwo_choice}}.</h2> 
            <h2 > {{this.draw}} </h2>
        </div>
        
        <button v-on:click="makeRock">Rock</button>
        <button v-on:click="makePaper">Paper</button>
        <button v-on:click="makeScissors">Scissors</button>
        <button v-on:click="makeLizard">Lizard</button>
        <button v-on:click="makeSpock">Spock</button>
        
    </div>
  
</template>

<script>
import { eventBus } from '@/main'

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