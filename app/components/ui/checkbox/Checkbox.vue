<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { computed } from "vue";
import { cn } from "@/lib/utils";

const props = defineProps<{
  modelValue?: boolean | any[];
  value?: any;
  disabled?: boolean;
  required?: boolean;
  class?: HTMLAttributes["class"];
}>();

const emit = defineEmits<{
  "update:modelValue": [value: boolean | any[]];
}>();

// Calculamos si este checkbox en particular está marcado
const isChecked = computed(() => {
  if (Array.isArray(props.modelValue)) {
    return props.modelValue.includes(props.value);
  }
  return !!props.modelValue;
});

// Manejamos el click para actualizar el v-model correctamente
const toggle = () => {
  if (props.disabled) return;

  if (Array.isArray(props.modelValue)) {
    const newValue = [...props.modelValue];
    const index = newValue.indexOf(props.value);
    if (index >= 0) {
      newValue.splice(index, 1); // Lo quitamos si ya estaba
    } else {
      newValue.push(props.value); // Lo añadimos si no estaba
    }
    emit("update:modelValue", newValue);
  } else {
    emit("update:modelValue", !props.modelValue);
  }
};
</script>

<template>
  <button
    type="button"
    role="checkbox"
    :aria-checked="isChecked"
    :aria-required="required"
    :disabled="disabled"
    :data-state="isChecked ? 'checked' : 'unchecked'"
    :class="
      cn(
        'peer border-input data-[state=checked]:bg-secondary data-[state=checked]:text-white data-[state=checked]:border-secondary focus-visible:border-ring focus-visible:ring-ring/50 aria-[invalid=true]:ring-destructive/20 dark:aria-[invalid=true]:ring-destructive/40 aria-[invalid=true]:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        props.class,
      )
    "
    @click="toggle"
  >
    <span
      v-if="isChecked"
      data-slot="checkbox-indicator"
      class="grid place-content-center text-current transition-none"
    >
      <slot :checked="isChecked">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="size-3.5"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </slot>
    </span>
  </button>
</template>
