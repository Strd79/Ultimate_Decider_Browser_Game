<template>
    <div>
        <memory-match-game :playerOne='playerOne' :playerTwo="playerTwo" />
         <rock-paper-scissors-game :playerOne='playerOne' :playerTwo="playerTwo" ></rock-paper-scissors-game>
    </div>
</template>

<script>
import MemoryMatchGame from "@/components/memoryMatch/MemoryMatchGame"
import RockPaperScissors from "@/components/rps/RpsGame.vue"

export default {
    name: 'game-box',
    props: ['playerOne', 'playerTwo'],
    components: {
        'memory-match-game': MemoryMatchGame,
        'rock-paper-scissors-game': RockPaperScissors

}
}
</script>

<style>

</style>