<script setup>
import ConcertCard from "@/components/ConcertCard.vue";
import {ref, onMounted} from 'vue'
import ConcertenService from "../../services/ConcertenService";
import {watchEffect} from "vue";
//array van objecten
const concerten = ref(null)
const isLaatstePagina = ref(false)
const concertenPerPagina = ref(3)
const totaalAantalPaginas = ref(0)
const totaalAantalConcerten = ref(0)
const props = defineProps({
  page: Number
})
const updateConcerten = () => {
  ConcertenService.getConcerten(concertenPerPagina.value, props.page)
      .then((response) => {
        concerten.value = response.data;
        isLaatstePagina.value = response.data.length < concertenPerPagina.value;
        totaalAantalPaginas.value = Math.ceil(totaalAantalConcerten.value / concertenPerPagina.value);
      })
      .catch((error) => {
        console.log(error);
      });
};

onMounted(() => {
  ConcertenService.getAllConcerten()
      .then((response) => {
        totaalAantalPaginas.value = Math.ceil(response.data.length / concertenPerPagina.value)
        totaalAantalConcerten.value = response.data.length
      }).catch((error) => {
    console.log(error)
  });
  watchEffect(() => {
    updateConcerten();
  })
})

const selectAantal = (aantal) => {
  concertenPerPagina.value = aantal;
  updateConcerten();
}
</script>

<template>
  <div class="home">
    <div class="dropdown text-center">
      <button id="dropdownMenuButton" aria-expanded="false" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown"
              type="button">
        #Items per pagina
      </button>
      <ul aria-labelledby="dropdownMenuButton" class="dropdown-menu">
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
      <li v-if="page !== 1" class="page-item">
        <RouterLink :to="{name:'concerten',query:{page:page-1}}" class="page-link">Vorige</RouterLink>
      </li>
      <!--      dynamische paginanummers-->
      <li v-for="pageNum in totaalAantalPaginas" :key="pageNum" class="page-item">
        <RouterLink :class="{ 'active': page === pageNum }" :to="{name:'concerten',query:{page:pageNum}}"
                    class="page-link">{{ pageNum }}
        </RouterLink>
      </li>

      <!--        volgende link-->
      <li v-if="!isLaatstePagina" class="page-item">
        <RouterLink :to="{name:'concerten',query:{page:page+1}}" class="page-link">Next</RouterLink>
      </li>
    </ul>
  </div>
</template>
<style></style>
