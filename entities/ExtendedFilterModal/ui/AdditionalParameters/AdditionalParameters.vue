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
            <label class="heading_h6" for="">Новые за:</label>
            <BaseDropdown />
          </div>
          <div class="item-extended-filter__additional">
            <label class="heading_h6" for="">Сортировать по верификации</label>
            <div class="dropdown wide">Не выбрано</div>
          </div>
          <div class="item-extended-filter__additional">
            <label class="heading_h6" for="">Сортировать по разделу</label>
            <div class="dropdown wide">Не выбрано</div>
          </div>
          <div class="item-extended-filter__additional">
            <label class="heading_h6" for="">Часы работы:</label>
            <BaseDropdown class="narrow" />
            <span>-</span>
            <BaseDropdown class="narrow" />
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
            <label class="heading_h6" for="">Анкет с уникальным номером телефона:</label>
            <BaseDropdown />
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
