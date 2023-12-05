<script setup>

defineProps({
  concert:{
    required:true,
  }
})

</script>
<template>
  <p>{{ concert.title }} geregistreerd</p>
</template>