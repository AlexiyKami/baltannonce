<script setup>
useSeoMeta({
  title: 'Baltannonce',
  ogTitle: 'Baltannonce'
});
</script>

<template>
  <div class="wrapper">
    <NuxtLayout>
      <NuxtErrorBoundary>
        <div class="main">
          <NuxtPage />
        </div>
        <template #error="{ error }">
          <p>An error occurred: {{ error }}</p>
        </template>
      </NuxtErrorBoundary>
    </NuxtLayout>
  </div>
</template>
