<template>
  <main>
    <h1>Vue Popups</h1>
    <button @click="togglePopup('buttonTrigger')">Open Popup</button>
    
    <Popup v-if="popupTriggers.buttonTrigger" :toggle-popup="() => togglePopup('buttonTrigger')">
      <h2>My Button Popup</h2>
    </Popup>
     <Popup v-if="popupTriggers.timedTrigger" :toggle-popup="() => togglePopup('timedTrigger')">
      <h2>My Timed Popup</h2>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque perferendis unde corrupti similique, asperiores rem distinctio. Quisquam eligendi praesentium recusandae eius, officiis temporibus quas architecto rem consequuntur sunt dolor nostrum.
      </p>
    </Popup>
  </main>
</template>

<script>
import { ref } from "vue";
import Popup from "./components/Popup";

export default {
  setup() {
    const popupTriggers = ref({
      buttonTrigger: false,
      timedTrigger: false,
    });

    const togglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }

  setTimeout(() => {
    popupTriggers.value.timedTrigger = true
  }, 3000)

    return {
      Popup,
      popupTriggers,
      togglePopup
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
