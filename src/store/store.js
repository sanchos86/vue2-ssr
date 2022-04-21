import Vue from 'vue';
import Vuex from 'vuex';
import api from '../api.js';

Vue.use(Vuex);

export default function createStore() {
  return new Vuex.Store({
    state: () => ({
      vehicles: [],
      vehicle: null
    }),

    mutations: {
      setVehicles: (state, vehicles) => {
        state.vehicles = vehicles;
      },
      setVehicle: (state, vehicle) => {
        state.vehicle = vehicle;
      }
    },

    actions: {
      getVehicles: async ({ commit }) => {
        const { results: vehicles } = await api.getVehicles();
        commit('setVehicles', vehicles);
      },
      getVehicleById: async ({ commit }, vehicleId) => {
        const vehicle = await api.getVehicleById(vehicleId);
        commit('setVehicle', vehicle);
      }
    }
  });
};
