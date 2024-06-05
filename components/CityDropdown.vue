<script setup>
import '../assets/scss/components/city-dropdown.scss';

const isCityMenuOpened = ref(true);
</script>

<template>
  <div class="hero__dropdown-city dropdown-city">
    <div class="dropdown-city__btn" @click="isCityMenuOpened = !isCityMenuOpened">
      <span class="dropdown-city__text button__text">Выберите город</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="dropdown-city__chevron"
        :class="{active: isCityMenuOpened}"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <div class="dropdown-city__body" :class="{active: isCityMenuOpened}">
      <div class="dropdown-city__container lt">
        <span class="dropdown-city__text">Литва</span>
        <ul class="dropdown-city__list">
          <li class="dropdown-city__item">
          <span class="dropdown-city__city-name">Вильнюс</span>
          <span class="dropdown-city__city-count">(0)</span>
          </li>
          <li class="dropdown-city__item">
          <span class="dropdown-city__city-name">Вильнюс</span>
          <span class="dropdown-city__city-count">(0)</span>
          </li>
          <li class="dropdown-city__item">
          <span class="dropdown-city__city-name">Вильнюс</span>
          <span class="dropdown-city__city-count">(0)</span>
          </li>
          <li class="dropdown-city__item">
          <span class="dropdown-city__city-name">Вильнюс</span>
          <span class="dropdown-city__city-count">(0)</span>
          </li>
          <li class="dropdown-city__item">
          <span class="dropdown-city__city-name">Вильнюс</span>
          <span class="dropdown-city__city-count">(0)</span>
          </li>
        </ul>
      </div>
      <div class="dropdown-city__container lv">
        <span class="dropdown-city__text">Латвия</span>
        <ul class="dropdown-city__list">
          <li class="dropdown-city__item">
          <span class="dropdown-city__city-name">Вильнюс</span>
          <span class="dropdown-city__city-count">(0)</span>
          </li>
          <li class="dropdown-city__item">
          <span class="dropdown-city__city-name">Вильнюс</span>
          <span class="dropdown-city__city-count">(0)</span>
          </li>
          <li class="dropdown-city__item">
          <span class="dropdown-city__city-name">Вильнюс</span>
          <span class="dropdown-city__city-count">(0)</span>
          </li>
          <li class="dropdown-city__item">
          <span class="dropdown-city__city-name">Вильнюс</span>
          <span class="dropdown-city__city-count">(0)</span>
          </li>
        </ul>
      </div>
      <div class="dropdown-city__container ee">
        <span class="dropdown-city__text">Эстония</span>
        <ul class="dropdown-city__list">
          <li class="dropdown-city__item">
          <span class="dropdown-city__city-name">Вильнюс</span>
          <span class="dropdown-city__city-count">(0)</span>
          </li>
          <li class="dropdown-city__item">
          <span class="dropdown-city__city-name">Вильнюс</span>
          <span class="dropdown-city__city-count">(0)</span>
          </li>
          <li class="dropdown-city__item">
          <span class="dropdown-city__city-name">Вильнюс</span>
          <span class="dropdown-city__city-count">(0)</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
