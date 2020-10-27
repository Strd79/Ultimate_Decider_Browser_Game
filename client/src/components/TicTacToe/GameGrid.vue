<template>
  <div>
        <p v-if="winner">Winner is: {{activePlayer}}</p>
        <div class="ttt-grid">
		    <box :activePlayer="activePlayer" name="1"></box>
		    <box :activePlayer="activePlayer" name="2"></box>
		    <box :activePlayer="activePlayer" name="3"></box>
		    <box :activePlayer="activePlayer" name="4"></box>
		    <box :activePlayer="activePlayer" name="5"></box>
		    <box :activePlayer="activePlayer" name="6"></box>
		    <box :activePlayer="activePlayer" name="7"></box>
		    <box :activePlayer="activePlayer" name="8"></box>
		    <box :activePlayer="activePlayer" name="9"></box>
		</div>
	</div>
</template>

<script>
import { eventBus } from '../../main'
import Box from "./Box"

export default {

    name: "game-grid",
    data(){
        return{
            activePlayer: "O",
            winner: false,

            moves: 0,

            cells: {
				1: '', 2: '', 3: '',
				4: '', 5: '', 6: '',
				7: '', 8: '', 9: ''
			},
			
			winConditions: [
				[1, 2, 3], [4, 5, 6], [7, 8, 9], 
				[1, 4, 7], [2, 5, 8], [3, 6, 9], 
				[1, 5, 9], [3, 5, 7]             
			],

        }
    },

    methods: {
        changePlayer() {
                if (this.activePlayer === "O"){
                    this.activePlayer = "X"
                } else {
                    this.activePlayer = "O"
                }
            },

        checkForWin() {
			for (let i = 0; i < this.winConditions.length; i++) {
                let wc = this.winConditions[i]
				let cells = this.cells
                    if (cells[wc[0]] === cells[wc[1]] === cells[wc[2]]) {
					    this.winner = this.activePlayer
				    }
			    }
		    },
           
    },

    mounted() {
        eventBus.$on("box-click", (cellNum) => {
            this.cells[cellNum] = this.activePlayer
            this.checkForWin()
            this.changePlayer()
            }
        )},

    components: {
        "box": Box
    }
}
</script>

<style>

.ttt-grid {
    display: grid;
    width: 200px;
    height: 200px;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
}

</style>