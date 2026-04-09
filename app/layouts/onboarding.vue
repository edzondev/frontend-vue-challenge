<script setup lang="ts"></script>

<template>
  <section class="min-h-dvh flex flex-col bg-gray-10">
    <header class="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div
        class="container mx-auto px-4 h-16 flex items-center justify-between"
      >
        <NuxtLink to="/transaction">
          <img src="/images/logo.png" alt="Kambista Logo" class="h-8 w-auto" />
        </NuxtLink>

        <button
          class="text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          Volver
        </button>
      </div>
    </header>

    <div class="h-full p-6 md:p-10">
      <div class="flex items-center justify-center h-full">
        <div class="w-full max-w-screen-sm">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
