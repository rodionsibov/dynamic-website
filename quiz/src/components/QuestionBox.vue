<template>
  <div class="question-box-container p-3 rounded">
    <p class="fs-3" v-html="currentQuestion.question"></p>

    <ul class="list-group mb-3">
      <li
        class="list-group-item"
        v-for="(answer, index) in answers"
        :key="index"
        @click="selectAnswer(index)"
        :class="answerClass(index)"
      >
        {{ answer }}
      </li>
    </ul>

    <button
      class="btn btn-primary"
      @click="submitAnswer"
      :disabled="selectedIndex === null || answered"
    >
      Submit
    </button>
    <button class="btn btn-success ms-2" @click="next">Next</button>
  </div>
</template>

<script>
export default {
  props: {
    currentQuestion: Object,
    next: Function,
    increment: Function,
  },
  data() {
    return {
      selectedIndex: null,
      correctIndex: null,
      shuffledAnswers: [],
      answered: false,
    };
  },
  computed: {
    answers() {
      let answers = [...this.currentQuestion.incorrect_answers];
      answers.push(this.currentQuestion.correct_answer);
      return answers;
    },
  },
  watch: {
    currentQuestion: {
      immediate: true,
      handler() {
        this.selectedIndex = null;
        this.answered = false;
        this.shuffleAnswers();
      },
    },
  },
  methods: {
    selectAnswer(index) {
      this.selectedIndex = index;
    },
    shuffleAnswers() {
      let answers = [
        ...this.currentQuestion.incorrect_answers,
        this.currentQuestion.correct_answer,
      ];
      this.shuffledAnswers = answers.sort(() => 0.5 - Math.random());
      this.correctIndex = this.shuffledAnswers.indexOf(
        this.currentQuestion.correct_answer
      );
    },
    submitAnswer() {
      let isCorrect = false;

      if (this.selectedIndex === this.correctIndex) {
        isCorrect = true;
      }

      this.answered = true;
      this.increment(isCorrect);
    },
    answerClass(index) {
      let answerClass = "";

      if (!this.answered && this.selectedIndex === index) {
        answerClass = "selected";
      } else if (this.answered && this.correctIndex === index) {
        answerClass = "correct";
      } else if (
        this.answered &&
        this.selectedIndex === index &&
        this.correctIndex !== index
      ) {
        answerClass = "incorrect";
      }

      return answerClass;
    },
  },
  mounted() {
    // console.log(this.currentQuestion);
    this.shuffleAnswers();
  },
};
</script>

<style>
.question-box-container {
  background: gold;
}

.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}

.selected {
  background: lightblue;
}

.correct {
  background: lightgreen;
}

.incorrect {
  background: lightsalmon;
}
</style>
