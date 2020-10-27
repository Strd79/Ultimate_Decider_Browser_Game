<template>
    <div>
        <h1>Rock Paper Scissors</h1>
        <player-rps></player-rps>
        
    </div>
  
</template>

<script>
import { eventBus } from '@/main.js'
import PlayerRps from './PlayerRps.vue'

export default {
    name: 'rock-paper-scissors-game',
    props: ['playerOne', 'playerTwo'],
    data() {
        return {
            playerOne_choice: null,
            playerTwo_choice: null,
            currentPlayer: null,
        }
    },
    mounted(){
        eventBus.$on("scissors", (player) => {
            if (this.player === this.playerOne){
                this.playerOne_choice = "scissors"
                this.currentPlayer = this.playerTwo
            } else{
                this.playerTwo_choice = "scissors"
            }
            
        })

        eventBus.$on("rock", (player) => {
            if (this.player === this.playerOne){
                this.playerOne_choice = "rock"
                this.currentPlayer = this.playerTwo
            } else{
                this.playerTwo_choice = "rock"
            }
            
        })

        eventBus.$on("paper", (player) => {
            if (this.player === this.playerOne){
                this.playerOne_choice = "paper"
                this.currentPlayer = this.playerTwo
            } else{
                this.playerTwo_choice = "paper"
            }
            
        })



    },
    computed: {
        activePlayer: function(){
            if(this.currentPlayer === null){
            return this.playerOne
            } else {
                return this.playerTwo
            }
        }
    },
    methods: {
        

    },
    components: {
        'player-rps': PlayerRps
    }

}
</script>

<style>

</style>