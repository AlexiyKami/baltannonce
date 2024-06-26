<script setup>
import { FilterFieldset } from '@/shared/ui';
defineProps({
  filters: { type: Object, required: true },
  gender: { type: String, required: true }
});
</script>

<template>
  <div class="extended-filter__container extended-filter__container-preferences">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Предпочтения</h4>
      <div class="item-extended-filter__stripe" />
      <div class="item-extended-filter__forms-container">
        <div class="item-extended-filter__forms">
          <FilterFieldset
            v-if="gender === 'men'"
            title="Тип секс услуг: *"
            name="type-of-sex-services"
            type="checkbox"
            container="row"
            :options="filters.typeOfSexServices"
          />
          <FilterFieldset
            title="Секс"
            name="sex"
            type="checkbox"
            container="column"
            :options="filters.sexOptions"
          />
          <FilterFieldset
            title="Стриптиз"
            name="striptease"
            type="checkbox"
            container="column"
            :options="filters.stripteaseOptions"
          />
        </div>
        <div class="item-extended-filter__forms">
          <FilterFieldset
            title="Массаж"
            name="massage"
            type="checkbox"
            container="column"
            :options="filters.massageOptions"
          />
          <FilterFieldset
            title="Экстрим"
            name="extreme"
            type="checkbox"
            container="column"
            :options="filters.extremeOptions"
          />
        </div>
        <div class="item-extended-filter__forms">
          <FilterFieldset
            title="Садо-мазо"
            name="sado-maso"
            type="checkbox"
            container="column"
            :options="filters.sadoMasoOptions"
          />
          <FilterFieldset
            title="Разное"
            name="different"
            type="checkbox"
            container="column"
            :options="filters.differentOptions"
          />
        </div>
      </div>
    </div>
  </div>
</template>
