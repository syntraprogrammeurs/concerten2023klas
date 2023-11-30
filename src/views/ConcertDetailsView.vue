<script setup>
  import {ref,onMounted} from 'vue'
  import ConcertenService from "../../services/ConcertenService";
  const concert = ref(null)
  const id=ref(1)   // "id":1
  onMounted(()=>{
    ConcertenService.getConcert(id.value)
        .then((response)=>{
          concert.value = response.data
        })
        .catch((error)=>{
          console.log(error)
        })
  })
</script>
<template>
  <div v-if="concert">
    <h1>{{concert.title}}</h1>
    <p>{{concert.time}} - {{concert.date}} - {{concert.location}}</p>
    <p>{{concert.description}}</p>
  </div>
</template>