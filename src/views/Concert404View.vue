<script setup>
defineProps({
  resource:{
    type:String,
    required:true,
    default:'page'
  }
})

</script>
<template>
<div class="position-absolute top-50 start-50 translate-middle alert alert-danger text-white text-center">
  <h1>Woops!</h1>
  <h2>{{resource }} not found</h2>
  <RouterLink class="btn btn-danger mt-2" :to="{name:'concerten'}">Back to concerts</RouterLink>
</div>
</template>