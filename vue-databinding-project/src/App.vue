<template>
  <div id="app">
    <MasterTemplate />
  </div>
</template>

<script>
import MasterTemplate from './components/MasterTemplate.vue';

export default {
  name: 'App',
  components: { MasterTemplate },
   data () {
    return {
      info: null
    }
  },
}
</script>

