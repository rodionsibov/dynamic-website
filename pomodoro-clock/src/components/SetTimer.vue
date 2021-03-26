<template>
  <div class="time-container">
    <h1>{{ title }}</h1>
    <div class="flex actions-wrapper">
      <button @click="handleDecrease"><i class="fas fa-minus"></i></button>
      <span>{{ count }}</span>
      <button @click="handleIncrease"><i class="fas fa-plus"></i></button>
    </div>
  </div>
</template>

<script>
export default {
   props: {
       title: String,
       count: Number,
       handleDecrease: Function,
       handleIncrease: Function,
   }
};
</script>

<style>
</style>