<script setup>
import './home-section.scss';
import { HomeAdvertisements, HomeCard } from '@/entities/Home';
import { girls, comingSoonGirls, randomGirls } from '../model/girls';
</script>

<template>
  <section class="home">
    <div class="home__container _container">
      <div class="home__all-cards">
        <div class="home__verified-cards">
          <ul class="home__cards-container">
            <HomeCard v-for="(girl, index) in girls" :key="index" :card="girl" />
          </ul>
        </div>
        <div class="home__coming-soon-cards">
          <div class="home__heading">
            <h2 class="home__title heading_h2">
              Скоро в городе
              <span class="home__title-counter heading_h3">(5)</span>
            </h2>
          </div>
          <ul class="home__cards-container">
            <HomeCard v-for="(girl, index) in comingSoonGirls" :key="index" :card="girl" />
          </ul>
        </div>
        <div class="home__random-cards">
          <div class="home__heading">
            <h2 class="home__title heading_h2">
              Кошки в мешке
              <span class="home__title-counter heading_h3">(6)</span>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12.5" cy="12.5" r="10" fill="var(--color-accent-primary)" />
                <path
                  d="M10.5 10.0022C10.6762 9.50136 11.024 9.079 11.4817 8.80998C11.9395 8.54095 12.4777 8.4426 13.001 8.53237C13.5243 8.62213 13.999 8.89421 14.3409 9.30041C14.6829 9.70661 14.87 10.2207 14.8692 10.7517C14.8692 12.2506 12.6209 13 12.6209 13"
                  fill="var(--color-accent-primary)"
                />
                <path
                  d="M10.5 10.0022C10.6762 9.50136 11.024 9.079 11.4817 8.80998C11.9395 8.54095 12.4777 8.4426 13.001 8.53237C13.5243 8.62213 13.999 8.89421 14.3409 9.30041C14.6829 9.70661 14.87 10.2207 14.8692 10.7517C14.8692 12.2506 12.6209 13 12.6209 13M12.6499 16H12.6599"
                  stroke="var(--color-border-primary)"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h2>
          </div>
          <picture class="home__image-block home__image-block_horizontal">
            <source srcset="@/app/assets/images/cats/cat-mobile.jpg" media="(max-width: 430px)" >
            <img src="@/app/assets/images/cats/cat-desktop.jpg" alt="cat-image" >
          </picture>
          <ul class="home__cards-container">
            <HomeCard v-for="(girl, index) in randomGirls" :key="index" :card="girl" />
          </ul>
        </div>
      </div>
      <HomeAdvertisements :count="8" />
    </div>
  </section>
</template>
