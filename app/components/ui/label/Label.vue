<script setup lang="ts">
import type { HTMLAttributes, LabelHTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { cn } from "@/lib/utils";

interface Props extends LabelHTMLAttributes {
  class?: HTMLAttributes["class"];
}

const props = defineProps<Props>();
const delegatedProps = reactiveOmit(props, "class");
</script>

<template>
  <label
    data-slot="label"
    :class="
      cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        props.class,
      )
    "
    v-bind="delegatedProps"
  >
    <slot />
  </label>
</template>
