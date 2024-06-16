<script setup>
defineProps({
  title: { type: String, required: true },
  cities: { type: Array, required: true }
});

defineEmits(['setLocations']);
</script>

<template>
  <div class="register__locations">
    <div class="register__location">
      <label class="heading_h5" for="">{{ title }}</label>
      <div class="register__checkboxes-container">
        <div v-for="city in cities" :key="city.id" class="register__checkbox-container">
          <input
            :id="city.id"
            type="checkbox"
            :value="city.id"
            @change="$emit('setLocations', city.id)"
          >
          <label :for="city.id">{{ city.title }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
