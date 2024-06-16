<script setup>
import './city-dropdown.scss';
import { DropdownItemWithCount } from '@/shared/ui';
import { cities } from '@/shared/model/cities';

defineProps({ isCityDropdownOpened: Boolean });
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
            v-for="city in cities.lithuanianCities"
            :key="city.id"
            :title="city.title"
            :count="city.count"
          />
        </ul>
      </div>
      <div class="dropdown-city__container lv">
        <span class="dropdown-city__text">Латвия</span>
        <ul class="dropdown-city__list">
          <DropdownItemWithCount
            v-for="city in cities.latvianCities"
            :key="city.id"
            :title="city.title"
            :count="city.count"
          />
        </ul>
      </div>
      <div class="dropdown-city__container ee">
        <span class="dropdown-city__text">Эстония</span>
        <ul class="dropdown-city__list">
          <DropdownItemWithCount
            v-for="city in cities.estonianCities"
            :key="city.id"
            :title="city.title"
            :count="city.count"
          />
        </ul>
      </div>
    </div>
  </div>
</template>
