<template>
  <div>
      <form id="new-player-form" v-on:submit="addPlayer">
          <label for="name">New Player:</label>
          <input type="text" v-model="playerName" required/>
          <input type="submit" value="Add Player">
      </form>
  </div>
</template>

<script>
import { eventBus } from "../main.js"
import PlayerService from "../services/PlayerServices"

export default {
    name: "player-form",

    data(){
        return {
            playerName: null

        }
    },

    methods: {
        addPlayer(e) {
            e.preventDefault();
            const player = {
                name: this.playerName,
                mm_score: 0,
                ox_score: 0,
                rps_score: 0
            }
            PlayerService.postPlayer(player)
            .then(res => eventBus.$emit('player-added', res))
            this.playerName = ""

        }
    }
}


</script>

<style>

</style>