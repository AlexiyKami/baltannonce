<script setup>
import './filter-fieldset.scss';

defineProps(['title', 'type', 'name', 'options', 'container']);
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
        class="filter__item"
        :style="{
          'min-width': container === 'column' ? '9rem' : 'none'
        }"
        v-for="option in options"
        :key="option"
      >
        <input :id="option.id" :type="type" :name="name" />
        <label :for="option.id">{{ option.title }}</label>
      </div>
    </div>
    <slot />
  </div>
</template>
