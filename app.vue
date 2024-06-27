<script setup>
import { injectStores } from '@/shared/api/api';
import { BaseAlert } from '@/shared/ui';

const authStore = useAuthStore();
const alertsStore = useAlertsStore();

// Take stores after initialization
injectStores(authStore, alertsStore);

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
      <Transition>
        <BaseAlert
          v-if="alertsStore.alert"
          :title="alertsStore.alert.title"
          :color="alertsStore.alert.color"
          :density="alertsStore.alert.density"
          :variant="alertsStore.alert.variant"
          :closable="alertsStore.alert.closable"
          :border="alertsStore.alert.border"
          :text="alertsStore.alert.text"
        />
      </Transition>
    </NuxtErrorBoundary>
  </NuxtLayout>
</template>
