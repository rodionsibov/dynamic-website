<template>
  <div id="app">
    <navigation />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Navigation,
    Footer
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
</style>
