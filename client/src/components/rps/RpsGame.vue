<template>
    <div>
        <h1>Rock Paper Scissors</h1>
        <player-rps :playerOne="playerOne" :playerTwo="playerTwo" :activePlayer="activePlayer" :winner="winner" :playerOne_choice="playerOne_choice" :playerTwo_choice="playerTwo_choice" :draw="draw"></player-rps>
        
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
            winner: null,
            draw: null
        }
    },
    mounted(){
        eventBus.$on("scissors", (player) => {
            if (player === this.playerOne){
                this.playerOne_choice = "scissors"
                this.currentPlayer = this.playerTwo
            } else {
                this.playerTwo_choice = "scissors"
                this.checkWinner(this.playerOne_choice, this.playerTwo_choice)
            }
            
        })

        eventBus.$on("rock", (player) => {
            if (player === this.playerOne){
                this.playerOne_choice = "rock"
                this.currentPlayer = this.playerTwo
            } else{
                this.playerTwo_choice = "rock"
                this.checkWinner(this.playerOne_choice, this.playerTwo_choice)
            }
            
        })

        eventBus.$on("paper", (player) => {
            if (this.player === this.playerOne){
                this.playerOne_choice = "paper"
                this.currentPlayer = this.playerTwo
            } else{
                this.playerTwo_choice = "paper"
                this.checkWinner(this.playerOne_choice, this.playerTwo_choice)
            }
            
        })
        eventBus.$on("lizard", (player) => {
            if (player === this.playerOne){
                this.playerOne_choice = "lizard"
                this.currentPlayer = this.playerTwo
            } else {
                this.playerTwo_choice = "lizard"
                this.checkWinner(this.playerOne_choice, this.playerTwo_choice)
            }
            
        })
        eventBus.$on("spock", (player) => {
            if (player === this.playerOne){
                this.playerOne_choice = "spock"
                this.currentPlayer = this.playerTwo
            } else {
                this.playerTwo_choice = "spock"
                this.checkWinner(this.playerOne_choice, this.playerTwo_choice)
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
        checkWinner(playerOne_choice, playerTwo_choice){
            if (playerOne_choice === "scissors" && playerTwo_choice === "paper"){
                return this.winner = this.playerOne.name
            } else if (playerOne_choice === "rock" && playerTwo_choice === "scissors"){
                return this.winner = this.playerOne.name
            } else if (playerOne_choice === "paper" && playerTwo_choice === "rock") {
                return this.winner = this.playerOne.name
            } else if (playerOne_choice === "rock" && playerTwo_choice === "lizard") {
                return this.winner = this.playerOne.name
            } else if (playerOne_choice === "lizard" && playerTwo_choice === "spock") {
                return this.winner = this.playerOne.name
            } else if (playerOne_choice === "spock" && playerTwo_choice === "scissors") {
                return this.winner = this.playerOne.name
            } else if (playerOne_choice === "scissors" && playerTwo_choice === "lizard") {
                return this.winner = this.playerOne.name
            } else if (playerOne_choice === "lizard" && playerTwo_choice === "paper") {
                return this.winner = this.playerOne.name
            } else if (playerOne_choice === "paper" && playerTwo_choice === "spock") {
                return this.winner = this.playerOne.name
            } else if (playerOne_choice === "spock" && playerTwo_choice === "rock") {
                return this.winner = this.playerOne.name
            } else if (playerOne_choice === playerTwo_choice){
                return this.draw = "It's a draw, everyone's a loser!"  
            } else {
                return this.winner = this.playerTwo.name
            }

        }


    },
    components: {
        'player-rps': PlayerRps
    }

}
</script>

<style>

</style>