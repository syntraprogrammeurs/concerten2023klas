<script setup>
   import ConcertCard from "@/components/ConcertCard.vue";
   import {ref, onMounted} from 'vue'
   import ConcertenService from "../../services/ConcertenService";
   import {watchEffect} from "vue";
   //array van objecten
   const concerten = ref(null)
   const isLaatstePagina = ref(false)
   const concertenPerPagina = ref(3)
   const totaalAantalPaginas= ref(0)
   const totaalAantalConcerten = ref(0)
   const props=defineProps({
     page:Number
   })

   onMounted(()=>{
     ConcertenService.getAllConcerten()
         .then((response)=>{
           totaalAantalPaginas.value = Math.ceil(response.data.length / concertenPerPagina.value)
           totaalAantalConcerten.value = response.data.length
         }).catch((error)=> {
       console.log(error)
     });
     watchEffect(()=>{
       ConcertenService.getConcerten(concertenPerPagina.value,props.page)
           .then((response)=>{
             concerten.value = response.data
             isLaatstePagina.value = response.data.length < concertenPerPagina.value
           }).catch((error)=>{
         console.log(error)
       })
     })

   })

   const selectAantal = (aantal)=>{
    concertenPerPagina.value = aantal;
    /* props.page = 1; // Reset de huidige pagina naar 1*/

     ConcertenService.getConcerten(concertenPerPagina.value, props.page)
         .then((response) => {
           concerten.value = response.data;
           isLaatstePagina.value = response.data.length < concertenPerPagina.value;
           totaalAantalPaginas.value = Math.ceil(totaalAantalConcerten.value / concertenPerPagina.value);
         })
         .catch((error) => {
           console.log(error);
         });
      }
</script>

<template>
  <div class="home">
    <div class="dropdown text-center">
      <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
        #Items per pagina
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <li v-for="items in totaalAantalConcerten" :key="items">
          <a class="dropdown-item" href="#" @click.prevent="selectAantal(items)">
            {{ items }}
          </a>
        </li>
      </ul>
    </div>
    <div id="wrapper" class="d-flex justify-content-evenly my-2">
      <ConcertCard v-for="concert in concerten" :key="concert.id" :concert="concert"/>
    </div>
    <ul class="pagination d-flex justify-content-center">
      <!--        vorige link-->
      <li class="page-item" v-if="page !== 1">
        <RouterLink class="page-link"  :to="{name:'concerten',query:{page:page-1}}">Vorige</RouterLink>
      </li>
<!--      dynamische paginanummers-->
      <li class="page-item" v-for="pageNum in totaalAantalPaginas" :key="pageNum">
        <RouterLink class="page-link" :class="{ 'active': page === pageNum }"
          :to="{name:'concerten',query:{page:pageNum}}">{{pageNum}}</RouterLink>
      </li>

      <!--        volgende link-->
      <li class="page-item" v-if="!isLaatstePagina">
        <RouterLink class="page-link" :to="{name:'concerten',query:{page:page+1}}">Next</RouterLink>
      </li>
    </ul>
  </div>
</template>
<style></style>
