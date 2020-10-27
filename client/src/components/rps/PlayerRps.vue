<template>
    <div class='playerRps'>
        <button v-on:click="makeRock">Rock</button>
        <button v-on:click="makePaper">Paper</button>
        <button v-on:click="makeScissors">Scissors</button>
    </div>
  
</template>

<script>
import { eventBus } from '@/main'

export default {
    name: 'playerRps',

    props: ['playerOne_choice', 'playerTwo_choice'],

    methods: {
        makeScissors(){
            eventBus.$emit("scissors", this.playerRps)
        },
         makePaper(){
            eventBus.$emit("paper", this.playerRps)
        }, 
        makeRock(){
            eventBus.$emit("rock", this.playerRps)
        }

    }

}
</script>

<style>

</style>