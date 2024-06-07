const header = document.querySelector('.header');

header.innerHTML = `<div class="header__container _container">
<div class="header__content">
  <a href="#" class="header__logo">
    <img src="../assets/icons/logo.svg" alt="Logo" />
  </a>
  <div class="header__burger burger-header">
    <div class="burger-header__stripe burger-header__stripe_1"></div>
    <div class="burger-header__stripe burger-header__stripe_2"></div>
    <div class="burger-header__stripe burger-header__stripe_3"></div>
  </div>
  <div class="header__body">
    <nav class="header__navmenu navmenu-header">
      <ul class="navmenu-header__list">
        <a href="#" class="navmenu-header__item">Мужчины</a>
        <a href="#" class="navmenu-header__item">Спрос и предложение</a>
        <a href="#" class="navmenu-header__item">Содержанки</a>
        <a href="#" class="navmenu-header__item">В первый раз?</a>
      </ul>
    </nav>
    <div class="header__buttons">
    <div class="header__dropdown-lang dropdown-lang"></div>
      <div class="header__login-btns">
        <a href="#" class="button button_secondary button_filled">Войти</a>
        <a href="#" class="button button_primary button_filled">Зарегистрироваться</a>
      </div>
      <div class="header__theme-switch theme-switch"></div>
    </div>
  </div>
</div>
</div>`