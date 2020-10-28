<template>
  <div v-if="playerOne" id="mm-scoreboard">
    <h2>Score board</h2>
        <h3 v-if="activePlayer"><strong>{{activePlayer.name}}</strong> to play</h3>
        <div id="player-scores">
            <div id="player1">
                <h3>Player: {{playerOne.name}} </h3>
                <h4>Score: {{playerOne_score}}</h4>
            </div>
            <div id="player2">
                <h3>Player: {{playerTwo.name}} </h3>
                <h4>Score: {{playerTwo_score}}</h4>
            </div>    
        </div>
  </div>
</template>

<script>
export default {
    name: 'memory-match-scoreboard',
    props: ['playerOne', 'playerTwo', 'activePlayer', 'playerOne_score', 'playerTwo_score'],
}
</script>

<style>
#mm-scoreboard {
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: rgb(194, 17, 17);
    color: white;
    margin: 20px 20px;
    border-radius: 10px;
    box-shadow: 3px 5px 6px rgba(0, 0, 0, 0.2);
}

#player-scores {
    display: flex;
    justify-content: space-evenly;
}

#player2 {
    margin-left: 20px;
}
</style>