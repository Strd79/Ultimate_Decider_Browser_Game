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
            <div id="player-1-select">
                <label for="player1">Player 1:</label>
                <select name="player1" id="player1" v-model="playerOne" required>
                    <option disabled selected value="">Select a Player</option>
                    <option v-for="(player, index) in playersList" :key="index" :value="player">{{player.name}}</option>
                </select>
            </div>
            <div id="player-2-select">
                <label for="player2">Player 2:</label>
                <select name="player2" id="player2" v-model="playerTwo" required>
                    <option disabled selected value="">Select a Player</option>
                    <option v-for="(player, index) in playersList" :key="index" :value="player">{{player.name}}</option>
                </select>
            </div>
        </form>
        <input id="play-button" type="submit" form="new-game-form" value="PLAY GAME">
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
            playerTwo: null,

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
    border-radius: 6px;
}

select {
    height: 30px;
    width: 150px;
    border-radius: 6px;
}

input[type="submit"] {
    background-color: rgb(197, 5, 5);
    color: white;
    font-weight: 600;
    width: 130px;
    height: 40px;
    border: 3px solid white;
    border-radius: 6px;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);

}

#play-button {
    margin: 40px;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.4);
}

#play-button:focus {
    outline: none;
}

#new-game-form {
    display: flex;
    justify-content: center;
    margin: 10px;
}

#new-player-form {
    font-weight: bold;
    margin-bottom: 30px
}

#player-1-select {
    font-weight: bold;
    margin-right: 20px;
}

#player1 {
 margin-left: 20px;
}

#player-2-select {
    font-weight: bold;
}




</style>