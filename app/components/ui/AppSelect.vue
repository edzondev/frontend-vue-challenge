<script setup lang="ts">
export interface SelectOption {
  value: string
  label: string
}

const props = defineProps<{
  modelValue: string
  options: SelectOption[]
  label?: string
  placeholder?: string
  error?: string
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

    <div class="relative">
      <select
        :id="name"
        :name="name"
        :value="modelValue"
        :disabled="disabled"
        :class="[
          'w-full px-4 py-3 rounded-xl border text-base appearance-none transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-0 bg-white',
          error
            ? 'border-red-400 focus:ring-red-300'
            : 'border-gray-200 focus:border-primary focus:ring-primary/20',
          disabled && 'bg-gray-50 cursor-not-allowed opacity-60',
          !modelValue && 'text-gray-400',
        ]"
        @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
      >
        <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
        <option
          v-for="opt in options"
          :key="opt.value"
          :value="opt.value"
          class="text-gray-900"
        >
          {{ opt.label }}
        </option>
      </select>

      <!-- Chevron icon -->
      <div class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </div>

    <p v-if="error" class="text-sm text-red-500">{{ error }}</p>
  </div>
</template>