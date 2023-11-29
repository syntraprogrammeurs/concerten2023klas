<script setup>
   import ConcertCard from "@/components/ConcertCard.vue";
   import {ref, onMounted} from 'vue'
   import ConcertenService from "../../services/ConcertenService";
   //array van objecten
   const concerten = ref(null)

   onMounted(()=>{
     ConcertenService.getConcerten()
         .then((response)=>{
           concerten.value = response.data.concerten
         }).catch((error)=>{
           console.log(error)
     })
   })

</script>

<template>
  <div class="home">
    <div id="wrapper" class="d-flex justify-content-evenly my-2">
      <ConcertCard v-for="concert in concerten" :key="concert.id" :concert="concert"/>
    </div>
  </div>
</template>
