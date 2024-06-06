<script setup>
import '../assets/scss/components/city-dropdown.scss';

defineProps(["isCityMenuOpened"]);
</script>

<template>

  <div class="hero__dropdown-city dropdown-city">

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
