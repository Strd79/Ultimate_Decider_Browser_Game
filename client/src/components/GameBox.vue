<template>
    <div>
        <memory-match-game :playerOne='playerOne' :playerTwo="playerTwo" />
    </div>
</template>

<script>
import MemoryMatchGame from "@/components/memoryMatch/MemoryMatchGame"

export default {
    name: 'game-box',
    props: ['playerOne', 'playerTwo'],
    components: {
        'memory-match-game': MemoryMatchGame

}
}
</script>

<style>

</style>