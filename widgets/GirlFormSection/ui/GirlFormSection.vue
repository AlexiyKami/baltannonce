<script setup>
import './form-section.scss';
import {
  FormMedia,
  FormTour,
  FormExtraInfo,
  FormFeatures,
  FormHeader,
  FormPrices,
  FormContacts,
  FormWorkingHours,
  FormServices,
  FormLocation,
  FormReviews
} from '@/entities/Form';
import { FormNavTabs } from '@/shared/ui';
import { HomeAdvertisements } from '@/entities/Home';
</script>

<template>
  <section class="form-section">
    <div class="form-section__container _container">
      <div class="form-section__content">
        <div class="form-section__main-block main-block-form-section">
          <FormMedia />
          <div class="main-block-form-section__details">
            <FormHeader />
            <FormTour />
            <FormFeatures />
            <FormExtraInfo />
          </div>
        </div>
        <div class="form-section__additional-block additional-block-form-section">
          <FormNavTabs />
          <FormPrices />
          <div class="additional-block-form-section__contacts-and-hours">
            <FormContacts />
            <FormWorkingHours />
          </div>
          <FormServices />
          <FormLocation />
          <FormReviews />
        </div>
      </div>
      <HomeAdvertisements :count="4" />
    </div>
  </section>
</template>
