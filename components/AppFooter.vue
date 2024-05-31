<script setup>
import '../assets/scss/layout/app-footer.scss';
import '../assets/scss/components/buttons.scss';
</script>

<template>
  <footer class="footer">
    <div class="footer__container _container">
      <div class="footer__grid">
        <div class="footer__box">
          <a href="" class="footer__logo">
            <img src="../assets/icons/logo.svg" alt="Logo" >
          </a>
          <p>Ідеальне житло чекає на вас!</p>
        </div>
        <div class="footer__box">
          <ul class="footer__links">
            <li><a class="footer__link" href="">Доступні нерухомості</a></li>
            <li><a href="">Про нас</a></li>
          </ul>
          <button type="button" class="footer__button button button_primary">
            Зв’язатись зі мною
          </button>
        </div>
        <div class="footer__box">
          <h5 class="footer__heading">Контакти</h5>
          <div class="footer__contacts">
            <a class="footer__contact" href="tel:+380 956 405 34">+380 956 405 34</a>
            <a class="footer__contact" href="mailto:sfdfldds123@gmail.com">sfdfldds123@gmail.com</a>
          </div>
          <div class="footer__socials">
            <a href=""
              ><img class="footer__social" src="../assets/icons/telegram.svg" alt="Telegram"
            ></a>
            <a href=""
              ><img class="footer__social" src="../assets/icons/viber.svg" alt="Viber"
            ></a>
            <a href=""
              ><img class="footer__social" src="../assets/icons/whatsapp.svg" alt="Whatsapp"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
