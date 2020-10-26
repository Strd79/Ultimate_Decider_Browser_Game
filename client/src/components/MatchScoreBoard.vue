<template>
    <div>
        <div>
            <h3>Player 1: </h3>
            <h4>Score: </h4>
        </div>
        <div>
            <h3>Player 2</h3>
            <h4>Score: {{player2}} </h4>
        </div>
    </div>
</template>

<script>
import { eventBus } from "../main.js"
import PlayerService from "../services/PlayerServices"
import PlayerForm from './PlayerForm.vue'
export default {

}
</script>

<style>

</style>