<script setup>
import './home-card.scss';

defineProps({ card: { type: Object, required: true } });
</script>

<template>
  <li
    class="card-background"
    :class="{
      'card-background_silver': card.background === 'silver',
      'card-background_gold': card.background === 'gold',
      'card-background_bronze': card.background === 'bronze'
    }"
  >
    <div class="home__card card-home">
      <div class="card-home__badges">
        <div v-if="card.girlOfTheDay" class="card-home__of-the-day heading_h4">Девушка дня!</div>
        <div v-if="card.manOfTheDay" class="card-home__of-the-day heading_h4">Мужчина дня!</div>
        <div class="card-home__tags-container">
          <div class="card-home__tag_video">Видео</div>
          <div v-if="card.new" class="card-home__tag_new">Новая</div>
        </div>
      </div>
      <div class="card-home__img-container">
        <img :src="card.photo" alt="Photo" >
      </div>
      <div class="card-home__info">
        <div class="card-home__row">
          <h3 class="card-home__name heading_h5">
            {{ card.name }}
            <span class="card-home__yeard-old">{{ card.age }}</span>
          </h3>
          <h3 class="card-home__price heading_h5">{{ card.price }}€</h3>
        </div>
        <div class="card-home__row">
          <div class="card-home__location">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="card-home__location-icon"
            >
              <path
                d="M7.99996 8.66659C9.10453 8.66659 9.99996 7.77115 9.99996 6.66659C9.99996 5.56202 9.10453 4.66659 7.99996 4.66659C6.89539 4.66659 5.99996 5.56202 5.99996 6.66659C5.99996 7.77115 6.89539 8.66659 7.99996 8.66659Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.99996 14.6666C10.6666 11.9999 13.3333 9.6121 13.3333 6.66659C13.3333 3.72107 10.9455 1.33325 7.99996 1.33325C5.05444 1.33325 2.66663 3.72107 2.66663 6.66659C2.66663 9.6121 5.33329 11.9999 7.99996 14.6666Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="card-home__location-text body-text_2">Эскорт Вильнюс</span>
          </div>
          <div class="card-home__date body-text_3">в туре до 23.05</div>
        </div>
        <div class="card-home__row">
          <div
            v-if="card.verified === 'Not verified'"
            class="card-home__verified card-home__verified"
          >
            <span class="card-home__verified-text body-text_3">Не проверено</span>
          </div>
          <div
            v-if="card.verified === 'By admin'"
            class="card-home__verified card-home__verified_by-admin"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6668 5.95429V10.0458C14.6668 10.4497 14.6668 10.6516 14.587 10.7451C14.5177 10.8263 14.4137 10.8693 14.3073 10.8609C14.1847 10.8513 14.042 10.7085 13.7564 10.4229L11.3335 8.00004V9.46671C11.3335 10.5868 11.3335 11.1469 11.1155 11.5747C10.9238 11.951 10.6178 12.257 10.2415 12.4487C9.81365 12.6667 9.2536 12.6667 8.1335 12.6667H4.5335C3.41339 12.6667 2.85334 12.6667 2.42552 12.4487C2.04919 12.257 1.74323 11.951 1.55148 11.5747C1.3335 11.1469 1.3335 10.5868 1.3335 9.46671V6.53337C1.3335 5.41327 1.3335 4.85322 1.55148 4.42539C1.74323 4.04907 2.04919 3.74311 2.42552 3.55136C2.85334 3.33337 3.41339 3.33337 4.5335 3.33337H8.1335"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.667 3.33333L12.0003 4.66667L14.667 2"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="card-home__verified-text body-text_3">Проверено лично</span>
          </div>
          <div
            v-if="card.verified === 'By video'"
            class="card-home__verified card-home__verified_by-video"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6668 5.95429V10.0458C14.6668 10.4497 14.6668 10.6516 14.587 10.7451C14.5177 10.8263 14.4137 10.8693 14.3073 10.8609C14.1847 10.8513 14.042 10.7085 13.7564 10.4229L11.3335 8.00004V9.46671C11.3335 10.5868 11.3335 11.1469 11.1155 11.5747C10.9238 11.951 10.6178 12.257 10.2415 12.4487C9.81365 12.6667 9.2536 12.6667 8.1335 12.6667H4.5335C3.41339 12.6667 2.85334 12.6667 2.42552 12.4487C2.04919 12.257 1.74323 11.951 1.55148 11.5747C1.3335 11.1469 1.3335 10.5868 1.3335 9.46671V6.53337C1.3335 5.41327 1.3335 4.85322 1.55148 4.42539C1.74323 4.04907 2.04919 3.74311 2.42552 3.55136C2.85334 3.33337 3.41339 3.33337 4.5335 3.33337H8.1335"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.667 3.33333L12.0003 4.66667L14.667 2"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="card-home__verified-text body-text_3">Проверено по видеозвонку</span>
          </div>
          <div
            v-if="card.verified === 'By photo'"
            class="card-home__verified card-home__verified_by-photo"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6668 5.95429V10.0458C14.6668 10.4497 14.6668 10.6516 14.587 10.7451C14.5177 10.8263 14.4137 10.8693 14.3073 10.8609C14.1847 10.8513 14.042 10.7085 13.7564 10.4229L11.3335 8.00004V9.46671C11.3335 10.5868 11.3335 11.1469 11.1155 11.5747C10.9238 11.951 10.6178 12.257 10.2415 12.4487C9.81365 12.6667 9.2536 12.6667 8.1335 12.6667H4.5335C3.41339 12.6667 2.85334 12.6667 2.42552 12.4487C2.04919 12.257 1.74323 11.951 1.55148 11.5747C1.3335 11.1469 1.3335 10.5868 1.3335 9.46671V6.53337C1.3335 5.41327 1.3335 4.85322 1.55148 4.42539C1.74323 4.04907 2.04919 3.74311 2.42552 3.55136C2.85334 3.33337 3.41339 3.33337 4.5335 3.33337H8.1335"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.667 3.33333L12.0003 4.66667L14.667 2"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="card-home__verified-text body-text_3">Проверено по фото</span>
          </div>
          <div
            v-if="card.verified === 'Similar'"
            class="card-home__verified card-home__verified_similar"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6668 5.95429V10.0458C14.6668 10.4497 14.6668 10.6516 14.587 10.7451C14.5177 10.8263 14.4137 10.8693 14.3073 10.8609C14.1847 10.8513 14.042 10.7085 13.7564 10.4229L11.3335 8.00004V9.46671C11.3335 10.5868 11.3335 11.1469 11.1155 11.5747C10.9238 11.951 10.6178 12.257 10.2415 12.4487C9.81365 12.6667 9.2536 12.6667 8.1335 12.6667H4.5335C3.41339 12.6667 2.85334 12.6667 2.42552 12.4487C2.04919 12.257 1.74323 11.951 1.55148 11.5747C1.3335 11.1469 1.3335 10.5868 1.3335 9.46671V6.53337C1.3335 5.41327 1.3335 4.85322 1.55148 4.42539C1.74323 4.04907 2.04919 3.74311 2.42552 3.55136C2.85334 3.33337 3.41339 3.33337 4.5335 3.33337H8.1335"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.667 3.33333L12.0003 4.66667L14.667 2"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="card-home__verified-text body-text_3">Проверено, похожа</span>
          </div>
          <div
            v-if="card.verified === 'Not similar'"
            class="card-home__verified card-home__verified_not-similar"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.6668 5.95429V10.0458C14.6668 10.4497 14.6668 10.6516 14.587 10.7451C14.5177 10.8263 14.4137 10.8693 14.3073 10.8609C14.1847 10.8513 14.042 10.7085 13.7564 10.4229L11.3335 8.00004V9.46671C11.3335 10.5868 11.3335 11.1469 11.1155 11.5747C10.9238 11.951 10.6178 12.257 10.2415 12.4487C9.81365 12.6667 9.2536 12.6667 8.1335 12.6667H4.5335C3.41339 12.6667 2.85334 12.6667 2.42552 12.4487C2.04919 12.257 1.74323 11.951 1.55148 11.5747C1.3335 11.1469 1.3335 10.5868 1.3335 9.46671V6.53337C1.3335 5.41327 1.3335 4.85322 1.55148 4.42539C1.74323 4.04907 2.04919 3.74311 2.42552 3.55136C2.85334 3.33337 3.41339 3.33337 4.5335 3.33337H8.1335"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.667 3.33333L12.0003 4.66667L14.667 2"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="card-home__verified-text body-text_3">Проверено, не похожа</span>
          </div>
          <div class="card-home__rating body-text_3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.52181 2.30229C7.67547 1.991 7.75229 1.83535 7.85659 1.78562C7.94734 1.74236 8.05277 1.74236 8.14351 1.78562C8.24781 1.83535 8.32464 1.991 8.4783 2.30229L9.93608 5.2556C9.98144 5.3475 10.0041 5.39345 10.0373 5.42913C10.0666 5.46072 10.1018 5.48631 10.1409 5.5045C10.1851 5.52503 10.2358 5.53244 10.3372 5.54726L13.598 6.02389C13.9414 6.07408 14.1131 6.09917 14.1926 6.18304C14.2617 6.25601 14.2942 6.35628 14.281 6.45593C14.2659 6.57047 14.1416 6.69153 13.893 6.93367L11.5343 9.23103C11.4608 9.30264 11.424 9.33845 11.4003 9.38106C11.3793 9.41878 11.3658 9.46022 11.3607 9.50309C11.3548 9.5515 11.3635 9.60208 11.3808 9.70324L11.9373 12.9482C11.996 13.2904 12.0254 13.4615 11.9702 13.5631C11.9222 13.6514 11.8369 13.7134 11.7381 13.7317C11.6245 13.7528 11.4708 13.672 11.1634 13.5104L8.24829 11.9773C8.15746 11.9295 8.11205 11.9057 8.0642 11.8963C8.02184 11.888 7.97827 11.888 7.9359 11.8963C7.88806 11.9057 7.84264 11.9295 7.75181 11.9773L4.83666 13.5104C4.52932 13.672 4.37565 13.7528 4.26202 13.7317C4.16316 13.7134 4.07786 13.6514 4.02987 13.5631C3.97471 13.4615 4.00406 13.2904 4.06276 12.9482L4.6193 9.70324C4.63665 9.60208 4.64532 9.5515 4.63945 9.50309C4.63426 9.46022 4.62078 9.41878 4.59978 9.38106C4.57606 9.33845 4.53929 9.30264 4.46576 9.23103L2.10708 6.93367C1.85848 6.69153 1.73418 6.57047 1.71906 6.45593C1.7059 6.35628 1.73841 6.25601 1.80754 6.18304C1.887 6.09917 2.05869 6.07408 2.40207 6.02389L5.66291 5.54726C5.76432 5.53244 5.81503 5.52503 5.85919 5.5045C5.89828 5.48631 5.93348 5.46072 5.96283 5.42913C5.99598 5.39345 6.01866 5.3475 6.06402 5.2556L7.52181 2.30229Z"
                fill="currentColor"
              />
            </svg>

            <span class="card-home__rating-text">{{ card.rating }}</span>
            <span class="card-home__rating-text">({{ card.reviews }})</span>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>
