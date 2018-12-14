<template>
  <div id="app">
    <router-view></router-view>
    <tips></tips>
  </div>
</template>

<script>
import tips from "./components/modal/TipsComponent";
export default {
  name: "App",
  components: { tips }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
