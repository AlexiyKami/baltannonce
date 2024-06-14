<script setup>
import './dropdown-filter-fieldset.scss';

defineProps(['title', 'type', 'name', 'options', 'container']);
</script>

<template>
  <div class="dropdown-filter__fieldset dropdown-filter__sortby">
    <h3 class="dropdown-filter__title heading_h5">{{ title }}</h3>
    <div class="dropdown-filter__column-container" v-if="container === 'column'">
      <div class="dropdown-filter__item" v-for="option in options" :key="option">
        <input :id="option.id" :type="type" :name="name" />
        <label :for="option.id">{{ option.text }}</label>
      </div>
    </div>
    <div class="dropdown-filter__row-container" v-if="container === 'row'">
      <div class="dropdown-filter__item" v-for="option in options" :key="option">
        <input :id="option.id" :type="type" :name="name" />
        <label :for="option.id">{{ option.text }}</label>
      </div>
    </div>
    <slot />
  </div>
</template>
