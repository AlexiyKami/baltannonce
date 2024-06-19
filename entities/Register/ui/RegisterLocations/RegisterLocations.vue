<script setup>
const props = defineProps({
  title: { type: String, required: true },
  cities: { type: Array, required: true },
  country: { type: String, required: true },
  locations: { type: Array, required: true }
});

const emits = defineEmits(['setLocations']);

const onChange = (cityId) => {
  emits('setLocations', cityId, props.country);
};

const isChecked = (cityId) => {
  return !!props.locations.find((location) => location.city_name === cityId);
};

const isDisabled = (cityId) => {
  return props.locations.length >= 2 && !isChecked(cityId);
};
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
            :checked="isChecked(city.id)"
            :disabled="isDisabled(city.id)"
            :value="city.id"
            @change="onChange(city.id)"
          >
          <label :for="city.id">{{ city.title }}</label>
        </div>
      </div>
    </div>
  </div>
</template>
