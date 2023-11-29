<script setup>
defineProps({
  concert:{
    type:Object,
    required:true
  }
})

</script>

<template>

    <div class="card" style="width: 18rem;">
      <img src="https://via.placeholder.com/300" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ concert.title }}</h5>
        <p class="card-text">{{
            concert.description
          }}</p>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Op {{concert.time}} - {{concert.date}}</li>
        <li class="list-group-item">{{ concert.location }}</li>
        <li class="list-group-item">{{ concert.organisator }}</li>
      </ul>
      <div class="card-body">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
    </div>

</template>

<style scoped>
  .card{
    cursor:pointer;
  }

  .card:hover{
    transform:scale(1.01);
    box-shadow:0 3px 12px 0 rgba(0,0,0,0.2);
  }
</style>
