<template>
  <div class="vehicles">
    <h1>Vehicles</h1>
    <hr>
    <div>
      <div v-for="vehicle in vehicles" :key="vehicle.url">
        <div><strong>Name:</strong>&nbsp;<span>{{ vehicle.name }}</span></div>
        <div><strong>Model:</strong>&nbsp;<span>{{ vehicle.model }}</span></div>
        <div><strong>Passengers:</strong>&nbsp;<span>{{ vehicle.passengers }}</span></div>
        <div><strong>Manufacturer:</strong>&nbsp;<span>{{ vehicle.manufacturer }}</span></div>
        <div><router-link :to="{ name: 'vehicle', params: { id: vehicle.url.replace(/\D/g, '') } }">View more ...</router-link></div>
      </div>
    </div>
  </div>
</template>

<script>
import titleMixin from '../title-mixin.js';

export default {
  mixins: [titleMixin],

  name: 'Vehicles',

  serverPrefetch() {
    return this.getVehicles();
  },

  title: 'Vehicles | Star Wars Vehicles',

  computed: {
    vehicles() {
      return this.$store.state.vehicles;
    }
  },

  methods: {
    getVehicles() {
      return this.$store.dispatch('getVehicles');
    },
  },

  mounted() {
    if (!this.vehicles.length) {
      this.getVehicles();
    }
  }
};
</script>
