<script setup>
import '../assets/scss/layout/app-footer.scss';
import '../assets/scss/components/buttons.scss';
</script>

<template>
  <footer class="footer">
    <div class="footer__container _container">
      <div class="footer__content">
        <a href="" class="footer__logo">
          <img src="../assets/icons/logo.svg" alt="Logo" >
        </a>
        <nav class="footer__navmenu navmenu-footer">
          <ul class="navmenu-footer__list">
            <NuxtLink to="/" class="navmenu-footer__item">Девушки</NuxtLink>
            <NuxtLink to="/" class="navmenu-footer__item">Мужчины</NuxtLink>
            <NuxtLink to="/" class="navmenu-footer__item">Спрос и предложение</NuxtLink>
            <NuxtLink to="/" class="navmenu-footer__item">Содержанки</NuxtLink>
            <NuxtLink to="/" class="navmenu-footer__item">В первый раз?</NuxtLink>
            <NuxtLink to="/" class="navmenu-footer__item">Поддержка и Оплата</NuxtLink>
            <NuxtLink to="/" class="navmenu-footer__item">Terms and Conditions</NuxtLink>
            <NuxtLink to="/" class="navmenu-footer__item">Privacy Policy</NuxtLink>
          </ul>
        </nav>
      </div>
      <div class="footer__line" />
      <div class="footer__copyright">
        <p class="footer__copyright-text body-text_2">
          Copyright © 2024-2024 Baltannonce.net. All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
