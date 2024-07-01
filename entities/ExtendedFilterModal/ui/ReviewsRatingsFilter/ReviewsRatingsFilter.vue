<script setup>
import { BaseDropdown } from '@/shared/ui';
</script>

<template>
  <div class="extended-filter__container extended-filter__container-reviews">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Отзывы и оценки</h4>
      <div class="item-extended-filter__stripe" />
      <div class="item-extended-filter__forms-container">
        <div class="item-extended-filter__forms">
          <div class="item-extended-filter__reviews">
            <label class="heading_h6" for="">Отзывов, не менее:</label>
            <BaseDropdown>-</BaseDropdown>
          </div>
          <div class="item-extended-filter__reviews">
            <label class="heading_h6" for="">С оценками пользователей:</label>
            <div class="button button_secondary button_small">Выбрать</div>
          </div>
        </div>
        <div class="item-extended-filter__forms">
          <div class="item-extended-filter__reviews">
            <label class="heading_h6" for="">С оценкой не менее:</label>
            <BaseDropdown>-</BaseDropdown>
          </div>
          <div class="item-extended-filter__reviews">
            <label class="heading_h6" for="">С новыми отзывами за последние:</label>
            <BaseDropdown>-</BaseDropdown>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
