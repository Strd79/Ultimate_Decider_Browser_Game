<template>
    <div>
        <h1>Noughts and Crosses</h1>
        <div class="XOgrid">
            <xoBox v-for="(xoBox, index) in boxes" :boxes='boxes' :xoBox='xoBox' :key='index' :playerOne='playerOne' :playerTwo="playerTwo" :activePlayer="activePlayer"></xoBox>
        </div>
    </div>
  
</template>

<script>
import { eventBus } from '@/main.js'
import xoBox from './XOsBox'

export default {
    name: 'XO-game',
    props: ['playerOne', 'playerTwo'],
    data(){
        return {
            numbers: [1,2,3,4,5,6,7,8,9],
            boxes: [],
            currentPlayer: null,
            Xmarked: [],
            Omarked: []
        }
    },
    mounted(){
        this.createBoxes(this.numbers)

        eventBus.$on("X", (xoBox) => {
            this.xoBox.value = 1
            this.Xmarked.push(this.xoBox)
            this.changetoPlayerTwo()
        })

        eventBus.$on("O", (xoBox) => {
            this.xoBox.value = 10
            this.Omarked.push(this.xoBox)
            return this.activePlayer = null
            this.changetoPlayerOne()
        })


    },
    computed: {
        activePlayer: function(){
            if(this.currentPlayer === null){
            return this.playerOne
            } else {
                return this.playerTwo
            }
        }
    },
    methods:{
        createBoxes(items){
            items.forEach( item => {
                const xoBox = {
                    value: null,
                    position: `${item}`,
                    xImage: "/assets/X.png",
                    oImage: "/assets/O.png"
                }
                this.boxes.push(xoBox)
            })
        },
        changetoPlayerOne(){
            return this.activePlayer = this.playerOne
        },
        changetoPlayerTwo(){
            return this.activePlayer = this.playerTwo
        },
        checkWinner(list){
            
        }
    },
    components: {
        'xoBox': xoBox
    }
}
</script>

<style>
.XOgrid {
  background: green;
  list-style: none;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  width: 500px;
  height: 500px;

}

</style>