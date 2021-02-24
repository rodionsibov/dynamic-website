<template>
  <div id="app">
    <h1>Todo application</h1>
    <hr>

    <router-view />
  </div>
</template>

<script>
 import TodoList from "@/components/TodoList"
 import AddTodo from "@/components/AddTodo"

 export default {
   name: 'App',
   data() {
     return {
       todos: []
     }
   },
   mounted() {
     fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
       .then(res => res.json())
       .then(data => {
	 this.todos = data
       })
   },
   methods: {
     removeTodo(id) {
       this.todos = this.todos.filter(t => t.id !== id)
     },
     addTodo(todo) {
       this.todos.push(todo)
     }
   },
   components: {
     TodoList,
     AddTodo
   }
 }
</script>

<style>
 

 #app {
   font-family: Avenir, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: black;
   margin-top: 60px;
   padding: 0 30px;
 }

 
 body {
   background-color: skyblue;
 }
 
 hr {
   opacity: 0.2;
 }
</style>
