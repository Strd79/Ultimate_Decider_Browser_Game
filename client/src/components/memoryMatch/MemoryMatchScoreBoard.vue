<template>
  <div>
      <div>
          <h3>Player 1: {{playerOne.name}} </h3>
      </div>
      <div>
          <h3>Player 2: {{playerTwo.name}} </h3>
      </div>
  </div>
</template>

<script>
export default {
    name: 'memory-match-scoreboard',
    props: ['playerOne', 'playerTwo'],
    data() {

    }
}
</script>

<style>

</style>