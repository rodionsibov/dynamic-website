<template>
  <div class="question-box-container p-3 rounded">
    <p class="fs-3" v-html="currentQuestion.question"></p>

    <ul class="list-group mb-3">
      <li
        class="list-group-item"
        v-for="(answer, index) in answers"
        :key="index"
        @click="selectAnswer(index)"
      >
        {{ answer }}
      </li>
    </ul>

    <button class="btn btn-primary">Submit</button>
    <button class="btn btn-success ms-2" @click="next">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestion: Object,
    next: Function,
  },
  data() {
    return {
      selectedIndex: null,
    };
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    },
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },
  },
  mounted() {
    console.log(this.currentQuestion);
  },
};
</script>

<style>
.question-box-container {
  background: lightgray;
}

.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}
</style>
