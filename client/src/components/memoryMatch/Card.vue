<template>
  <div class="card">
      <div class="card_back" v-on:click="makeCardFlipped">
        <img class="back-image" v-if='!card.flipped' :src="card.cardBack">
        <div class="card_front">
            <img class="front-image" v-if='card.flipped' :src="card.imgUrl">
        </div>
      </div>
  </div>
</template>

<script>
import { eventBus } from '@/main'

export default {
    name: 'card',

    props: ["card", "flippedCardArray"],

    methods: {
        makeCardFlipped(){
            if(this.flippedCardArray.length <= 2){
            this.card.flipped = true
            eventBus.$emit("check-flipped", this.card)
            }
        }
    }    
}
</script>

<style>
.card {
    display: flex;
    background-color: white;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    box-shadow: 3px 5px 8px rgba(0, 0, 0, 0.2), 3px 5px 20px rgba(0, 0, 0, 0.2);
}
.card:hover{
    cursor: pointer;
}

.front-image {
    width: 85px;
}

.back-image {
    width: 100px;
}

</style>