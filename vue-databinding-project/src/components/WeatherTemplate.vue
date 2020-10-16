<template>
  <div>
    <div v-text="data"></div>
  </div>
</template>

<script>
export default {
  name: 'WeatherTemplate',
  data() {
    return {
    };
  },
  mounted: function () {
    this.$nextTick(function () {
      
      let data = {};
      function getData(){
        const xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            try {
              data = JSON.parse(this.responseText);
              // outputResult(data);
            } catch (error){
              errorMessage(`Error parsing JSON: <span class="errorMsg">${error}</span>`);
            }
          }
          if (this.readyState == 4 && this.status > 400) {
            errorMessage("An error occured getting the data, please try again later"); 
          }
        };
        xhttp.open("GET", `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=braben`, true);
        xhttp.send();
      }
      function errorMessage(str) {
        console.log('Error:' + str);
      }
      getData();
    });
  },
}
</script>