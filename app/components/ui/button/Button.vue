<script setup lang="ts">
import type { HTMLAttributes, ButtonHTMLAttributes } from "vue";
import type { ButtonVariants } from ".";
import { buttonVariants } from ".";
import { cn } from "@/lib/utils";

interface Props extends ButtonHTMLAttributes {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  fullWidth?: boolean;
  loading?: boolean;
  class?: HTMLAttributes["class"];
  as?: string;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
  class: "",
  size: "default",
  variant: "default",
});
</script>

<template>
  <button
    data-slot="button"
    :data-variant="variant"
    :as="as"
    :type="type"
    :disabled="disabled || loading"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </button>
</template>
