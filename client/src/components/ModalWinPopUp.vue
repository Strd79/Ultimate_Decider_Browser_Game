<template>
  <div class="modal" v-show="value">
      <div class="modal-container">
      <h3>And the winner is...</h3>
      <!-- <h2>{{ this.currentWinner.name }}</h2> -->
      <button v-on:click="close">Close</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'modal-win-pop-up',
    props: [{
        value: {
            required: true
        }, 
    }, 'currentWinner'],
    methods: {
        close() {
            this.$emit('input', !this.value)
        }
    },
    mounted: {

    }
}
</script>

<style>
.modal {
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-container {
    background-color: rgb(255, 255, 255);
    border: salmon 5px solid;
    border-radius: 15px;
    width: 450px;
    height: 200px;
    margin: auto auto;
    position: fixed;
    top: 300px;
    left: 250px;
    
}

.modal > .modal-container > h3 {
    padding-top: 100px;
}
</style>