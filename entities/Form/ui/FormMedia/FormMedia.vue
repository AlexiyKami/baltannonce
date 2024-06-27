<script setup>
import './form-media.scss';
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
      <div class="main-block-form-section__slider">
        <div class="main-block-form-section__slider-img-container">
          <img
            src="../../assets/girls/girl05_big.jpg"
            alt="photo"
            class="main-block-form-section__slider-photo"
          >
        </div>
        <div
          class="main-block-form-section__slider-btn main-block-form-section__slider-btn_left filled-round-button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="var(--color-surface-invert)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div
          class="main-block-form-section__slider-btn main-block-form-section__slider-btn_right filled-round-button"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 18L15 12L9 6"
              stroke="var(--color-surface-invert)"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="main-block-form-section__slider-tag">
          <div
            class="main-block-form-section__slider-verified main-block-form-section__slider-verified_by-admin"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 21V19.8C16 18.1198 16 17.2798 15.673 16.638C15.3854 16.0735 14.9265 15.6146 14.362 15.327C13.7202 15 12.8802 15 11.2 15H6.8C5.11984 15 4.27976 15 3.63803 15.327C3.07354 15.6146 2.6146 16.0735 2.32698 16.638C2 17.2798 2 18.1198 2 19.8V21M16 6L18 8L22 4M12.5 7.5C12.5 9.433 10.933 11 9 11C7.067 11 5.5 9.433 5.5 7.5C5.5 5.567 7.067 4 9 4C10.933 4 12.5 5.567 12.5 7.5Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="main-block-form-section__slider-verified-text">Проверено лично</span>
          </div>
          <div class="main-block-form-section__slider-rating">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.2827 3.45332C11.5131 2.98638 11.6284 2.75291 11.7848 2.67831C11.9209 2.61341 12.0791 2.61341 12.2152 2.67831C12.3717 2.75291 12.4869 2.98638 12.7174 3.45332L14.9041 7.88328C14.9721 8.02113 15.0061 8.09006 15.0558 8.14358C15.0999 8.19096 15.1527 8.22935 15.2113 8.25662C15.2776 8.28742 15.3536 8.29854 15.5057 8.32077L20.397 9.03571C20.9121 9.11099 21.1696 9.14863 21.2888 9.27444C21.3925 9.38389 21.4412 9.5343 21.4215 9.68377C21.3988 9.85558 21.2124 10.0372 20.8395 10.4004L17.3014 13.8464C17.1912 13.9538 17.136 14.0076 17.1004 14.0715C17.0689 14.128 17.0487 14.1902 17.0409 14.2545C17.0321 14.3271 17.0451 14.403 17.0711 14.5547L17.906 19.4221C17.994 19.9355 18.038 20.1922 17.9553 20.3445C17.8833 20.477 17.7554 20.57 17.6071 20.5975C17.4366 20.6291 17.2061 20.5078 16.7451 20.2654L12.3724 17.9658C12.2361 17.8942 12.168 17.8584 12.0962 17.8443C12.0327 17.8318 11.9673 17.8318 11.9038 17.8443C11.832 17.8584 11.7639 17.8942 11.6277 17.9658L7.25492 20.2654C6.79392 20.5078 6.56341 20.6291 6.39297 20.5975C6.24468 20.57 6.11672 20.477 6.04474 20.3445C5.962 20.1922 6.00603 19.9355 6.09407 19.4221L6.92889 14.5547C6.95491 14.403 6.96793 14.3271 6.95912 14.2545C6.95132 14.1902 6.93111 14.128 6.89961 14.0715C6.86402 14.0076 6.80888 13.9538 6.69859 13.8464L3.16056 10.4004C2.78766 10.0372 2.60121 9.85558 2.57853 9.68377C2.55879 9.5343 2.60755 9.38389 2.71125 9.27444C2.83044 9.14863 3.08797 9.11099 3.60304 9.03571L8.49431 8.32077C8.64642 8.29854 8.72248 8.28742 8.78872 8.25662C8.84736 8.22935 8.90016 8.19096 8.94419 8.14358C8.99391 8.09006 9.02793 8.02113 9.09597 7.88328L11.2827 3.45332Z"
                fill="var(--color-text-secondary)"
              />
            </svg>

            <span class="main-block-form-section__slider-rating-text">5.0</span>
            <span class="main-block-form-section__slider-rating-text">(12)</span>
          </div>
        </div>
      </div>
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
