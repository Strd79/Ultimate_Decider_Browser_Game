<template>
    <div>
        <div>
            <h3> {{this.playerOne.name}}: {{this.playerOneMatchScore}} </h3>
        </div>
        <div>
            <h3> {{this.playerTwo.name}}: {{this.playerTwoMatchScore}}</h3>
            <h3> {{this.overallWinner}} is the Ultimate Decider </h3>
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

</style>