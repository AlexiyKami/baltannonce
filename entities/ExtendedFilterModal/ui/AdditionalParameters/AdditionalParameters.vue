<script setup>
import { BaseDropdown, RangeInput } from '@/shared/ui';
</script>

<template>
  <div class="extended-filter__container extended-filter__container-additional">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Дополнительные параметры</h4>
      <div class="item-extended-filter__stripe" />
      <div class="item-extended-filter__forms-container">
        <div class="item-extended-filter__forms">
          <div class="item-extended-filter__additional">
            <h6 class="heading_h6">Новые за:</h6>
            <BaseDropdown>-</BaseDropdown>
          </div>
          <div class="item-extended-filter__additional">
            <h6 class="heading_h6">Сортировать по верификации</h6>
            <BaseDropdown class="wide">Не выбрано</BaseDropdown>
          </div>
          <div class="item-extended-filter__additional">
            <h6 class="heading_h6">Сортировать по разделу</h6>
            <BaseDropdown class="wide">Не выбрано</BaseDropdown>
          </div>
          <div class="item-extended-filter__additional">
            <h6 class="heading_h6">Часы работы:</h6>
            <BaseDropdown class="narrow">-</BaseDropdown>
            <span>-</span>
            <BaseDropdown class="narrow">-</BaseDropdown>
          </div>
          <div class="item-extended-filter__additional">
            <RangeInput name="accepts-ages-from" title="Принимает в возрасте от" />
          </div>
          <div class="item-extended-filter__additional">
            <label class="heading_h6" for="">Способ связи:</label>
            <div class="item-extended-filter__row">
              <input id="telegramm" type="checkbox" name="contacts" >
              <label for="telegramm">Telegram</label>
            </div>
            <div class="item-extended-filter__row">
              <input id="whatsappp" type="checkbox" name="contacts" >
              <label for="whatsappp">Whatsapp</label>
            </div>
          </div>
        </div>
        <div class="item-extended-filter__forms">
          <div class="item-extended-filter__additional">
            <h6 class="heading_h6">Анкет с уникальным номером телефона:</h6>
            <BaseDropdown>-</BaseDropdown>
          </div>
          <div class="item-extended-filter__row">
            <input id="questionary-video" type="checkbox" name="" >
            <label for="questionary-video">Анкеты с видео</label>
          </div>
          <div class="item-extended-filter__row">
            <input id="smoking1" type="checkbox" name="" >
            <label for="smoking1">Курит</label>
          </div>
          <div class="item-extended-filter__row">
            <input id="drinking" type="checkbox" name="" >
            <label for="drinking">Пьет алкоголь</label>
          </div>
          <div class="item-extended-filter__row">
            <input id="friends" type="checkbox" name="" >
            <label for="friends">Подружки</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
