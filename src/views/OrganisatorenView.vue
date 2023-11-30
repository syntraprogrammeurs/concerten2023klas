<script setup>
import {ref, onMounted} from 'vue'
import ConcertenService from "../../services/ConcertenService";

//array van objecten
const concerten = ref(null)

onMounted(()=>{
  ConcertenService.getConcerten()
      .then((response)=>{
        concerten.value = response.data
      }).catch((error)=>{
    console.log(error)
  })
})
</script>
<template>

  <div class="position-absolute top-50 start-50 translate-middle alert alert-warning">

    <ul class="list-group" v-for="concert in concerten" :key="concert.id">
      <li  class="list-group-item hover-effect">
        <RouterLink class="text-decoration-none text-secondary" :to="{name:'concert-details', params:{id:concert.id}}">
          {{concert.organisator}}
        </RouterLink>

      </li>
    </ul>
  </div>


</template>
<style scoped>
@keyframes wobble {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
}

.hover-effect:hover {
  background-color: #ffe69c;
  color: #212529;
  cursor: pointer;
  /* Add the wobble animation */
  animation: wobble 0.5s ease;
}

</style>