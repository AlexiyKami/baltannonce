<script setup>
import { HomeAdvertisements, HomeCard } from '@/entities/Home';
import { escortMen, strippersMen } from '../model/men';

const menStore = useMenStore();
</script>

<template>
  <section class="home">
    <div class="home__container _container">
      <div class="home__tab-menu">
        <div class="home__tabs-btns">
          <div
            class="home__tab-btn home__tab-btn_strippers"
            :class="{
              active: menStore.currentTab === 'strippers'
            }"
            @click="menStore.setCurrentTab('strippers')"
          >
            <h2 class="home__tab-title">
              Стриптизеры
              <span class="home__title-counter">({{ strippersMen.length }})</span>
            </h2>
          </div>
          <div
            class="home__tab-btn home__tab-btn_escort"
            :class="{
              active: menStore.currentTab === 'escort'
            }"
            @click="menStore.setCurrentTab('escort')"
          >
            <h2 class="home__tab-title">
              Эскорт
              <span class="home__title-counter">({{ escortMen.length }})</span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="home__title-icon"
              >
                <circle cx="12.5" cy="12.5" r="10" fill="currentColor" />
                <path
                  d="M10.5 10.0022C10.6762 9.50136 11.024 9.079 11.4817 8.80998C11.9395 8.54095 12.4777 8.4426 13.001 8.53237C13.5243 8.62213 13.999 8.89421 14.3409 9.30041C14.6829 9.70661 14.87 10.2207 14.8692 10.7517C14.8692 12.2506 12.6209 13 12.6209 13"
                  fill="currentColor"
                />
                <path
                  d="M10.5 10.0022C10.6762 9.50136 11.024 9.079 11.4817 8.80998C11.9395 8.54095 12.4777 8.4426 13.001 8.53237C13.5243 8.62213 13.999 8.89421 14.3409 9.30041C14.6829 9.70661 14.87 10.2207 14.8692 10.7517C14.8692 12.2506 12.6209 13 12.6209 13M12.6499 16H12.6599"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="home__title-icon-text"
                />
              </svg>
            </h2>
          </div>
        </div>
        <div
          v-if="menStore.currentTab === 'strippers'"
          class="home__all-cards home__cards-in-tab home__cards-in-tab_strippers"
        >
          <ul class="home__cards-container">
            <HomeCard v-for="(men, index) in strippersMen" :key="index" :card="men" />
          </ul>
        </div>
        <div
          v-if="menStore.currentTab === 'escort'"
          class="home__all-cards home__cards-in-tab home__cards-in-tab_escort"
        >
          <ul class="home__cards-container">
            <HomeCard v-for="(men, index) in escortMen" :key="index" :card="men" />
          </ul>
        </div>
      </div>
      <HomeAdvertisements :count="4" />
    </div>
  </section>
</template>
