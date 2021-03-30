<template>
  <div>
    <section class="section text-center">
      <div class="container">
        <img
          alt="Vue logo"
          class="rounded-circle avatar"
          src="https://avatars.githubusercontent.com/u/60054035?v=4"
        />
        <h1>Front-End Developer</h1>
        <p>This is a fun project I built while learning vue.js and bootstrap</p>
        <a href="#contact"
          type="button"
          class="btn btn-primary btn-lg"
          data-toggle="modal"
          data-target=".bd-example-modal-lg"
        >
          Contact
        </a>
      </div>
    </section>
  </div>

  <section class="protfolio text-center">
    <h1>Portfolio</h1>
    <p>These are suppose to be sample projects</p>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <div class="card">
            <div class="card-head">
              <img
                alt="Vue logo"
                class="rounded-circle img-custome"
                src="https://cdn.mos.cms.futurecdn.net/wH5y2PkWhCxqKBje8rBp5e.jpg"
              />
              <h2>web project</h2>
            </div>
            <hr />
            <div class="card-body">
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
              <button type="button" class="btn btn-outline-secondary">
                More
              </button>
            </div>
          </div>
          <br />
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-head">
              <img
                alt="Vue logo"
                class="rounded-circle img-custome"
                src="https://i.pinimg.com/originals/4a/70/56/4a70563234301578c158dc142384a1c3.png"
              />
              <h2>web project</h2>
            </div>
            <hr />
            <div class="card-body">
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
              <button type="button" class="btn btn-outline-secondary">
                More
              </button>
            </div>
          </div>
          <br />
        </div>
        <div class="col-md-4">
          <div class="card">
            <div class="card-head">
              <img
                alt="Vue logo"
                class="rounded-circle img-custome"
                src="https://cdn.mos.cms.futurecdn.net/wH5y2PkWhCxqKBje8rBp5e.jpg"
              />
              <h2>web project</h2>
            </div>
            <hr />
            <div class="card-body">
              <p>
                Donec sed odio dui. Etiam porta sem malesuada magna mollis
                euismod. Nullam id dolor id nibh ultricies vehicula ut id elit.
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Praesent commodo cursus magna.
              </p>
              <button type="button" class="btn btn-outline-secondary">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- modal for contact -->
  <section id="contact" class="">
    <div
      class="modal fade bd-example-modal-lg"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myLargeModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content"></div>
      </div>
    </div>
  </section>

  <contact />
</template>

<script>
import Contact from "../components/Contact.vue";
// @ is an alias to /src

export default {
  name: "Lander",
  components: {
    Contact,
  },
  
};
</script>

<style scoped>


.section {
  padding-top: 5%;
  padding-bottom: 10%;
}

.protfolio {
  background-color: #34345238;
  padding-top: 8%;
  padding-bottom: 15%;
  /* padding:15% */
}

.img-custome {
  width: 140px;
  height: 140px;
  margin: 40px 0 20px 0;
}

.avatar {
  margin-bottom: 10px;
  width: 220px;
}
</style>