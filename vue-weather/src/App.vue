<template>
 <div id="app">
   <main>
     <div class="search-box">
       <input type="text" class="search-bar" placeholder="Search...">
     </div>
   </main>
 </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      api_key: 'fdf8dsf7',

    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url(https://picsum.photos/800);
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

main {
  min-height: 100vh;
  padding: 30px;
  background-image: linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.75))
}

.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  color: #313131;
  font-size: 20px;
  appearance: none;
  border: none;
  outline: none;
  background: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 0 16px 0 16px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 16px 0 16px 0;

}

</style>
