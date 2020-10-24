<template>
    <div>
        <memory-match-game />
    </div>
</template>

<script>
import MemoryMatchGame from "@/components/MemoryMatchGame"

export default {
    name: 'game-box',

    components: {
        'memory-match-game': MemoryMatchGame
}
}
</script>

<style>

</style>