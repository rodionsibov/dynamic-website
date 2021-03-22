<template>
  <Header />
  <div class="container mt-5 text-center">
    <div class="row">
      <div class="col sm offset-3">
        <QuestionBox />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import QuestionBox from "./components/QuestionBox.vue";

export default {
  name: "App",
  components: {
    Header,
    QuestionBox,
  },
};
</script>

<style>
</style>
