<template>
  <div>
    <div v-text="info"></div>
  </div>
</template>

<script>
export default {
  name: 'WeatherTemplate',
  data() {
    return {
      info: 'test'
    }
  },
}
</script>