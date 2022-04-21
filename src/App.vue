<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col">
          <Nav />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';

export default {
  name: 'App',

  components: {
    Nav,
  },
};
</script>
