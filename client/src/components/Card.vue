<template>
  <div class="card">
      <div class="card_back" v-on:click="makeCardFlipped">
        <img class="back-image" v-if='!card.flipped' :src="card.cardBack">
        <div class="card_front">
            <img class="front-image" v-if='card.flipped' :src="card.imgUrl" disabled>
        </div>
      </div>
    
      <!--card back image = v-on:click 
      if false show back else true show front-->
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
    name: 'card',

    props: ["card"],

    methods: {
        makeCardFlipped(){
            this.card.flipped = true
            eventBus.$emit("flipped-card", this.card)
        }
    }


    
}
</script>

<style>
.card {
    display: flex;
    background-color: white;
    justify-content: center;
    
}

.front-image {
    align-self: center;
    width: 100px;
}

.back-image {
    align-self: center;
    width: 100px;
}

</style>