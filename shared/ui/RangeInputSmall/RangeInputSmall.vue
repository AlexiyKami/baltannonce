<script setup>
defineProps(
  {
    name: String
  },
  {
    title: String
  }
);
</script>

<template>
  <div class="item-extended-filter__column">
    <span>{{ title }}:</span>
    <div class="item-extended-filter__row">
      <input :id="name" type="number" :name="name" class="small" min="0" placeholder="----" >
      <span>-</span>
      <input :id="name" type="number" :name="name" class="small" min="0" placeholder="----" >
      <span class="item-extended-filter__unit"><slot /></span>
    </div>
  </div>
</template>
