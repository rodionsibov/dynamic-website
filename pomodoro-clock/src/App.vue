<template>
  <div class="flex">
    <!-- Break -->
    <set-timer
      title="Break Length"
      :count="breakCount"
      :handleDecrease="handleBreakDecrease"
      :handleIncrease="handleBreakIncrease"
    />
    <!-- Session -->
    <set-timer
      title="Session Length"
      :count="sessionCount"
      :handleDecrease="handleSessionDecrease"
      :handleIncrease="handleSessionIncrease"
    />
  </div>
  <div>clock goes here</div>
</template>

<script>
import SetTimer from "./components/SetTimer.vue";

export default {
  components: { SetTimer },
  name: "App",
  data(){
    return {
      breakCount: 5,
      sessionCount: 25
    }
  },
  methods: {
    handleBreakDecrease() {},
    handleBreakIncrease() {},
    handleSessionDecrease() {},
    handleSessionIncrease() {},
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
}

body {
  background-color: navy;
  color: white;
  font-family: "Poppins", sans-serif;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.time-container {
  margin: 20px;
}

.time-container h1 {
  text-align: center;
}

.actions-wrapper button {
  background-color: blue;
  cursor: pointer;
  border: none;
  padding: 15px;
  margin: 10px;
  color: white;
  font-size: 20px;
}

.actions-wrapper span {
  font-size: 40px;
  margin: 0 10px;
}
</style>
