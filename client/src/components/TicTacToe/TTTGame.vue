<template>
  <div>
      <game-grid/>
  </div>
</template>

<script>
import GameGrid from "./GameGrid"

export default {
  name: "TTTGame",
  props: ["playerOne", "playerTwo"],

  data() {
    return {

    }
  },


  components: {
   "game-grid": GameGrid
}

}
</script>

<style>

</style>