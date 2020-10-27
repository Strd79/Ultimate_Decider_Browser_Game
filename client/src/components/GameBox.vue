<template>
    <div>
        <!-- <memory-match-game :playerOne='playerOne' :playerTwo="playerTwo" /> -->
        <ttt-game/>
    </div>
</template>

<script>
import MemoryMatchGame from "@/components/memoryMatch/MemoryMatchGame"
import TTTGame from "@/components/TicTacToe/TTTGame"

export default {
    name: 'game-box',
    props: ['playerOne', 'playerTwo'],
    components: {
        'memory-match-game': MemoryMatchGame,
        'ttt-game': TTTGame

}
}
</script>

<style>

</style>