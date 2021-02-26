<template>
  <main class="calculator">
    <div ref="display" class="display">
      <span ref="displayText">{{display}}</span>
    </div>
    <div class="buttons">
      <div class="button-row" v-for="row in buttonRows">
	<div
	  @click="buttonClicks[button.type](button)"
	  :class="{ operator: button.type == 'operator' }"
	  :style="button.style"
	  class="button"
	  v-for="button in row">
	  {{button.text}}
	</div>
      </div>
    </div>
  </main>
</template>

<script>

 export default {
   methods: {
     performOperation() {
       this.display = this.operations[this.currentOperator](+this.previousValue, +this.display);
     }
   },
   watch: {
     display() {
       let fontSize = 50;
       this.$refs.display.setAttribute('style', 'font-size: 50px');
       while (this.$refs.displayText.offsetWidth + 50 > this.$refs.display.offsetWidth) {
	 fontSize--;
	 this.$refs.display.setAttribute('style', 'font-size:' + fontSize + 'px');
       }
       
     }
   },
   data: (vm) => ({
     displayFont: '4vw',
     display: '0',
     previousValue: '',
     currentOperator: '',
     buttonClicks: {
       number(button) {
	 if (vm.previousValue === null) {
	   vm.previousValue = Number(vm.display);
	   vm.display = '';
	 }
	 
	 if (button.text == '.' && vm.display.includes('.')) return;
	 vm.display += button.text;

	 if (vm.display[0] == '0' && vm.display[1] != '.') {
	   vm.display = vm.display.slice(1);
	 }
       },
       operator(button) {
	 if (vm.currentOperator) {
	   vm.performOperation();
	   
	 }
	 vm.previousValue = null;
	 vm.currentOperator = button.text;
       },
       special(button) {
	 if (button.text == 'AC') {
	   vm.display = '';
	 } else if (button.text == '+/-') {
	   vm.display *= -1; 
	 } else if (button.text == '=') {
	   vm.performOperation();
	   vm.currentOperator = '';
	 }
       }
     },
     operations: {
       '/': (a, b) => a / b,
       '*': (a, b) => a * b,
       '-': (a, b) => a - b,
       '+': (a, b) => a + b,
     },
     buttonRows: [
       [
	 {
	   text: 'AC',
	   type: 'special'
	 },
	 {
	   text: '+/-',
	   type: 'special'
	 },
	 {
	   text: '%',
	   type: 'special'
	 },
	 {
	   text: '/',
	   type: 'operator'
	 }
       ],
       [
	 {
	   text: '7',
	   type: 'number'
	 },
	 {
	   text: '8',
	   type: 'number'
	 },
	 {
	   text: '9',
	   type: 'number'
	 },
	 {
	   text: 'x',
	   type: 'operator'
	 }
       ],
       [
	 {
	   text: '4',
	   type: 'number'
	 },
	 {
	   text: '5',
	   type: 'number'
	 },
	 {
	   text: '6',
	   type: 'number'
	 },
	 {
	   text: '-',
	   type: 'operator'
	 }
       ],
       [
	 {
	   text: '1',
	   type: 'number'
	 },
	 {
	   text: '2',
	   type: 'number'
	 },
	 {
	   text: '3',
	   type: 'number'
	 },
	 {
	   text: '+',
	   type: 'operator'
	 }
       ],
       [
	 {
	   text: '0',
	   type: 'number'
	 },
	 {
	   text: '.',
	   type: 'number',
	   style: 'flex-basis: calc(100%/2)'
	 },
	 {
	   text: '=',
	   type: 'special',
	   style: 'flex-basis: calc(100%/2)'
	 }
       ]
     ]
   })
 }
</script>

<style>
 
 body {
   width: 100%;
   height: 100vh;
   margin: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 3vw;
 }


 .calculator {
   display: flex;
   flex-direction: column;
   justify-content: space-around;
   width: 50vw;
   height: 70vh;
   font-family: sans-serif;
   border-radius: 5px;
   border: 1px solid gray;
   overflow: hidden;
 }

 .display {
   height: 10vh;
   text-align: right;
   background: gray;
   color: white;
   font-size: 2em;
 }
 
 .buttons {
   height: 60vh;
 }

 .button-row {
   display: flex;
   justify-content: space-around;
   width: 100%;
   height: 20%;
 }
 
 .button {
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   outline: 1px solid gray;
   background: #eee;
 }

 .button:active {
   background: gray;
 }



 .operator {
   color: white;
   background: darkorange;
 }

 
 


</style>
