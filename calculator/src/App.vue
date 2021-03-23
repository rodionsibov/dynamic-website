<template>
  <div class="calculator">
    <div id="display" class="display">7243</div>
    <div class="nums-container">
      <button class="light-gray ac big-h">AC</button>
      <button v-for="(num, index) in nums" :key="index" class="dark-gray" :class="[num === 0 ? 'big-h' : '']">
        {{ num }}
      </button>
      <button class="light-gray">.</button>

    </div>
    <div class="ops-container">
      <button v-for="(op, index) in ops" :key="index" class="orange">
        {{ op }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      nums: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
      ops: ["/", "×", "-", "+", "="],
    };
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  min-height: 100vh;
  font-family: "Courier New", Courier, monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  background-color: rgb(209, 248, 209);
}

.calculator {
  width: 250px;
  height: 380px;
  padding: 5px;
  background-color: #111;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.display {
  color: white;
  width: 100%;
  font-size: 40px;
  text-align: right;
  padding: 10px;
}

.nums-container {
  user-select: none;
  width: 75%;
}

.ops-container {
  user-select: none;
  width: 25%;
}

button {
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 50%;
  font-size: 20px;
  border: none;
  cursor: pointer;
}

button:active {
  transform: scale(0.95);
}

button:focus {
  outline: none;
}

button:hover {
  opacity: 0.9;
}

button.big-v {
  height: 110px;
  border-radius: 50px;
}
button.big-h {
  width: 110px;
  border-radius: 50px;
}

button.orange {
  background-color: orange;
  color: white;
}

button.dark-gray {
  background-color: darkslategray;
  color: white;
}

button.light-gray {
  background-color: darkgray;
}

button.ac {
  margin-right: 50%;
}
</style>
