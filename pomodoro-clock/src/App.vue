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

  <div class="clock-container">
    <h1>{{ currentTimer }}</h1>
    <span>{{ convertToTime(clockCount) }}</span>
    <div class="flex">
      <button @click="handlePlayPause">
        <i class="fas" :class="[isPlaying ? 'fa-pause' : 'fa-play']"></i>
      </button>
      <button @click="handleReset"><i class="fas fa-sync"></i></button>
    </div>
  </div>
</template>

<script>
import SetTimer from "./components/SetTimer.vue";

export default {
  components: { SetTimer },
  name: "App",
  data() {
    return {
      breakCount: 5,
      sessionCount: 25,
      clockCount: 25 * 60,
      currentTimer: "Session",
      loop: null,
      isPlaying: false,
    };
  },
  methods: {
    convertToTime(count) {
      const minutes = Math.floor(count / 60);
      let seconds = count % 60;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      return `${minutes}:${seconds}`;
    },
    handleBreakDecrease() {},
    handleBreakIncrease() {},
    handleSessionDecrease() {},
    handleSessionIncrease() {},
    handlePlayPause() {
      if (this.isPlaying) {
        clearInterval(this.loop);
        this.isPlaying = false;
      } else {
        this.loop = setInterval(() => {
          this.clockCount--;
        }, 1000);
        this.isPlaying = true;
      }
    },
  },
  unmounted() {
    clearInterval(this.loop);
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
  text-align: center;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.time-container {
  margin: 20px;
}

button {
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

.clock-container {
  border: 2px solid white;
  border-radius: 10px;
  padding: 20px 40px;
  display: inline-block;
  margin-top: 20px;
  width: 250px;
}

.clock-container h1 {
  margin: 0;
}

.clock-container span {
  font-size: 60px;
}
</style>
