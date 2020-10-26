<template>
  <div v-if="playerOne" id="mm-scoreboard">
    <h2>Score board</h2>
        <p v-if="activePlayer">{{activePlayer.name}}</p>
        <div id="player-scores">
            <div>
                <div class="">
                    <h3>Player: {{playerOne.name}} </h3>
                    <h4>Score: {{this.player1_score}}</h4>
                </div>
            </div>
            <div>
                <div class="">
                    <h3>Player: {{playerTwo.name}} </h3>
                    <h4>Score: {{this.player2_score}}</h4>
                </div>    
            </div>
        </div>
  </div>
</template>

<script>
export default {
    name: 'memory-match-scoreboard',
    props: ['playerOne', 'playerTwo', 'activePlayer'],
    data() {
        return {
            player1_score: 0,
            player2_score: 0  
        }
    }
}
</script>

<style>
#mm-scoreboard {
    display: flex;
    flex-direction: column;
    background-color: aqua;
}

#player-scores {
    display: flex;
    justify-content: space-evenly;
}
</style>