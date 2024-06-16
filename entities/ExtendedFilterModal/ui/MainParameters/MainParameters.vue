<script setup>
import { RangeInput } from '@/shared/ui';
import { extendedFilters } from '../../model/extended-filters';
</script>

<template>
  <div class="extended-filter__container">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Основные параметры</h4>
      <div class="item-extended-filter__stripe" />
      <RangeInput name="years-old" title="Возраст">лет</RangeInput>
      <RangeInput name="height" title="Рост">см</RangeInput>
      <RangeInput name="weight" title="Вес">кг</RangeInput>
    </div>
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Расценки</h4>
      <div class="item-extended-filter__stripe" />
      <RangeInput name="1hour" title="1 час" />
      <RangeInput name="2hour" title="2 часа" />
      <RangeInput name="night" title="Ночь" />
    </div>
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Место встречи</h4>
      <div class="item-extended-filter__stripe" />
      <div
        v-for="option in extendedFilters.meetingPointOptions"
        :key="option.id"
        class="item-extended-filter__form"
      >
        <input :id="option.id" type="checkbox" name="meeting-point" >
        <label :for="option.id">{{ option.title }}</label>
      </div>
    </div>
  </div>
</template>
