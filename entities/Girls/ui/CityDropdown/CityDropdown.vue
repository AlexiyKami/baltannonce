<script setup>
import './city-dropdown.scss';
import { DropdownItemWithCount } from '@/shared/ui';

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
          <DropdownItemWithCount title="Вильнюс" count="0" />
          <DropdownItemWithCount title="Каунас" count="0" />
          <DropdownItemWithCount title="Клайпеда" count="0" />
          <DropdownItemWithCount title="Шяуляй" count="0" />
          <DropdownItemWithCount title="Паневежис" count="0" />
        </ul>
      </div>
      <div class="dropdown-city__container lv">
        <span class="dropdown-city__text">Латвия</span>
        <ul class="dropdown-city__list">
          <DropdownItemWithCount title="Рига" count="0" />
          <DropdownItemWithCount title="Юрмала" count="0" />
          <DropdownItemWithCount title="Даугавпилс" count="0" />
          <DropdownItemWithCount title="Лиепая" count="0" />
        </ul>
      </div>
      <div class="dropdown-city__container ee">
        <span class="dropdown-city__text">Эстония</span>
        <ul class="dropdown-city__list">
          <DropdownItemWithCount title="Таллин" count="0" />
          <DropdownItemWithCount title="Тарту" count="0" />
          <DropdownItemWithCount title="Нарва" count="0" />
        </ul>
      </div>
    </div>
  </div>
</template>
