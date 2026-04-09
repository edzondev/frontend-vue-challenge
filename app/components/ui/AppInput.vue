<script setup lang="ts">
const props = defineProps<{
  modelValue: string
  label?: string
  placeholder?: string
  type?: string
  error?: string
  hint?: string
  disabled?: boolean
  name?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label v-if="label" :for="name" class="text-sm font-medium text-gray-700">
      {{ label }}
    </label>

    <input
      :id="name"
      :name="name"
      :type="type ?? 'text'"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :class="[
        'w-full px-4 py-3 rounded-xl border text-base transition-colors duration-200',
        'placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-0',
        error
          ? 'border-red-400 focus:ring-red-300 bg-red-50'
          : 'border-gray-200 focus:border-primary focus:ring-primary/20',
        disabled && 'bg-gray-50 cursor-not-allowed opacity-60',
      ]"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />

    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
    <p v-else-if="hint" class="text-sm text-gray-400">{{ hint }}</p>
  </div>
</template>