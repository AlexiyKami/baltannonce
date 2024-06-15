<script setup>
defineProps(['title', 'options', 'type', 'name']);
</script>

<template>
  <div class="item-extended-filter__appearance">
    <h6 class="heading_h6 heading__align-self_start">{{ title }}</h6>
    <div
      class="item-extended-filter__row wrap"
      :class="{
        'item-extended-filter__languages': name === 'languages'
      }"
    >
      <div class="item-extended-filter__row" v-for="option in options" :key="option.id">
        <input :id="option.id" :type="type" :name="name" />
        <label :for="option.id">{{ option.title }}</label>
      </div>
    </div>
  </div>
</template>
