<script setup>
import './home-advertisements.scss';

defineProps({ count: { type: Number, required: true } });
</script>

<template>
  <div class="home__advertisements">
    <h3 class="home__advertisement-title heading_h5">Реклама</h3>
    <div class="home__advertisement">
      <div v-for="n in count" :key="n" class="home__advertisement-block">Реклама</div>
      <!-- <div class="home__advertisement-block">Реклама</div>
      <div class="home__advertisement-block">Реклама</div>
      <div class="home__advertisement-block">Реклама</div>
      <div class="home__advertisement-block">Реклама</div>
      <div class="home__advertisement-block">Реклама</div>
      <div class="home__advertisement-block">Реклама</div>
      <div class="home__advertisement-block">Реклама</div> -->
    </div>
  </div>
</template>
