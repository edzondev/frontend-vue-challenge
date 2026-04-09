<script setup lang="ts">
import LoginForm from "~/components/auth/LoginForm.vue";
definePageMeta({ layout: "auth" });
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-gray-900 mb-1">Bienvenido</h1>
    <p class="text-sm text-gray-500 mb-8">Ingresa a tu cuenta para continuar</p>

    <LoginForm />

    <p class="text-sm text-center text-gray-500 mt-6">
      ¿No tienes cuenta?
      <NuxtLink
        to="/onboarding/personal-data"
        class="text-primary font-semibold hover:underline"
      >
        Regístrate
      </NuxtLink>
    </p>
  </div>
</template>
