<script setup>
import './form-media.scss';
import { BaseSlider } from '@/shared/ui';
</script>

<template>
  <div class="main-block-form-section__media">
    <div class="main-block-form-section__photo-container">
      <div class="main-block-form-section__form-details">
        <p class="main-block-form-section__date-create">
          Дата создания анкеты:
          <span class="main-block-form-section__date-create-value">12/12/2023</span>
        </p>
        <p class="main-block-form-section__date-update">
          В последний раз модифицирована:
          <span class="main-block-form-section__date-create-value">12/12/2023</span>
        </p>
      </div>
      <BaseSlider />
      <div class="main-block-form-section__photo-info">
        <div class="main-block-form-section__photo-info-text">
          <p class="main-block-form-section__photo-date-create">
            Дата создания фотосессии:
            <span class="main-block-form-section__photo-date-create-value">12/12/2023</span>
          </p>
          <p class="main-block-form-section__search-photo">
            Искать изображение на:
            <a class="main-block-form-section__search-photo-link">Google</a>
            <a class="main-block-form-section__search-photo-link">TinEye</a>
            <a class="main-block-form-section__search-photo-link">Яндекс</a>
          </p>
        </div>
        <div class="main-block-form-section__alert-fake-btn button button_with-icon">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9998 8.99999V13M11.9998 17H12.0098M10.6151 3.89171L2.39019 18.0983C1.93398 18.8863 1.70588 19.2803 1.73959 19.6037C1.769 19.8857 1.91677 20.142 2.14613 20.3088C2.40908 20.5 2.86435 20.5 3.77487 20.5H20.2246C21.1352 20.5 21.5904 20.5 21.8534 20.3088C22.0827 20.142 22.2305 19.8857 22.2599 19.6037C22.2936 19.2803 22.0655 18.8863 21.6093 18.0983L13.3844 3.89171C12.9299 3.10654 12.7026 2.71396 12.4061 2.58211C12.1474 2.4671 11.8521 2.4671 11.5935 2.58211C11.2969 2.71396 11.0696 3.10655 10.6151 3.89171Z"
              stroke="var(--color-accent-primary)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          Сообщить о фейке
        </div>
      </div>
    </div>
    <div class="main-block-form-section__video-container">
      <!-- <video src="" class="main-block-form-section__video"></video> -->
      <img
        src="../../assets/girls/girl05_video.jpg"
        alt="photo"
        class="main-block-form-section__video"
      >
      <svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="main-block-form-section__video-btn"
      >
        <rect width="80" height="80" rx="40" fill="currentColor" />
        <path
          d="M51 38.2679C52.3333 39.0377 52.3333 40.9623 51 41.7321L36 50.3923C34.6667 51.1621 33 50.1999 33 48.6603V31.3397C33 29.8001 34.6667 28.8379 36 29.6077L51 38.2679Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
</template>
