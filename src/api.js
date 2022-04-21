import axios from 'axios';

const baseURL = 'https://swapi.dev/api/';
const axiosInstance = axios.create({
  baseURL,
});

const api = {
  getVehicles() {
    const url = 'vehicles';
    return axiosInstance.get(url).then(({ data }) => data);
  },

  getVehicleById(vehicleId) {
    const url = `vehicles/${vehicleId}`;
    return axiosInstance.get(url).then(({ data }) => data);
  },
};

export default api;
