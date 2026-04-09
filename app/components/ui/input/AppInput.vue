<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { useVModel } from "@vueuse/core";
import { cn } from "@/lib/utils";

const props = defineProps<{
  defaultValue?: string | number;
  modelValue?: string | number;
  class?: HTMLAttributes["class"];
}>();

const emits = defineEmits<{
  (e: "update:modelValue", payload: string | number): void;
}>();

const modelValue = useVModel(props, "modelValue", emits, {
  passive: true,
  defaultValue: props.defaultValue,
});
</script>

<template>
  <input
    v-model="modelValue"
    data-slot="input"
    :class="
      cn(
        'placeholder:text-muted-foreground  dark:bg-input/30 border-input h-11 w-full min-w-0 rounded-lg border bg-transparent px-4 py-3 text-base transition-colors outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-blue focus-visible:ring-blue/50 focus-visible:ring-1',
        'aria-[invalid=true]:ring-destructive dark:aria-[invalid=true]:ring-destructive/40 aria-[invalid=true]:border-destructive',
        props.class,
      )
    "
  />
</template>
