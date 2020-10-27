<template>
    <div>
        <match-score-board :playerOne='playerOne' :playerTwo="playerTwo" :playerOneMatchScore="playerOneMatchScore" :playerTwoMatchScore="playerTwoMatchScore" ></match-score-board>
        <memory-match-game v-if="selectedGame === 0" :playerOne='playerOne' :playerTwo="playerTwo" />
        <rock-paper-scissors-game v-if="selectedGame === 1" :playerOne='playerOne' :playerTwo="playerTwo" :playerOneMatchScore="playerOneMatchScore" :playerTwoMatchScore="playerTwoMatchScore" ></rock-paper-scissors-game>
         
    </div>
</template>

<script>
import { eventBus } from '@/main.js'
import MemoryMatchGame from "@/components/memoryMatch/MemoryMatchGame"
import RockPaperScissors from "@/components/rps/RpsGame.vue"
import MatchScoreBoard from "./MatchScoreBoard.vue"

export default {
    name: 'game-box',
    props: ['playerOne', 'playerTwo'],
    data(){
        return {
            selectedGame: null,
            playerOneMatchScore:0,
            playerTwoMatchScore:0,
            overallWinner: null
        }
    },
    mounted(){
        eventBus.$on('playerOneIncrease', () => {
            console.log("playerOnEIncrease called");
            this.playerOneMatchScore += 1
            this.checkForWinner()
        })
         eventBus.$on('playerTwoIncrease', () => {
             console.log("playerTwoIncrease called");
            this.playerTwoMatchScore += 1
            this.checkForWinner()
        })
        eventBus.$on('game-started', () => {
            this.randomiseGame()
        })
        
    },

    methods: {
        randomiseGame() {
          this.selectedGame = Math.floor((Math.random() * 2))
          
        },
        
        checkForWinner(){
            if (this.playerOneMatchScore + this.playerTwoMatchScore === 5){
                if (this.playerOneMatchScore > this.playerTwoMatchScore){
                    return this.overallWinner = this.playerOne.name
                } else {
                    return this.overallWinner = this.playerTwo.name
                }

            }
        }

    },
    components: {
        'memory-match-game': MemoryMatchGame,
        'rock-paper-scissors-game': RockPaperScissors,
        'match-score-board': MatchScoreBoard

}
}
</script>

<style>

</style>