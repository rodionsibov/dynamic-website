<template>
  <div class="calculator">
    <div id="display" class="display">141</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      num: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      op: ['=', '+', '-', '/', '*', 'ac'],
    }
  }
}
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

button {
  width: 50px;
  height: 50px;
  margin: 5px;
  border-radius: 50%;
  font-size: 20px;
  border: none;
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
</style>
