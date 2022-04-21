import Vue from 'vue';
import createRouter from './router/router.js';
import createStore from './store/store.js';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function createApp() {
  const router = createRouter();
  const store = createStore();

  const app = new Vue({
    router,
    store,
    render: (h) => h(App)
  });

  return { app, router, store };
}
