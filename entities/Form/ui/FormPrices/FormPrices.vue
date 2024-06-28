<script setup>
import './form-prices.scss';
</script>

<template>
  <div id="info-container-prices" class="form-section__info-container info-container-form-section">
    <div class="info-container-form-section__heading">
      <h3 class="info-container-form-section__title">Цены</h3>
    </div>
    <div class="info-container-form-section__prices-comment">
      <span
        class="info-container-form-section__prices-comment-span info-container-form-section__prices-comment-span_red"
        >Требую предоплату:</span
      >
      <span class="info-container-form-section__prices-comment-text"
        >Текст девушки с условиями предоплаты</span
      >
    </div>
    <div class="info-container-form-section__prices-content">
      <div class="info-container-form-section__incall-block">
        <h4 class="info-container-form-section__incall-block-title">
          Incall
          <span class="info-container-form-section__incall-block-title-span">(Прием у себя)</span>
        </h4>
        <div class="info-container-form-section__incall-subtitle">
          <div class="info-container-form-section__checkbox-container active-green">
            <span class="info-container-form-section__checkbox">Апартаменты</span>
          </div>
          <div class="info-container-form-section__checkbox-container cross">
            <span class="info-container-form-section__checkbox">Отель</span>
          </div>
        </div>
        <ul class="info-container-form-section__incall-list">
          <li class="info-container-form-section__incall-item">
            <h4 class="info-container-form-section__row-title">30 минут:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
          <li class="info-container-form-section__incall-item">
            <h4 class="info-container-form-section__row-title">1 час:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
          <li class="info-container-form-section__incall-item">
            <h4 class="info-container-form-section__row-title">2 часа:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
          <li class="info-container-form-section__incall-item">
            <h4 class="info-container-form-section__row-title">Дополнительный час:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
          <li class="info-container-form-section__incall-item">
            <h4 class="info-container-form-section__row-title">На всю ночь:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
        </ul>
      </div>
      <div class="info-container-form-section__outcall-block">
        <h4 class="info-container-form-section__outcall-block-title">
          Outcall
          <span class="info-container-form-section__outcall-block-title-span"
            >(Выезд к клиенту)</span
          >
        </h4>
        <div class="info-container-form-section__outcall-subtitle">
          <div class="info-container-form-section__checkbox-container active-green">
            <span class="info-container-form-section__checkbox">Апартаменты</span>
          </div>
          <div class="info-container-form-section__checkbox-container active-green">
            <span class="info-container-form-section__checkbox">Отель</span>
          </div>
        </div>
        <ul class="info-container-form-section__outcall-list">
          <li class="info-container-form-section__outcall-item">
            <h4 class="info-container-form-section__row-title">30 минут:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
          <li class="info-container-form-section__outcall-item">
            <h4 class="info-container-form-section__row-title">1 час:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
          <li class="info-container-form-section__outcall-item">
            <h4 class="info-container-form-section__row-title">2 часа:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
          <li class="info-container-form-section__outcall-item">
            <h4 class="info-container-form-section__row-title">Дополнительный час:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
          <li class="info-container-form-section__outcall-item">
            <h4 class="info-container-form-section__row-title">На всю ночь:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
        </ul>
        <p class="info-container-form-section__outcall-notice">Outcall не включает цену за такси</p>
      </div>
      <div class="info-container-form-section__travel-block">
        <h4 class="info-container-form-section__travel-block-title">Travel</h4>
        <div class="info-container-form-section__travel-subtitle">
          Вильнюс, Рига, Юрмала, Каунас, Клайпеда, Шяуляй
        </div>
        <ul class="info-container-form-section__travel-list">
          <li class="info-container-form-section__travel-item">
            <h4 class="info-container-form-section__row-title">1 час:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
          <li class="info-container-form-section__travel-item">
            <h4 class="info-container-form-section__row-title">Вся ночь:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
          <li class="info-container-form-section__travel-item">
            <h4 class="info-container-form-section__row-title">24 часа:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
          <li class="info-container-form-section__travel-item">
            <h4 class="info-container-form-section__row-title">48 часов:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
          <li class="info-container-form-section__travel-item">
            <h4 class="info-container-form-section__row-title">Дополнительные сутки:</h4>
            <p class="info-container-form-section__row-text">200€</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="info-container-form-section__prices-comment">
      <span class="info-container-form-section__prices-comment-span"
        >Так же принимаю оплату в Tether USDT (TRC20 on Tron)</span
      >
    </div>
  </div>
</template>
