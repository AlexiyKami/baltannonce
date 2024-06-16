<script setup>
defineProps({
  name: { type: String, required: true },
  title: { type: String, required: true },
  container: { type: String, default: 'column' }
});
</script>

<template>
  <div
    class="item-extended-filter__form wrap"
    :class="{
      'item-extended-filter__form  wrap': container === 'column',
      'item-extended-filter__row': container === 'row'
    }"
  >
    <label class="heading_h6" for="">{{ title }}:</label>
    <div class="item-extended-filter__row">
      <input :id="name" type="number" :name="name" class="medium" min="0" placeholder="----" >
      <span>-</span>
      <input :id="name" type="number" :name="name" class="medium" min="0" placeholder="----" >
      <span class="item-extended-filter__unit"><slot /></span>
    </div>
  </div>
</template>
