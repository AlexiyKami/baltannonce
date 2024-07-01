<script setup>
import './home-advertisements.scss';

defineProps({ count: { type: Number, required: true } });
const browserWindow = ref(window);
</script>

<template>
  <div class="home__advertisements">
    <h3 class="home__advertisement-title heading_h5">Реклама</h3>
    <div class="home__advertisement">
      <div v-for="n in count" :key="n" class="home__advertisement-block">Реклама</div>
      <div
        class="button button_outlined-icon home__advertisement-arrow-up-btn"
        @click="browserWindow.scrollTo(0, 0)"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 15L12 9L6 15"
            stroke="#BE123C"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
