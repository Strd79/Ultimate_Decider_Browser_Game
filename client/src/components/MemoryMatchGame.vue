<template>
    <div>
    <h1>Memory Match Game</h1>
        <div class="grid">
            <card v-for="(card, index) in cards" :card="card" :key="index"></card>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card'

export default {
    name: 'memory-match-game',

    data(){
        return {    
            cards: [
                {
                    name: "Circle",
                    image: "/img/circle.8ebac252.png"
                },
                {
                    name: "Square",
                    image: "/img/square.f2a197cd.png",
                },
                {
                    name: "Star",
                    image: "/img/star.4ceb59ff.png",
                },
                {
                    name: "Cross",
                    image: "/img/cross.7a8a1fd1.png",
                },
                {
                    name: "Triangle",
                    image: "/img/triangle.9aae23a1.png",
                },
                {
                    name: "Diamond",
                    image: "/img/diamond.06a37c34.png",
                },
                {
                    name: "Crescent",
                    image: "/img/crescent.69647f6b.png" ,
                },
                {
                    name: "Hexagon",
                    image: "/img/hexagon.0303010b.png" ,
                },
                {
                    name: "Circle",
                    image: "/img/circle.8ebac252.png"
                },
                {
                    name: "Square",
                    image: "/img/square.f2a197cd.png",
                },
                {
                    name: "Star",
                    image: "/img/star.4ceb59ff.png",
                },
                {
                    name: "Cross",
                    image: "/img/cross.7a8a1fd1.png",
                },
                {
                    name: "Triangle",
                    image: "/img/triangle.9aae23a1.png",
                },
                {
                    name: "Diamond",
                    image: "/img/diamond.06a37c34.png",
                },
                {
                    name: "Crescent",
                    image: "/img/crescent.69647f6b.png" ,
                },
                {
                    name: "Hexagon",
                    image: "/img/hexagon.0303010b.png" ,
                },
            ],
            matchedCards: [],


        }
    },

    methods: {
        shuffleCards(){
            cards = this.cards;
            cards = cards.sort(() => Math.random() - 0.5)
        }

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

.grid-item {
    background-color: grey;
}
</style>