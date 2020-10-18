<template>
  <div id="photos">
     <img v-for="(item, index) in data" :key="index" :src="item.thumbnailUrl" :alt="item.title" :title="item.title">
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'PhotosTemplate',
  data() {
    return {
      data: []
    };
  },
  mounted() {
    axios.get("https://jsonplaceholder.typicode.com/photos/")
      .then(response => {
        this.data = [...response.data].slice(0, 25);
        // console.log(this.data); // let's us see the data in console, for easy output selection
      })
      .catch(err => {
       console.log('Error: ' + err);
      });
  }
}
</script>

<style scoped>
  img {
    display: inline-block;
    margin: 0;
    padding: 0;
    width: 20%;
  }
  #photos {
    line-height: 0;
  }
  @media (max-width: 768px){
   img {
      width: 25%;
    } 
  }
  @media (max-width: 640px){
   img {
      width: 33.333333%;
    } 
  }
</style>