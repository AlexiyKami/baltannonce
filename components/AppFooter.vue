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
            <NuxtLink to="/" class="navmenu-footer__item">Sample text 1</NuxtLink>
            <NuxtLink to="/" class="navmenu-footer__item">Sample text 2</NuxtLink>
            <NuxtLink to="/" class="navmenu-footer__item">Sample text 3</NuxtLink>
            <NuxtLink to="/" class="navmenu-footer__item">Sample text 4</NuxtLink>
            <NuxtLink to="/" class="navmenu-footer__item">Sample text 5</NuxtLink>
            <NuxtLink to="/" class="navmenu-footer__item">Sample text 6</NuxtLink>
            <NuxtLink to="/" class="navmenu-footer__item">Sample text 7</NuxtLink>
            <NuxtLink to="/" class="navmenu-footer__item">Sample text 8</NuxtLink>
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
