<template>
  <div class="vehicle">
    <h1>Vehicle</h1>
    <hr>
    <div>
      <div v-for="(value, key) in vehicle" :key="key">
        <strong>{{ key }}:</strong>&nbsp;<span>{{ Array.isArray(value) ? value.join(' | ') : value }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import titleMixin from '../title-mixin.js';

export default {
  mixins: [titleMixin],

  name: 'Vehicle',

  title() {
    return `Vehicle #${this.$route.params.id} | Star Wars Vehicles`;
  },

  serverPrefetch() {
    return this.getVehicleById();
  },

  computed: {
    vehicle() {
      return this.$store.state.vehicle;
    }
  },

  methods: {
    getVehicleById() {
      const { id } = this.$route.params;
      return this.$store.dispatch('getVehicleById', id);
    }
  },

  mounted() {
    if (!this.vehicle) {
      this.getVehicleById();
    }
  }
}
</script>
