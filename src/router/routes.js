import Vehicles from '../pages/Vehicles.vue';

export default [
  {
    path: '/',
    name: 'vehicles',
    component: Vehicles
  },
  {
    path: '/:id',
    name: 'vehicle',
    component: () => import('../pages/Vehicle.vue')
  },
];
