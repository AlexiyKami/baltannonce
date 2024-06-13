<script setup>
import { AppHeader } from '@/widgets/AppHeader';
import { AppFooter } from '@/widgets/AppFooter';
</script>

<template>
  <div>
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
