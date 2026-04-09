<script setup lang="ts">
import Button from "~/components/ui/button/Button.vue";

definePageMeta({
  layout: "onboarding",
});

const authStore = useAuthStore();
const router = useRouter();

const firstName = computed(() => {
  return authStore.user?.firstName ?? "Ejemplo";
});

function continuar() {
  router.push("/transaction");
}
</script>

<template>
  <div
    class="flex flex-col h-full items-center text-center gap-8 py-6 max-w-xs mx-auto"
  >
    <img
      src="/images/success.png"
      alt="Perfil creado"
      class="w-48 h-auto select-none"
    />

    <div class="flex flex-col gap-3">
      <h1 class="text-2xl font-bold text-gray-900 leading-snug">
        ¡Felicitaciones {{ firstName }}, tu<br />perfil ha sido creado!
      </h1>
      <p class="text-gray-500 text-sm leading-relaxed">
        Ya puedes empezar a
        <em
          class="font-medium not-italic text-gray-700"
          style="font-style: italic"
          >Kambiar</em
        >
        con la mejor tasa<br />del mercado
      </p>
    </div>

    <Button
      class="mt-2 w-full font-semibold tracking-widest text-sm"
      @click="continuar"
    >
      CONTINUAR
    </Button>
  </div>
</template>
