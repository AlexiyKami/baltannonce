<script setup>
import './dropdown-filter-fieldset.scss';

defineProps(['title', 'type', 'name', 'options']);
</script>

<template>
  <div class="dropdown-filter__fieldset dropdown-filter__sortby">
    <h3 class="dropdown-filter__title heading_h5">{{ title }}</h3>
    <div class="dropdown-filter__item" v-for="option in options" :key="option">
      <input :id="option.id" :type="type" :name="name" />
      <label :for="option.id">{{ option.text }}</label>
    </div>
    <slot />
  </div>
</template>
