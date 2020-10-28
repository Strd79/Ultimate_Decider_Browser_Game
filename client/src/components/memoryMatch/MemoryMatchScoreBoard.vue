<template>
  <div v-if="playerOne" id="mm-scoreboard">
    <h2>Game Scoreboard</h2>
        <h3 v-if="activePlayer">{{activePlayer.name}} to play</h3>
        <div id="player-scores">
            <div id="player1">
                <h4>{{playerOne.name}}: {{playerOne_score}}</h4>
            </div>
            <div id="player2">
                <h4>{{playerTwo.name}}: {{playerTwo_score}}</h4>
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
    background-color: white;
    margin: 20px 20px;
    border-radius: 10px;
    box-shadow: 3px 5px 6px rgba(0, 0, 0, 0.2);
}

#mm-scoreboard > h2 {
    font-family: 'Bangers', cursive;
    font-size: 50px;
    color: rgb(197, 5, 5);
    text-shadow: 2px 2px rgba(0, 0, 0, 0.4);
    margin: 25px 0;
}

#player-scores {
    display: flex;
    justify-content: space-evenly;
}

#player2 {
    margin-left: 20px;
}
</style>