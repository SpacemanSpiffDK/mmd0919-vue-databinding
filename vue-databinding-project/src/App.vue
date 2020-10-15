<template>
  <div id="app">
    <MasterTemplate />
  </div>
</template>

<script>
import MasterTemplate from './components/MasterTemplate.vue'

export default {
  name: 'App',
  components: { MasterTemplate }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
