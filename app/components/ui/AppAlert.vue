<script setup lang="ts">
type AlertType = 'error' | 'success' | 'warning' | 'info'

const props = defineProps<{
  type?: AlertType
  title?: string
  message: string
}>()

const styles: Record<AlertType, string> = {
  error: 'bg-red-50 border-red-200 text-red-700',
  success: 'bg-green-50 border-green-200 text-green-700',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-700',
  info: 'bg-blue-50 border-blue-200 text-blue-700',
}
</script>

<template>
  <div :class="['border rounded-xl px-4 py-3', styles[type ?? 'error']]">
    <p v-if="title" class="font-semibold text-sm mb-0.5">{{ title }}</p>
    <p class="text-sm">{{ message }}</p>
  </div>
</template>