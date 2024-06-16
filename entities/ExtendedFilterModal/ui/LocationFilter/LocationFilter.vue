<script setup>
import { RowFilterFieldset } from '@/shared/ui';
import { cities } from '@/shared/model/cities';
</script>

<template>
  <div class="extended-filter__container extended-filter__container-location">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Расположение</h4>
      <div class="item-extended-filter__stripe" />
      <div class="item-extended-filter__forms-container">
        <div class="item-extended-filter__forms item-extended-filter__forms-location">
          <RowFilterFieldset
            title="Литва:"
            name="lithuanian-cities"
            type="checkbox"
            :options="cities.lithuanianCities"
          />
          <RowFilterFieldset
            title="Латвия:"
            name="latvian-cities"
            type="checkbox"
            :options="cities.latvianCities"
          />
          <RowFilterFieldset
            title="Эстония:"
            name="estonian-cities"
            type="checkbox"
            :options="cities.estonianCities"
          />
        </div>
      </div>
    </div>
  </div>
</template>
