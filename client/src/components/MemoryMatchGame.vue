<template>
    <div>
    <h1>Memory Match Game</h1>
        <div class="grid">
            <div class="grid-item">1</div>
            <div class="grid-item">2</div>
            <div class="grid-item">3</div>
            <div class="grid-item">4</div>
            <div class="grid-item">5</div>
            <div class="grid-item">6</div>
            <div class="grid-item">7</div>
            <div class="grid-item">8</div>
            <div class="grid-item">9</div>
            <div class="grid-item">10</div>
            <div class="grid-item">11</div>
            <div class="grid-item">12</div>
            <div class="grid-item">13</div>
            <div class="grid-item">14</div>
            <div class="grid-item">15</div>
            <div class="grid-item">16</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'memory-match-game',

    data(){
        return {    
            cards: []
        }
    }
}
</script>

<style>

.grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: calc(100vw -80px);
  height: calc(100vh - 100px);
}

.grid-item {
    background-color: grey;
}
</style>