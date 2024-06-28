<script setup>
import './form-location.scss';
</script>

<template>
  <div
    id="info-container-location"
    class="form-section__info-container info-container-form-section"
  >
    <div class="info-container-form-section__heading">
      <h3 class="info-container-form-section__title">Расположение</h3>
    </div>
    <div class="info-container-form-section__content">
      <div class="info-container-form-section__column info-container-form-section__location-column">
        <h4 class="info-container-form-section__row-title">Pylimo g. 23-3, 01141 Vilnius, Литва</h4>
        <div
          style="
            text-decoration: none;
            overflow: hidden;
            max-width: 100%;
            width: 100%;
            height: 23.75rem;
            border-radius: 0.5rem;
          "
        >
          <div id="gmap-canvas" style="height: 100%; width: 100%; max-width: 100%">
            <iframe
              style="height: 100%; width: 100%; border: 0"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?q=Pylimo+g.+23-3,+01141+Vilnius&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            />
          </div>
          <a
            id="grab-map-data"
            class="google-map-code-enabler"
            rel="nofollow"
            href="https://www.bootstrapskins.com/themes"
            >premium bootstrap themes</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
