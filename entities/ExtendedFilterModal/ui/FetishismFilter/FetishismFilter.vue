<script setup>
import { RangeInput } from '@/shared/ui';
</script>

<template>
  <div class="extended-filter__container extended-filter__container-fetish">
    <div class="extended-filter__item item-extended-filter">
      <h4 class="item-extended-filter__title heading_h4">Фетишизм</h4>
      <div class="item-extended-filter__stripe" />
      <div class="item-extended-filter__forms-container">
        <div class="item-extended-filter__forms item-extended-filter__forms-fetish">
          <div class="item-extended-filter__fetish">
            <RangeInput container="row" name="clothing-size" title="Размер одежды">см</RangeInput>
            <RangeInput container="row" name="shoe-size" title="Размер обуви">см</RangeInput>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
