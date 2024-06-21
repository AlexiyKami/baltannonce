<script setup>
import { injectStore } from '@/shared/api/api';

useSeoMeta({
  title: 'Baltannonce',
  ogTitle: 'Baltannonce'
});

const userStore = useUserStore();
injectStore(userStore);
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
