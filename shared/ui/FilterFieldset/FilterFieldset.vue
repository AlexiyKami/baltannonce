<script setup>
import './filter-fieldset.scss';

defineProps({
  title: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  options: { type: Array, required: true },
  container: { type: String, required: true }
});
</script>

<template>
  <div class="filter__fieldset">
    <h3 class="filter__title heading_h5">{{ title }}</h3>
    <div
      :class="{
        'filter__column-container': container === 'column',
        'filter__row-container': container === 'row'
      }"
    >
      <div
        v-for="option in options"
        :key="option"
        class="filter__item"
        :style="{
          'min-width': container === 'column' ? '9rem' : 'none'
        }"
      >
        <input :id="option.id" :type="type" :name="name" >
        <label :for="option.id">{{ option.title }}</label>
      </div>
    </div>
    <slot />
  </div>
</template>
