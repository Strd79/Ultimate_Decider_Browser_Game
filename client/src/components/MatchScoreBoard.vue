<template>
    <div id="overall-scoreboard">
        <div id="overall-score-heading">
            <h2>Overall Scores</h2>
        </div>
        <div id="players">
            <div id="player1-overall">
                <h3> {{this.playerOne.name}}: {{this.playerOneMatchScore}} </h3>
            </div>
            <div id="player2-overall">
                <h3> {{this.playerTwo.name}}: {{this.playerTwoMatchScore}}</h3>
                <h3 v-if="overallWinner"> {{this.overallWinner}} is the Ultimate Decider! </h3>
            </div>
        </div>
    </div>
</template>

<script>
import { eventBus } from "../main.js"
import PlayerService from "../services/PlayerServices"
import PlayerForm from './PlayerForm.vue'
export default {
    name: 'match-score-board',
    props: ['playerOne', 'playerTwo','playerOneMatchScore', 'playerTwoMatchScore', 'overallWinner'],

}
</script>

<style>
#overall-scoreboard {
    display: flex;
    flex-direction: column;
    width: 400px;
    align-self: center;
    background-color: rgb(235, 245, 255);
    border-radius: 15px;
    align-items: center;
    margin: auto;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
    
}

#overall-score-heading {
    font-family: 'Bangers', cursive;
    font-size: 30px;
    height: 90px;
    color: rgba(4, 104, 218);
    text-shadow: 2px 2px rgba(0, 0, 0, 0.4);
}

#players {
    display:flex;
    width: 250px;
    color: rgb(56, 56, 99);
    justify-content: space-around;
    margin-bottom: 15px;
}

#player1-overall {
    
}



</style>