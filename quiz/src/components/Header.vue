<template>
  <nav class="nav">
    <a class="nav-link fw-bold disabled" href="#">Question Quiz App</a>
    <a class="nav-link disabled" href="#">Counter: {{numCorrect}}/{{numTotal}}</a>
  </nav>
</template>

<script>
export default {
  props: [
    'numCorrect',
    'numTotal'
  ]
};
</script>

<style>
</style>