<script setup>
import './form-reviews.scss';
</script>

<template>
  <div id="info-container-reviews" class="form-section__info-container info-container-form-section">
    <div class="info-container-form-section__heading info-container-form-section__reviews-heading">
      <h3 class="info-container-form-section__title">Отзывы</h3>
      <div class="button button_primary">Оставить отзыв</div>
    </div>
    <div class="info-container-form-section__content info-container-form-section__review-content">
      <div class="info-container-form-section__review-container">
        <div class="info-container-form-section__review-heading">
          <div class="info-container-form-section__review-title">
            <h4 class="info-container-form-section__review-name">Имя пользователя</h4>
            <span class="info-container-form-section__review-date">12/12/2023</span>
          </div>
          <div class="info-container-form-section__review-visit-confirmation confirmed">
            Посещение подтверждено
          </div>
        </div>
        <div class="info-container-form-section__review-score">
          <ul class="info-container-form-section__review-score-table-row">
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Возраст</div>
              <div class="info-container-form-section__review-score-value">24 лет</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Поцелуй</div>
              <div class="info-container-form-section__review-score-value">Да</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Орал</div>
              <div class="info-container-form-section__review-score-value">
                Да (с презервативом)
              </div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Анал</div>
              <div class="info-container-form-section__review-score-value">Услуга</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Сумма</div>
              <div class="info-container-form-section__review-score-value">Услуга</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Время</div>
              <div class="info-container-form-section__review-score-value">Услуга</div>
            </li>
          </ul>
          <ul class="info-container-form-section__review-score-table-row">
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Красота</div>
              <div class="info-container-form-section__review-score-value">Великолепна</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Фигура</div>
              <div class="info-container-form-section__review-score-value">Идеальное</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Грудь</div>
              <div class="info-container-form-section__review-score-value">В форме</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Контроль времени</div>
              <div class="info-container-form-section__review-score-value">Спешит</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Гигиена</div>
              <div class="info-container-form-section__review-score-value">Хорошая</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Депиляция</div>
              <div class="info-container-form-section__review-score-value">Аккуратная стрижка</div>
            </li>
          </ul>
        </div>
        <div class="info-container-form-section__review-comment">
          <div class="info-container-form-section__review-comment-heading">
            <h5 class="info-container-form-section__review-comment-title">Комментарий</h5>
            <div class="text-button">Показать оригинал</div>
          </div>
          <p class="info-container-form-section__review-comment-text">
            Lorem ipsum dolor sit amet consectetur. Eget lorem amet feugiat diam tristique eleifend
            cras dictumst. Tincidunt arcu adipiscing lacinia urna mauris pulvinar pretium urna.
            Pellentesque mi ipsum dolor sit amet consectetur. Eget lorem amet feugiat diam tristique
            eleifend cras dictumst. Tincidunt arcu adipiscing lacinia urna mauris pulvinar pretium
            urna.
          </p>
        </div>
        <div class="info-container-form-section__review-experience positive">
          <div class="info-container-form-section__review-experience-text-block">
            <p class="info-container-form-section__review-experience-text">Общая оценка:</p>
            <span class="info-container-form-section__review-experience-text-span">5.0</span>
          </div>
          <div class="info-container-form-section__review-experience-text-block">
            <p class="info-container-form-section__review-experience-text">Опыт в целом:</p>
            <span class="info-container-form-section__review-experience-text-span">Позитивный</span>
          </div>
        </div>
        <div class="info-container-form-section__review-answer">
          <div class="info-container-form-section__review-answer-content">
            <div class="info-container-form-section__review-answer-heading">
              <h5 class="info-container-form-section__review-answer-title">Ответ</h5>
            </div>
            <p class="info-container-form-section__review-answer-text">
              Lorem ipsum dolor sit amet consectetur. Eget lorem amet feugiat diam tristique
              eleifend cras dictumst. Tincidunt arcu adipiscing lacinia urna mauris pulvinar pretium
              urna. Pellentesque mi ipsum dolor sit amet consectetur. Eget lorem amet feugiat diam
              tristique eleifend cras dictumst. Tincidunt arcu adipiscing lacinia urna mauris
              pulvinar pretium urna.
            </p>
          </div>
        </div>
      </div>
      <div class="info-container-form-section__review-container">
        <div class="info-container-form-section__review-heading">
          <div class="info-container-form-section__review-title">
            <h4 class="info-container-form-section__review-name">Имя пользователя</h4>
            <span class="info-container-form-section__review-date">12/12/2023</span>
          </div>
          <div class="info-container-form-section__review-visit-confirmation">
            Посещение НЕ подтверждено
          </div>
        </div>
        <div class="info-container-form-section__review-score">
          <ul class="info-container-form-section__review-score-table-row">
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Возраст</div>
              <div class="info-container-form-section__review-score-value">24 лет</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Поцелуй</div>
              <div class="info-container-form-section__review-score-value">Да</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Орал</div>
              <div class="info-container-form-section__review-score-value">
                Да (с презервативом)
              </div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Анал</div>
              <div class="info-container-form-section__review-score-value">Услуга</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Сумма</div>
              <div class="info-container-form-section__review-score-value">Услуга</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Время</div>
              <div class="info-container-form-section__review-score-value">Услуга</div>
            </li>
          </ul>
          <ul class="info-container-form-section__review-score-table-row">
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Красота</div>
              <div class="info-container-form-section__review-score-value">Великолепна</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Фигура</div>
              <div class="info-container-form-section__review-score-value">Идеальное</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Грудь</div>
              <div class="info-container-form-section__review-score-value">В форме</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Контроль времени</div>
              <div class="info-container-form-section__review-score-value">Спешит</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Гигиена</div>
              <div class="info-container-form-section__review-score-value">Хорошая</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Депиляция</div>
              <div class="info-container-form-section__review-score-value">Аккуратная стрижка</div>
            </li>
          </ul>
        </div>
        <div class="info-container-form-section__review-comment">
          <div class="info-container-form-section__review-comment-heading">
            <h5 class="info-container-form-section__review-comment-title">Комментарий</h5>
            <div class="text-button">Показать оригинал</div>
          </div>
          <p class="info-container-form-section__review-comment-text">
            Lorem ipsum dolor sit amet consectetur. Eget lorem amet feugiat diam tristique eleifend
            cras dictumst. Tincidunt arcu adipiscing lacinia urna mauris pulvinar pretium urna.
            Pellentesque mi ipsum dolor sit amet consectetur. Eget lorem amet feugiat diam tristique
            eleifend cras dictumst. Tincidunt arcu adipiscing lacinia urna mauris pulvinar pretium
            urna.
          </p>
        </div>
        <div class="info-container-form-section__review-experience">
          <div class="info-container-form-section__review-experience-text-block">
            <p class="info-container-form-section__review-experience-text">Общая оценка:</p>
            <span class="info-container-form-section__review-experience-text-span">4.0</span>
          </div>
          <div class="info-container-form-section__review-experience-text-block">
            <p class="info-container-form-section__review-experience-text">Опыт в целом:</p>
            <span class="info-container-form-section__review-experience-text-span"
              >Нейтральный</span
            >
          </div>
        </div>
        <div class="info-container-form-section__review-answer">
          <div class="info-container-form-section__review-answer-content">
            <div class="info-container-form-section__review-answer-heading">
              <h5 class="info-container-form-section__review-answer-title">Ответ</h5>
            </div>
            <p class="info-container-form-section__review-answer-text">
              Lorem ipsum dolor sit amet consectetur. Eget lorem amet feugiat diam tristique
              eleifend cras dictumst. Tincidunt arcu adipiscing lacinia urna mauris pulvinar pretium
              urna. Pellentesque mi ipsum dolor sit amet consectetur. Eget lorem amet feugiat diam
              tristique eleifend cras dictumst. Tincidunt arcu adipiscing lacinia urna mauris
              pulvinar pretium urna.
            </p>
          </div>
        </div>
      </div>
      <div class="info-container-form-section__review-container">
        <div class="info-container-form-section__review-heading">
          <div class="info-container-form-section__review-title">
            <h4 class="info-container-form-section__review-name">Имя пользователя</h4>
            <span class="info-container-form-section__review-date">12/12/2023</span>
          </div>
          <div class="info-container-form-section__review-visit-confirmation confirmed">
            Посещение подтверждено
          </div>
        </div>
        <div class="info-container-form-section__review-score">
          <ul class="info-container-form-section__review-score-table-row">
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Возраст</div>
              <div class="info-container-form-section__review-score-value">24 лет</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Поцелуй</div>
              <div class="info-container-form-section__review-score-value">Да</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Орал</div>
              <div class="info-container-form-section__review-score-value">
                Да (с презервативом)
              </div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Анал</div>
              <div class="info-container-form-section__review-score-value">Услуга</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Сумма</div>
              <div class="info-container-form-section__review-score-value">Услуга</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Время</div>
              <div class="info-container-form-section__review-score-value">Услуга</div>
            </li>
          </ul>
          <ul class="info-container-form-section__review-score-table-row">
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Красота</div>
              <div class="info-container-form-section__review-score-value">Великолепна</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Фигура</div>
              <div class="info-container-form-section__review-score-value">Идеальное</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Грудь</div>
              <div class="info-container-form-section__review-score-value">В форме</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Контроль времени</div>
              <div class="info-container-form-section__review-score-value">Спешит</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Гигиена</div>
              <div class="info-container-form-section__review-score-value">Хорошая</div>
            </li>
            <li class="info-container-form-section__review-score-item">
              <div class="info-container-form-section__review-score-label">Депиляция</div>
              <div class="info-container-form-section__review-score-value">Аккуратная стрижка</div>
            </li>
          </ul>
        </div>
        <div class="info-container-form-section__review-comment">
          <div class="info-container-form-section__review-comment-heading">
            <h5 class="info-container-form-section__review-comment-title">Комментарий</h5>
            <div class="text-button">Показать оригинал</div>
          </div>
          <p class="info-container-form-section__review-comment-text">
            Lorem ipsum dolor sit amet consectetur. Eget lorem amet feugiat diam tristique eleifend
            cras dictumst. Tincidunt arcu adipiscing lacinia urna mauris pulvinar pretium urna.
            Pellentesque mi ipsum dolor sit amet consectetur. Eget lorem amet feugiat diam tristique
            eleifend cras dictumst. Tincidunt arcu adipiscing lacinia urna mauris pulvinar pretium
            urna.
          </p>
        </div>
        <div class="info-container-form-section__review-experience negative">
          <div class="info-container-form-section__review-experience-text-block">
            <p class="info-container-form-section__review-experience-text">Общая оценка:</p>
            <span class="info-container-form-section__review-experience-text-span">1.0</span>
          </div>
          <div class="info-container-form-section__review-experience-text-block">
            <p class="info-container-form-section__review-experience-text">Опыт в целом:</p>
            <span class="info-container-form-section__review-experience-text-span">Негативный</span>
          </div>
        </div>
        <div class="info-container-form-section__review-answer">
          <div class="info-container-form-section__review-answer-content">
            <div class="info-container-form-section__review-answer-heading">
              <h5 class="info-container-form-section__review-answer-title">Ответ</h5>
            </div>
            <p class="info-container-form-section__review-answer-text">
              Lorem ipsum dolor sit amet consectetur. Eget lorem amet feugiat diam tristique
              eleifend cras dictumst. Tincidunt arcu adipiscing lacinia urna mauris pulvinar pretium
              urna. Pellentesque mi ipsum dolor sit amet consectetur. Eget lorem amet feugiat diam
              tristique eleifend cras dictumst. Tincidunt arcu adipiscing lacinia urna mauris
              pulvinar pretium urna.
            </p>
          </div>
        </div>
      </div>
      <div class="text-button">Показать отзывы</div>
    </div>
  </div>
</template>
