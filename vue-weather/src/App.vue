<template>
  <div id="app" :class="{ 'warm': weather.registered.age < 5 }">
    <main>
      <div class="search-box">
        <input
          v-model="query"
          @keypress.enter="fetchWeather"
          type="text"
          class="search-bar"
          placeholder="Search..."
        />
      </div>
      <div class="weather-wrap">
        <div class="location-box">
          <div class="location">{{ weather.location.city }}, {{ weather.location.country }}</div>
          <div class="date">{{ weather.location.coordinates.latitude }} {{ weather.location.coordinates.longitude }}</div>
        </div>

        <div class="weather-box">
          <div class="temp">{{ weather.registered.age }}&deg;C</div>
          <div class="weather">{{ weather.nat }}</div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      api_key: "",
      url_base: "https://randomuser.me/api/",
      query: "",
      weather: [],
    };
  },
  methods: {
    async fetchWeather() {
      // const res = await fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
      const res = await fetch(`${this.url_base}`);
      const { results } = await res.json();
      console.log(results[0]);
      return results[0];
    },
  },
  async created() {
    this.weather = await this.fetchWeather();
  },
};
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

#app.warm {
  background: red;
}

main {
  min-height: 100vh;
  padding: 30px;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
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

.location-box .location {
  color: white;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  text-shadow: 1px 3px rgba(0, 0, 0, 0.25);
}

.location-box .date {
  color: white;
  font-size: 20px;
  text-align: center;
  font-style: italic;
  margin-top: 5px;
}

.weather-box {
  text-align: center;
}

.weather-box .temp {
  display: inline-block;
  padding: 10px 25px;
  color: white;
  font-size: 102px;
  font-weight: bold;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 16px;
  margin: 30px 0;
  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .weather {
  color: white;
  font-size: 48px;
  font-weight: bold;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}
</style>
