<script setup>
import './city-dropdown.scss';
import { DropdownItemWithCount } from '@/shared/ui';
import { lithuanianCities, latvianCities, estonianCities } from '../../model/cities';

defineProps(['isCityDropdownOpened']);
</script>

<template>
  <div class="hero__dropdown-city dropdown-city">
    <div
      class="dropdown-city__body"
      :class="{
        active: isCityDropdownOpened
      }"
    >
      <div class="dropdown-city__container lt">
        <span class="dropdown-city__text">Литва</span>
        <ul class="dropdown-city__list">
          <DropdownItemWithCount
            v-for="city in lithuanianCities"
            :key="city.title"
            :title="city.title"
            :count="city.count"
          />
        </ul>
      </div>
      <div class="dropdown-city__container lv">
        <span class="dropdown-city__text">Латвия</span>
        <ul class="dropdown-city__list">
          <DropdownItemWithCount
            v-for="city in latvianCities"
            :key="city.title"
            :title="city.title"
            :count="city.count"
          />
        </ul>
      </div>
      <div class="dropdown-city__container ee">
        <span class="dropdown-city__text">Эстония</span>
        <ul class="dropdown-city__list">
          <DropdownItemWithCount
            v-for="city in estonianCities"
            :key="city.title"
            :title="city.title"
            :count="city.count"
          />
        </ul>
      </div>
    </div>
  </div>
</template>
