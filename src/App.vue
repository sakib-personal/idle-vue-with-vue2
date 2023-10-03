<template>
  <div id="app">
    <ModalIdle v-if="isIdle" />
    <p>Is it Idle? - {{ isIdle }}</p>
  </div>
</template>

<script>
import ModalIdle from "./components/ModalIdle";
export default {
  name: "App",
  components: {
    ModalIdle,
  },

  computed: {
    isIdle() {
      return this.$store.state.idleVue.isIdle;
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
