<script setup lang="ts">
const operations = [
  {
    title: "Cotiza tu operación",
    description:
      "Utiliza la calculadora para verificar el Tipo de Cambio en tiempo real",
    imagePath: "/images/operation1.png",
  },
  {
    title: "Realiza la transferencia",
    description:
      "Envía desde tu banco el dinero que desees cambiar a la cuenta de Kambista indicada",
    imagePath: "/images/operation2.png",
  },
  {
    title: "Obtén tu dinero",
    description: "El dinero será depositado en tu cuenta de destino",
    imagePath: "/images/operation3.png",
  },
];
</script>

<template>
  <section class="grid min-h-dvh lg:grid-cols-2">
    <div
      class="relative hidden bg-[linear-gradient(20.06deg,_#182233_26.91%,_#1D2744_45.75%,_#293571_83.1%,_#344197_110.93%)] lg:block"
    >
      <div class="flex flex-col h-full items-center justify-center">
        <img src="/images/logo.png" alt="Kambista" class="" />

        <div class="mt-20 w-full max-w-xl">
          <div
            v-for="(op, index) in operations"
            :key="index"
            class="flex items-start gap-7 mb-10 last:mb-0"
          >
            <img
              :src="op.imagePath"
              :alt="op.title"
              class="h-auto w-auto object-contain"
            />
            <div class="flex flex-col items-start gap-2">
              <h3 class="text-xl font-bold text-white">
                {{ op.title }}
              </h3>
              <p class="text-base font-semibold text-white">
                {{ op.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-4 p-6 md:p-10">
      <div class="flex flex-1 items-center justify-center">
        <div class="w-full max-w-xs">
          <slot />
        </div>
      </div>
    </div>
  </section>
</template>
