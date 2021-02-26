<template>
  <main class="calculator">
    <div class="display">
      {{display}}
    </div>
    <div class="buttons">
      <div class="button-row" v-for="row in buttonRows">
	<div
	  @click="buttonClick(button)"
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
     buttonClick(button) {
       if (button.type == 'number') {
	 this.display += button.text;
       }
     }
   },
   data: () => ({
     display: '',
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
	   type: 'operator',
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
