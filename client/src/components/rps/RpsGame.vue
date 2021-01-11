<template>
    <div id="rps-game">
        <h2>Rock Paper Scissors Lizard Spock</h2>
        <player-rps :playerOne="playerOne" :playerTwo="playerTwo" :activePlayer="activePlayer" :winner="winner" :playerOne_choice="playerOne_choice" :playerTwo_choice="playerTwo_choice" :draw="draw"></player-rps>
        
    </div>
  
</template>

<script>
import { eventBus } from '@/main.js'
import PlayerRps from './PlayerRps.vue'
import VueSimpleAlert from '@/main.js'

export default {
    name: 'rock-paper-scissors-game',
    props: ['playerOne', 'playerTwo', 'playerOneMatchScore', 'playerTwoMatchScore'],
    data() {
        return {
            playerOne_choice: null,
            playerTwo_choice: null,
            currentPlayer: null,
            winner: null,
            draw: null,
            
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
                eventBus.$emit('playerOneIncrease', [])
                this.winner = this.playerOne.name
                this.displayWinner(playerOne_choice, playerTwo_choice, this.winner)
            } else if (playerOne_choice === "rock" && playerTwo_choice === "scissors"){
                eventBus.$emit('playerOneIncrease', [])
                this.winner = this.playerOne.name
                this.displayWinner(playerOne_choice, playerTwo_choice, this.winner)
            } else if (playerOne_choice === "paper" && playerTwo_choice === "rock") {
                eventBus.$emit('playerOneIncrease',[]) 
                this.winner = this.playerOne.name
                this.displayWinner(playerOne_choice, playerTwo_choice, this.winner)
            } else if (playerOne_choice === "rock" && playerTwo_choice === "lizard") {
                eventBus.$emit('playerOneIncrease',[])
                this.winner = this.playerOne.name
                this.displayWinner(playerOne_choice, playerTwo_choice, this.winner)
            } else if (playerOne_choice === "lizard" && playerTwo_choice === "spock") {
                eventBus.$emit('playerOneIncrease',[])
                this.winner = this.playerOne.name
                this.displayWinner(playerOne_choice, playerTwo_choice, this.winner)
            } else if (playerOne_choice === "spock" && playerTwo_choice === "scissors") {
                eventBus.$emit('playerOneIncrease',[])
                this.winner = this.playerOne.name
                this.displayWinner(playerOne_choice, playerTwo_choice, this.winner)
            } else if (playerOne_choice === "scissors" && playerTwo_choice === "lizard") {
                eventBus.$emit('playerOneIncrease',[])
                this.winner = this.playerOne.name
                this.displayWinner(playerOne_choice, playerTwo_choice, this.winner)
            } else if (playerOne_choice === "lizard" && playerTwo_choice === "paper") {
                eventBus.$emit('playerOneIncrease',[])
                this.winner = this.playerOne.name
                this.displayWinner(playerOne_choice, playerTwo_choice, this.winner)
            } else if (playerOne_choice === "paper" && playerTwo_choice === "spock") {
                eventBus.$emit('playerOneIncrease',[])
                this.winner = this.playerOne.name
                this.displayWinner(playerOne_choice, playerTwo_choice, this.winner)
            } else if (playerOne_choice === "spock" && playerTwo_choice === "rock") {
                eventBus.$emit('playerOneIncrease',[])
                this.winner = this.playerOne.name
                this.displayWinner(playerOne_choice, playerTwo_choice, this.winner)
            } else if (playerOne_choice === playerTwo_choice){
                this.draw = "It's a draw, everyone's a loser!"
                this.displayDraw(playerOne_choice, playerTwo_choice, this.draw)  
            } else {
                eventBus.$emit('playerTwoIncrease', [])
                this.winner = this.playerTwo.name
                this.displayWinner(playerOne_choice, playerTwo_choice, this.winner)
            }
        
        },
        displayWinner(player1Choice, player2Choice, winner){
            this.$alert(`${this.playerOne.name} picked ${player1Choice}, ${this.playerTwo.name} picked ${player2Choice}. ${winner} wins!`)

        },
        displayDraw(player1Choice, player2Choice, draw){
        this.$alert(` ${this.playerOne.name} picked ${player1Choice}, ${this.playerTwo.name} picked ${player2Choice}.
         ${draw}`)

        }
    },
    components: {
        'player-rps': PlayerRps
    }

}
</script>

<style>

#rps-game > h1 {
    margin-top: 50px;
}

#rps-game > h2 {
    font-family: 'Bangers', cursive;
    font-size: 40px;
    color: white;
    text-shadow: 2px 3px rgba(0, 0, 0, 0.6);
    margin: 25px 0;
}

</style>