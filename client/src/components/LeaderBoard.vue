<template>
  <div>
      <div v-if="playersList">
      <h1>HELLO</h1>
       <p v-for="(player, index) in playersList" :player="player" :key="index">{{player.name}}: {{player.mm_score}}</p>
    </div>
  </div>
</template>

<script>
import { eventBus } from '@/main.js'
import PlayerForm from './PlayerForm'
import PlayerService from "../services/PlayerServices"
export default {
    name: 'leaderboard',
    props: ['playersList'],
    components: {
        'player-form': PlayerForm
    },
    methods: {
      updateScores(e){
        e.preventDefault();
        const player = {
        name: this.playerName,
        mm_score: 0,
        ox_score: 0,
        rps_score: 0
            }



      }
    }

}
</script>

<style>

</style>