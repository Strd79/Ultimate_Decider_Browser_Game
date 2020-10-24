<template>
  <div class="card">
      <!-- <p>{{card.name}}</p> -->
      <img class="front-image" :src="card.image" alt="x">
  </div>
</template>

<script>
export default {
    name: 'card',

    props: ["card"]
}
</script>

<style>
.card {
    display: flex;
    background-color: white;
    justify-content: center;
    
}

.front-image {
    align-self: center;
    width: 100px;
}
</style>