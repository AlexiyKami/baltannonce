<script setup>
import { FilterFieldset } from '@/shared/ui';
import { extendedFilters } from '../../model/extended-filters';
</script>

<template>
  <div class="extended-filter__container extended-filter__container-preferences">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Предпочтения</h4>
      <div class="item-extended-filter__stripe" />
      <div class="item-extended-filter__forms-container">
        <div class="item-extended-filter__forms">
          <FilterFieldset
            title="Секс"
            name="sex"
            type="checkbox"
            container="column"
            :options="extendedFilters.sexOptions"
          />
          <FilterFieldset
            title="Стриптиз"
            name="striptease"
            type="checkbox"
            container="column"
            :options="extendedFilters.stripteaseOptions"
          />
        </div>
        <div class="item-extended-filter__forms">
          <FilterFieldset
            title="Массаж"
            name="massage"
            type="checkbox"
            container="column"
            :options="extendedFilters.massageOptions"
          />
          <FilterFieldset
            title="Экстрим"
            name="extreme"
            type="checkbox"
            container="column"
            :options="extendedFilters.extremeOptions"
          />
        </div>
        <div class="item-extended-filter__forms">
          <FilterFieldset
            title="Садо-мазо"
            name="sado-maso"
            type="checkbox"
            container="column"
            :options="extendedFilters.sadoMasoOptions"
          />
          <FilterFieldset
            title="Разное"
            name="different"
            type="checkbox"
            container="column"
            :options="extendedFilters.differentOptions"
          />
        </div>
      </div>
    </div>
  </div>
</template>
