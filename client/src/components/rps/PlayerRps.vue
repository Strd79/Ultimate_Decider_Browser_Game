<template>
<div id="rps-parent">
    <div class='playerRps'>
        <h2 v-if="playerOne && !winner && !draw">{{ this.activePlayer.name}}'s Turn To Play</h2>
        <div class="choices">
            <button v-on:click="makeRock"><img src="/assets/rock.png"></img></button>
            <button v-on:click="makePaper"><img src="/assets/paper.png"></button>
            <button v-on:click="makeScissors"><img src="/assets/scissors.png"></button>
            <button v-on:click="makeLizard"><img src="/assets/lizard.png"></button>
            <button v-on:click="makeSpock"><img src="/assets/spock.png"></button>
        </div>
        
    </div>
</div>
  
</template>

<script>
import { eventBus } from '@/main'
import VueSimpleAlert from '@/main.js'

export default {
    name: 'playerRps',

    props: ['playerOne_choice', 'playerTwo_choice', 'playerOne', 'playerTwo', 'activePlayer', 'winner', 'draw'],

    methods: {
        makeScissors(){
            eventBus.$emit("scissors", this.activePlayer)
        },
         makePaper(){
            eventBus.$emit("paper", this.activePlayer)
        }, 
        makeRock(){
            eventBus.$emit("rock", this.activePlayer)
        },
        makeSpock(){
            eventBus.$emit("spock", this.activePlayer)
        },
        makeLizard(){
            eventBus.$emit("lizard", this.activePlayer)
        }

    }

}
</script>

<style>
#rps-parent {
    display: flex;
    justify-content: center;
}

.playerRps {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 700px;
    padding:30px;
    color: rgb(56, 56, 99);
    border-radius: 15px;
    margin-bottom: 100px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
}

button > img {
    width: 100px;
}

.choices > button {
    width: 120px;
    height: 120px;
    margin: 10px;
    background-color: rgb(197, 5, 5);
    border-radius: 6px;
    border: 2px solid  white;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
}

.choices > button:hover {
    cursor: pointer;
    background-color: rgb(4, 104, 218);
    transition: 0.3s;
}

.choices {
    display: flex;
}
</style>