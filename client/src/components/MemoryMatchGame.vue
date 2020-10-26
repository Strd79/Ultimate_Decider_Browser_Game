<template>
    <div>
    <h1>Memory Match Game</h1>
        <div class="grid">
            <card v-for="(card, index) in cards" :flippedCardArray="flippedCards" :card="card" :key="index"></card>
        </div>
    </div>
</template>

<script>
import { eventBus } from "../main.js"
import Card from '../components/Card'


export default {
    name: 'memory-match-game',

    data(){
        return {
            shapes: ['circle', 'triangle', 'cross', 'star', 'square', 'crescent', 'hexagon', 'diamond'],    
            cards: [],
            flippedCards: [],
            matchedCards: []
        }
    },
    mounted(){
        this.createCards(this.shapes)
        this.shuffleCards(this.cards)

        // eventBus.$on("flipped-card", (card) => {
        //     // this.checkCardFlipped(card)
        //     // this.checkCard(card)
        //     if (this.flippedCards.length === 2) {
        //         setTimeout(this.checkForMatch, 750, this.flippedCards)
        //     }
        // })

        eventBus.$on("check-flipped", (card) => {
            // if(this.flippedCards.length <= 2){
            if(!this.flippedCards.includes(card)){
                if(!this.matchedCards.includes(card)){
                this.flippedCards.push(card)
                setTimeout(this.checkForMatch, 750, this.flippedCards)
                }
            }
            
            // }
        })
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
            
                this.flippedCards = []

            } else {
               this.matchedCards.push(card1, card2)
               this.flippedCards = [] 
            }
        }

        // checkCardFlipped(selectedCard){
        //     if (selectedCard.flipped = false){
        //         for ( let card of this.cards){
        //             if (card.id === selectedCard.id){
        //                 card.flipped = true
        //             }
        //         }
        //         this.flippedCards.push(selectedCard)
        //     }
        // },

        // checkCard(currentCard) {
        //     if (this.flippedCards.length !== 0){
        //         for (let card of this.flippedCards) {
        //             console.log(card);
        //             if (card.id !== currentCard.id) {
        //                 if (this.matchedCards !== 0){
        //                     for (let card of this.matchedCards) {
        //                         if (card.id !== currentCard.id) {
        //                             this.flippedCards.push(currentCard)
        //                         }
        //                     }
        //                 } else {
        //                     this.flippedCards.push(currentCard)
        //                 }
        //             } else {
        //                 this.flippedCards.push(currentCard)
        //             }
        //         }
        //     } else {
        //         this.flippedCards.push(currentCard)
        //     }
        // }
        
        
    },
    components: {
        'card': Card
    }
    
}
</script>

<style>


.grid {
  background-color: blue;
  list-style: none;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 500px;
  height: 500px;

}

</style>