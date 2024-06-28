<script setup>
import './form-contacts.scss';
</script>

<template>
  <div
    id="info-container-contacts"
    class="form-section__info-container info-container-form-section"
  >
    <div class="info-container-form-section__heading">
      <h3 class="info-container-form-section__title">Контакты</h3>
    </div>
    <div class="info-container-form-section__content">
      <div class="info-container-form-section__row">
        <h4 class="info-container-form-section__row-title">Город:</h4>
        <p class="info-container-form-section__row-text">Вильнюс</p>
      </div>
      <div class="info-container-form-section__row">
        <h4 class="info-container-form-section__row-title">Телефон:</h4>
        <p class="info-container-form-section__column-text info-container-form-section__phone-text">
          <a class="info-container-form-section__row-text" href="tel:+943 395 429">+943 395 429</a>
          <span class="info-container-form-section__row-span">не звонить, не писать SMS</span>
        </p>
      </div>
      <div class="info-container-form-section__row">
        <h4 class="info-container-form-section__row-title">Доступные приложения:</h4>
        <div class="info-container-form-section__social-btns">
          <a href="" class="button button_social telegram">Telegram</a>
          <a href="" class="button button_social whatsapp">Whatsapp</a>
        </div>
      </div>
      <div class="info-container-form-section__row">
        <h4 class="info-container-form-section__row-title">Электронная почта:</h4>
        <a class="info-container-form-section__row-text" href="mailto:youremail@gmail.com"
          >youremail@gmail.com</a
        >
      </div>
    </div>
  </div>
</template>
