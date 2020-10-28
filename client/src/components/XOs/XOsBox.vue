<template>
    <div class="XObox">
        <div class="symbol" v-on:click="markBox">
        <img class="Ximage" v-if='xoBox.value === 1' :src="xoBox.Ximage">
        <img class="Oimage" v-if='xoBox.value === 2' :src="xoBox.Oimage">
        </div>
        <h3>BOX</h3>
    </div>
  
</template>

<script>
import { eventBus } from '@/main.js'

export default {
    name: 'xo-Box',
    props: ['xoBox', 'boxes', 'playerOne', 'playerTwo', 'activePlayer'],
    methods: {
        markBox(){
            if(this.activePlayer === this.playerOne){
                eventBus.$emit("X")
                console.log("emit X")
            } else if (this.activePlayer === this.playerTwo){
                eventBus.$emit("O")
                console.log("emit O")
            } 
        }
    }

}
</script>

<style>
.XObox {
    display: flex;
    background-color: white;
    justify-content: center;
    
}

</style>