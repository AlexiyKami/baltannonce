<script setup lang="ts">
useSeoMeta({
  title: 'Baltannonce',
  ogTitle: 'Baltannonce'
});
</script>

<template>
  <div class="wrapper">
    <NuxtLayout>
      <NuxtErrorBoundary>
        <NuxtPage />
        <template #error="{ error }">
          <p>An error occurred: {{ error }}</p>
        </template>
      </NuxtErrorBoundary>
    </NuxtLayout>
  </div>
</template>
