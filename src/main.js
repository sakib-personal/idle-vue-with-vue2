import Vue from "vue";
import App from "./App.vue";
import IdleVue from "idle-vue";
import Vuex from "vuex";

Vue.config.productionTip = false;

Vue.use(Vuex);
const store = new Vuex.Store({});

const eventsHub = new Vue();
Vue.use(IdleVue, {
  eventEmitter: eventsHub,
  store,
  idleTime: 300000, // 3 seconds,
  startAtIdle: false
});

new Vue({
  render: (h) => h(App),
  store
}).$mount("#app");
