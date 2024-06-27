<script setup>
import './base-alert.scss';

// color => 'info' || 'warning' || 'success' || 'error'
// variant => 'outlined' || 'tonal' || 'default'
// density => 'default' || 'comfortable' || 'compact'
// border => true || false
// closable => true || false

defineProps({
  color: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  variant: { type: String, required: true },
  density: { type: String, default: 'default' },
  border: { type: Boolean, required: false },
  closable: { type: Boolean, required: false }
});

const alertsStore = useAlertsStore();

onMounted(() => {
  setTimeout(alertsStore.hideAlert, 3000);
});
</script>

<template>
  <div class="alert-wrapper">
    <div class="alert-wrapper__overlay" @click="alertsStore.hideAlert" />
    <div class="alert">
      <div
        class="alert__container"
        :class="{
          [`alert__container_${variant}`]: variant,
          [`alert__container_${color}`]: variant === 'tonal',
          [`alert__container_density_${density}`]: density,
          [`alert__container_border alert__container_border_${color}`]: border
        }"
      >
        <div
          class="alert__box"
          :class="{
            [`alert__box_align-center`]: variant === 'default' || density === 'compact',
            [`alert__box_gap_small`]: density === 'compact'
          }"
        >
          <div
            class="alert__icon-container"
            :class="{
              [`alert__icon-container_${variant}-${color}`]: variant,
              [`alert__icon-container_rounded-borders`]:
                variant === 'default' || density === 'compact',
              [`alert__icon-container_density_compact`]: density === 'compact'
            }"
          >
            <svg
              v-if="color === 'error'"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99961 0.506348C4.30273 0.506348 0.505859 4.30322 0.505859 9.0001C0.505859 13.697 4.30273 17.522 8.99961 17.522C13.6965 17.522 17.5215 13.697 17.5215 9.0001C17.5215 4.30322 13.6965 0.506348 8.99961 0.506348ZM8.99961 16.2563C5.00586 16.2563 1.77148 12.9938 1.77148 9.0001C1.77148 5.00635 5.00586 1.77197 8.99961 1.77197C12.9934 1.77197 16.2559 5.03447 16.2559 9.02822C16.2559 12.9938 12.9934 16.2563 8.99961 16.2563Z"
                :fill="variant === 'outlined' ? 'var(--color-error)' : 'white'"
              />
              <path
                d="M11.5873 6.38442C11.3342 6.1313 10.9404 6.1313 10.6873 6.38442L8.9998 8.10005L7.28418 6.38442C7.03105 6.1313 6.6373 6.1313 6.38418 6.38442C6.13105 6.63755 6.13105 7.0313 6.38418 7.28442L8.0998 9.00005L6.38418 10.7157C6.13105 10.9688 6.13105 11.3625 6.38418 11.6157C6.49668 11.7282 6.66543 11.8125 6.83418 11.8125C7.00293 11.8125 7.17168 11.7563 7.28418 11.6157L8.9998 9.90005L10.7154 11.6157C10.8279 11.7282 10.9967 11.8125 11.1654 11.8125C11.3342 11.8125 11.5029 11.7563 11.6154 11.6157C11.8686 11.3625 11.8686 10.9688 11.6154 10.7157L9.89981 9.00005L11.6154 7.28442C11.8404 7.0313 11.8404 6.63755 11.5873 6.38442Z"
                :fill="variant === 'outlined' ? 'var(--color-error)' : 'white'"
              />
            </svg>
            <svg
              v-if="color === 'info'"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_986_64252)">
                <path
                  d="M9 12V9M9 6H9.0075M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z"
                  :stroke="variant === 'outlined' ? 'var(--color-info)' : 'white'"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_986_64252">
                  <rect
                    width="18"
                    height="18"
                    :fill="variant === 'outlined' ? 'var(--color-info)' : 'white'"
                  />
                </clipPath>
              </defs>
            </svg>
            <svg
              v-if="color === 'success'"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.99961 0.506226C4.30273 0.506226 0.505859 4.3031 0.505859 8.99998C0.505859 13.6969 4.30273 17.5219 8.99961 17.5219C13.6965 17.5219 17.5215 13.6969 17.5215 8.99998C17.5215 4.3031 13.6965 0.506226 8.99961 0.506226ZM8.99961 16.2562C5.00586 16.2562 1.77148 12.9937 1.77148 8.99998C1.77148 5.00623 5.00586 1.77185 8.99961 1.77185C12.9934 1.77185 16.2559 5.03435 16.2559 9.0281C16.2559 12.9937 12.9934 16.2562 8.99961 16.2562Z"
                :fill="variant === 'outlined' ? 'var(--color-success)' : 'white'"
              />
              <path
                d="M11.4187 6.38438L8.07183 9.64688L6.55308 8.15626C6.29996 7.90313 5.90621 7.93126 5.65308 8.15626C5.39996 8.40938 5.42808 8.80313 5.65308 9.05626L7.45308 10.8C7.62183 10.9688 7.84683 11.0531 8.07183 11.0531C8.29683 11.0531 8.52183 10.9688 8.69058 10.8L12.3187 7.31251C12.5718 7.05938 12.5718 6.66563 12.3187 6.41251C12.0656 6.15938 11.6718 6.15938 11.4187 6.38438Z"
                :fill="variant === 'outlined' ? 'var(--color-success)' : 'white'"
              />
            </svg>
            <svg
              v-if="color === 'warning'"
              width="18"
              height="16"
              viewBox="0 0 18 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.0152 11.6156L10.9964 1.9312C10.5183 1.28433 9.78703 0.918701 8.99953 0.918701C8.18391 0.918701 7.45266 1.28433 7.00266 1.9312L0.983907 11.6156C0.421407 12.375 0.337032 13.3593 0.758907 14.2031C1.18078 15.0468 2.02453 15.5812 2.98078 15.5812H15.0183C15.9745 15.5812 16.8183 15.0468 17.2402 14.2031C17.662 13.3875 17.5777 12.375 17.0152 11.6156ZM16.1152 13.6406C15.8902 14.0625 15.4964 14.3156 15.0183 14.3156H2.98078C2.50266 14.3156 2.10891 14.0625 1.88391 13.6406C1.68703 13.2187 1.71516 12.7406 1.99641 12.375L8.01516 2.69058C8.24016 2.3812 8.60578 2.18433 8.99953 2.18433C9.39328 2.18433 9.75891 2.35308 9.98391 2.69058L16.0027 12.375C16.2839 12.7406 16.312 13.2187 16.1152 13.6406Z"
                :fill="variant === 'outlined' ? 'var(--color-warning)' : 'white'"
              />
              <path
                d="M8.99941 6.15002C8.66191 6.15002 8.35254 6.43127 8.35254 6.7969V9.86252C8.35254 10.2 8.63379 10.5094 8.99941 10.5094C9.36504 10.5094 9.64629 10.2281 9.64629 9.86252V6.76877C9.64629 6.43127 9.33691 6.15002 8.99941 6.15002Z"
                :fill="variant === 'outlined' ? 'var(--color-warning)' : 'white'"
              />
              <path
                d="M8.99941 11.25C8.66191 11.25 8.35254 11.5312 8.35254 11.8969V12.0375C8.35254 12.375 8.63379 12.6844 8.99941 12.6844C9.36504 12.6844 9.64629 12.4031 9.64629 12.0375V11.8688C9.64629 11.5313 9.33691 11.25 8.99941 11.25Z"
                :fill="variant === 'outlined' ? 'var(--color-warning)' : 'white'"
              />
            </svg>
          </div>
          <div class="alert__content">
            <h4 class="alert__title heading_h4">{{ title }}</h4>
            <p v-if="density !== 'compact'" class="alert__text">
              {{ text }}
            </p>
            <slot />
          </div>
          <svg
            v-if="closable"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="alert__cross button_icon-secondary"
            @click="alertsStore.hideAlert"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
