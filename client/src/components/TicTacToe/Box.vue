<template>
   <div class="box" v-on:click="markBox">
       <p>{{mark}}</p>
   </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
    
    name: "box",
    props: ["activePlayer", "name"],

    data(){
        return {
            mark: "",
            disabled: false 
        }
    },

    methods: {
        markBox() {
            if (!this.disabled){
            this.mark = this.activePlayer
            this.disabled = true

            eventBus.$emit("box-click", this.name)
            }
        }
    }

}
</script>

<style>
.box {
    background-color: white;
    border: 2px solid black;
}

</style>