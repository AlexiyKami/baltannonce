<script setup>
import { injectStore } from '@/shared/api/api';

const authStore = useAuthStore();
injectStore(authStore);

useSeoMeta({
  title: 'Baltannonce',
  ogTitle: 'Baltannonce'
});
</script>

<template>
  <NuxtLayout class="wrapper">
    <NuxtErrorBoundary>
      <main class="main">
        <NuxtPage />
      </main>
      <template #error="{ error }">
        <p>An error occurred: {{ error }}</p>
      </template>
    </NuxtErrorBoundary>
  </NuxtLayout>
</template>
