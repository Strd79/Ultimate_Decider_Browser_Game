<template>
<div>
    <div class="heading">
        <h1>Memory Match Game</h1>
    </div>    
    <div class="memory-game">
        <div class="grid">
            <card v-for="(card, index) in cards" :flippedCardArray="flippedCards" :card="card" :key="index"></card>
        </div>
        <div class="memory-scoreboard">
            <memory-match-scoreboard :activePlayer="activePlayer" :playerOne='playerOne' :playerTwo="playerTwo" :playerOne_score="playerOne_score" :playerTwo_score="playerTwo_score"></memory-match-scoreboard>
        </div>
    </div>
</div>
</template>

<script>
import { eventBus } from '@/main.js'
import Card from './Card.vue'
import MemoryMatchScoreBoard from '@/components/memoryMatch/MemoryMatchScoreBoard.vue'

export default {
    name: 'memory-match-game',
    props: ['playerOne', 'playerTwo'],
    data(){
        return {
            shapes: ['circle', 'triangle', 'cross', 'star', 'square', 'crescent', 'hexagon', 'diamond'],   
            cards: [],
            flippedCards: [],
            matchedCards: [],
            currentPlayer: null,
            playerOne_score: 0,
            playerTwo_score: 0,
        }
    },
    mounted(){

        this.createCards(this.shapes)
        this.shuffleCards(this.cards)


        eventBus.$on("check-flipped", (card) => {
            if(!this.flippedCards.includes(card)){
                if(!this.matchedCards.includes(card)){
                this.flippedCards.push(card)
                setTimeout(this.checkForMatch, 600, this.flippedCards)
                }
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
        },
    },
    methods: {
        createCards(items){
            items.forEach( item => {
                const card = {
                    matchName: item,
                    flipped: false,
                    id: `${item}-a`,
                    imgUrl: `/assets/${item}.png`,
                    matched: false,
                    cardBack: "/assets/cardBack2.png"
                }
                const cardA = card; 
                this.cards.push(cardA);
                const cardB = {...card};
                cardB.id = `${item}-b`
                this.cards.push(cardB);
            })
        },

        shuffleCards(cardArray){
            let j, x, i;
            for (i = cardArray.length -1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = cardArray[i];
            cardArray[i] = cardArray[j];
            cardArray[j] = x;
             }
            return cardArray
        },

        checkForMatch(array){
            const card1 = array[0];
            const card2 = array[1];
            if (card1.matchName !== card2.matchName){
                for (let card of this.cards) {
                if (card.id === card1.id) {
                        card.flipped = false;
                    }
                if (card.id === card2.id){
                        card.flipped = false
                    }
                }
                if (this.activePlayer === this.playerOne){
                    this.currentPlayer =this.playerTwo
            } else {
                if (this.activePlayer === this.playerTwo){
                    this.currentPlayer = null
                }
            }
                this.flippedCards = []

            } else {
               this.matchedCards.push(card1, card2)
               this.flippedCards = [] 
               this.addToScore()
               this.whoWins()
            }
        },
        addToScore(){
            if (this.activePlayer === this.playerTwo) {
                this.playerTwo_score += 1
            } else {
                this.playerOne_score += 1
            }
        },
        whoWins(){
            if (this.matchedCards.length === 16) {
                if (this.playerOne_score > this.playerTwo_score) {
                    eventBus.$emit("playerOneIncrease")
                    alert(`${this.playerOne.name} wins with a score of ${this.playerOne_score}`)
                }
                else if(this.playerOne_score < this.playerTwo_score) {
                    eventBus.$emit("playerTwoIncrease")
                    alert(`${this.playerTwo.name} wins with a score of ${this.playerTwo_score}`)
                }
                else {
                    eventBus.$emit("memoryMatch-draw")
                    alert("It's a draw! Play again")
                }
            }
        }
    },
    components: {
        'card': Card,
        'memory-match-scoreboard': MemoryMatchScoreBoard,
    }
    
}
</script>

<style>


.grid {
  background-color: rgb(4, 104, 218);
  list-style: none;
  margin-top: 20px;
  padding: 40px;
  padding-bottom: 60px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 500px;
  height: 500px;
  border-radius: 10px;
  box-shadow: 3px 5px 6px rgba(0, 0, 0, 0.2);
}

.memory-game {
    display: flex;
    justify-content: center;
}


</style>