<template>
  <div class="question-box-container p-3 rounded">
    <p v-html="currentQuestion.question"></p>
    <hr />

    <ul class="list-group mb-3">
      <li class="list-group-item" v-for="(answer, index) in answers" :key="index">{{ answer }}</li>
    </ul>

    <button class="btn btn-primary">Submit</button>
    <button class="btn btn-success ms-1" @click="next">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestion: Object,
    next: Function,
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    },
  },
  mounted() {
    console.log(this.currentQuestion);
  },
};
</script>

<style>
.question-box-container {
  height: 50vh;
  background: lightgray;
}
</style>
