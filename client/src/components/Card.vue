<template>
  <div class="card">
      <img class="back-image" :src="card.cardBack" alt="x">
      <!--card back image = v-on:click 
      if false show back else true show front-->
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

.back-image {
    align-self: center;
    width: 100px;
}

</style>