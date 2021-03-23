<template>
  <Header :numCorrect="numCorrect" :numTotal="numTotal" />
  <div class="container mt-4 text-center">
    <div class="row">
      <div class="col-sm-6 offset-3">
        <QuestionBox
          v-if="questions.length"
          :currentQuestion="questions[index]"
          :next="next"
          :increment="increment"
        />
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
  data() {
    return {
      questions: [],
      index: 0,
      numCorrect: 0,
      numTotal: 0,
    };
  },
  methods: {
    next() {
      this.index++;
    },
    increment(isCorrect) {
      if (isCorrect) {
        this.numCorrect++;
      }
      this.numTotal++;
    },
  },
  mounted() {
    fetch("https://opentdb.com/api.php?amount=10&category=27&type=multiple", {
      method: "get",
    })
      .then((res) => {
        return res.json();
      })
      .then((jsonData) => {
        console.log(jsonData.results);
        this.questions = jsonData.results;
      });
  },
};
</script>

<style>
@media (max-width: 576px) {
  .col-sm-6.offset-3 {
    margin-left: 0;
  }
}
</style>
