<script setup>
import './form-working-hours.scss';
</script>

<template>
  <div
    id="info-container-working-hours"
    class="form-section__info-container info-container-form-section"
  >
    <div
      class="info-container-form-section__heading info-container-form-section__heading-working-hours"
    >
      <h3 class="info-container-form-section__title">Рабочие часы</h3>
      <h4 class="info-container-form-section__working-hours-subtitle">
        (Часовой пояс:
        <span class="info-container-form-section__subtitle-span"
          >GMT+03:00 - Литва, Латвия, Эстония)</span
        >
      </h4>
    </div>
    <div class="info-container-form-section__working-hours-content">
      <div class="info-container-form-section__working-hours-row">
        <h4 class="info-container-form-section__row-title">Понедельник</h4>
        <p class="info-container-form-section__row-text">13:00 - 16:00</p>
      </div>
      <div class="info-container-form-section__working-hours-row">
        <h4 class="info-container-form-section__row-title">Вторник</h4>
        <p class="info-container-form-section__row-text">13:00 - 16:00</p>
      </div>
      <div class="info-container-form-section__working-hours-row">
        <h4 class="info-container-form-section__row-title">Среда</h4>
        <p class="info-container-form-section__row-text">13:00 - 16:00</p>
      </div>
      <div class="info-container-form-section__working-hours-row">
        <h4 class="info-container-form-section__row-title">Четверг</h4>
        <p class="info-container-form-section__row-text">13:00 - 16:00</p>
      </div>
      <div class="info-container-form-section__working-hours-row">
        <h4 class="info-container-form-section__row-title">Пятница</h4>
        <p class="info-container-form-section__row-text">13:00 - 16:00</p>
      </div>
      <div class="info-container-form-section__working-hours-row">
        <h4 class="info-container-form-section__row-title">Суббота</h4>
        <p class="info-container-form-section__row-text info-container-form-section__row-text_grey">
          Не рабочий
        </p>
      </div>
      <div class="info-container-form-section__working-hours-row">
        <h4 class="info-container-form-section__row-title">Воскресенье</h4>
        <p class="info-container-form-section__row-text info-container-form-section__row-text_grey">
          Не рабочий
        </p>
      </div>
    </div>
  </div>
</template>
