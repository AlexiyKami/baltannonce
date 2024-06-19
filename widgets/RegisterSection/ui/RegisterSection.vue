<script setup>
import './register-section.scss';
import { RegisterForm } from '@/features/Register';
</script>

<template>
  <section class="register">
    <div class="register__container _container">
      <div class="register__body">
        <h1 class="register__title heading_h1">Добро пожаловать в Baltannonce</h1>
        <RegisterForm />
      </div>
    </div>
  </section>
</template>
