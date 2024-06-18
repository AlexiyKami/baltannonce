<script setup>
defineProps({
  title: { type: String, required: true },
  options: { type: Array, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true }
});
</script>

<template>
  <div class="item-extended-filter__appearance">
    <h6 class="heading_h6 heading__align-self_start">{{ title }}</h6>
    <div
      class="item-extended-filter__row wrap"
      :class="{
        'item-extended-filter__languages': name === 'languages',
        'item-extended-filter__beard-type': name === 'beard'
      }"
    >
      <div v-for="option in options" :key="option.id" class="item-extended-filter__row">
        <input :id="option.id" :type="type" :name="name" >
        <label :for="option.id">{{ option.title }}</label>
      </div>
    </div>
  </div>
</template>
