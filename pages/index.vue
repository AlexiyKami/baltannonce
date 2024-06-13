<script setup>
import { HeroSection } from '@/widgets/HeroSection';
import { AdvertisementSection } from '@/widgets/AdvertisementSection';
import { HomeSection } from '@/widgets/HomeSection';
</script>

<template>
  <div>
    <Suspense>
      <div>
        <HeroSection />
        <AdvertisementSection />
        <HomeSection />
      </div>
      <template #fallback>Loading...</template>
    </Suspense>
  </div>
</template>
