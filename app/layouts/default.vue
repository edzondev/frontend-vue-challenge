<script setup lang="ts">
//import { useAuthStore } from '~/stores/auth'

//const auth = useAuthStore()
const auth = ref(false); // Simulación de estado de autenticación
const router = useRouter();

async function handleLogout() {
  await router.push("/auth/login");
}
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white border-b border-gray-100 sticky top-0 z-10">
      <div class="max-w-lg mx-auto px-4 h-16 flex items-center justify-between">
        <NuxtLink to="/transaction"> hola </NuxtLink>

        <button
          v-if="!auth"
          class="text-sm text-gray-500 hover:text-gray-800 transition-colors"
          @click="handleLogout"
        >
          Cerrar sesión
        </button>
      </div>
    </header>

    <!-- Contenido -->
    <main class="max-w-lg mx-auto px-4 py-8">
      <slot />
    </main>
  </div>
</template>
