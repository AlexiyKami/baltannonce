<script setup>
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
