<template>
  <div>
      <div>
        <form id="new-player-form" v-on:submit="addPlayer">
            <label for="name">New Player:</label>
            <input type="text" v-model="playerName" required/>
            <input type="submit" value="ADD PLAYER">
        </form>
      </div>
      <div>
        <form id="new-game-form" v-on:submit="startGame">
            <label for="player1">Player 1:</label>
            <select name="player1" id="player1" v-model="playerOne" required>
                <option disabled selected value="">Select a Player</option>
                <option v-for="(player, index) in playersList" :key="index" :value="player">{{player.name}}</option>
            </select>
            <label for="player2">Player 2:</label>
            <select name="player2" id="player2" v-model="playerTwo" required>
                <option disabled selected value="">Select a Player</option>
                <option v-for="(player, index) in playersList" :key="index" :value="player">{{player.name}}</option>
            </select><br>
            <input type="submit" value="PLAY GAME">
        </form>
      </div>
  </div>
</template>

<script>
import { eventBus } from "../main.js"
import PlayerService from "../services/PlayerServices"

export default {
    name: "player-form",

    data(){
        return {
            playerName: null,
            playerOne: null,
            playerTwo: null

        }
    },

    props: ["playersList"],

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
        },

        startGame(e){
        e.preventDefault();
        eventBus.$emit("game-started", this.playerOne, this.playerTwo)
        }
    }
}


</script>

<style>
input[type="text"] {
    height: 20px;
    margin: 0 15px;
}

select {
    height: 30px;
    width: 150px;
}

input[type="submit"] {
    background-color: rgb(197, 5, 5);
    color: white;
    font-weight: 600;
    width: 100px;
    height: 30px;
    border-radius: 6px;

}
</style>