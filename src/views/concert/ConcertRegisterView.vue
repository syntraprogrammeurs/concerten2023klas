<script setup>
import {inject, onBeforeMount, ref} from 'vue';
const myAlert = inject('myAlertVar');
const isGeregistreerd = ref(false);
const props=defineProps({
  concert:{
    required:true,
  }
})
const register =()=>{
  if(isGeregistreerd.value){
    myAlert.alertBericht = 'U bent AL geregistreerd voor ' + props.concert.title
  }else{
    myAlert.alertBericht = 'U heeft zich geregistreerd voor ' + props.concert.title
    isGeregistreerd.value=true
  }
}
onBeforeMount(()=>{
  myAlert.alertBericht
})

</script>
<template>
  <div class="alert alert-success" v-if="myAlert.alertBericht">
    {{myAlert.alertBericht}}
  </div>
  <p>{{ concert.title }} hier registreren</p>
  <button class="btn btn-success" @click="register">Register</button>
</template>