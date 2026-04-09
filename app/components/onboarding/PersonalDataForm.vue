<script setup lang="ts">
import { useForm, Field as VeeField } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { personalDataSchema } from "~/schemas/onboarding";
import { useOnboardingStore } from "~/stores/onboarding";
import FieldLabel from "../ui/field/FieldLabel.vue";
import { Input } from "../ui/input";
import FieldGroup from "../ui/field/FieldGroup.vue";
import Field from "../ui/field/Field.vue";
import FieldError from "../ui/field/FieldError.vue";
import { F } from "vue-router/dist/index-BzEKChPW.js";
import Checkbox from "../ui/checkbox/Checkbox.vue";
import Button from "../ui/button/Button.vue";

definePageMeta({ layout: "auth" });

const onboarding = useOnboardingStore();
const router = useRouter();

const { handleSubmit, setFieldError, meta } = useForm({
  validationSchema: toTypedSchema(personalDataSchema),
  initialValues: {
    fullName: "",
    documentType: "DNI",
    documentNumber: "",
    phone: "",
    birthDate: "",
    acceptTerms: false,
    acceptPrivacy: false,
  },
});

const documentTypeOptions = [
  { value: "DNI", label: "DNI" },
  { value: "CE", label: "CE" },
  { value: "PASAPORTE", label: "Pasaporte" },
];

const apiError = ref("");
const loading = ref(false);

const onSubmit = handleSubmit(async (values) => {
  try {
    loading.value = true;
    apiError.value = "";

    // TODO: llamada real al endpoint de registro
    // await $fetch('/api/auth/register', { method: 'POST', body: values })

    //onboarding.savePersonalData(values)
    await router.push("/onboarding/success");
  } catch (err: any) {
    const name = err?.data?.data?.name;

    if (name === "DUPLICATE_DNI") {
      setFieldError("documentNumber", "Este documento ya está registrado");
      return;
    }

    apiError.value =
      err?.data?.data?.message ?? "Ocurrió un error, intenta de nuevo.";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <form class="flex flex-col gap-5" @submit.prevent="onSubmit">
    <FieldGroup>
      <!-- Nombres completos -->
      <VeeField v-slot="{ field, errors }" name="fullName">
        <Field :data-invalid="!!errors.length">
          <FieldLabel for="fullName"> Nombres completos </FieldLabel>
          <Input
            id="fullName"
            type="text"
            placeholder="Escribe tus nombres y apellidos"
            v-bind="field"
            autocomplete="off"
            :aria-invalid="!!errors.length"
          />
          <FieldError v-if="errors.length" :errors="errors" />
        </Field>
      </VeeField>

      <!-- Documento -->
      <div class="flex flex-col gap-1.5">
        <FieldLabel>Documento</FieldLabel>
        <div class="flex gap-2">
          <VeeField v-slot="{ field }" name="documentType">
            <div class="relative w-36 shrink-0">
              <select
                v-bind="field"
                class="w-full px-3 py-3 rounded-xl border border-gray-200 text-base appearance-none bg-white focus:outline-none focus:ring-2 focus:border-primary focus:ring-primary/20"
              >
                <option
                  v-for="opt in documentTypeOptions"
                  :key="opt.value"
                  :value="opt.value"
                >
                  {{ opt.label }}
                </option>
              </select>
              <div
                class="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
          </VeeField>

          <VeeField v-slot="{ field, errors }" name="documentNumber">
            <Field class="flex flex-col gap-1 flex-1">
              <Input
                type="text"
                placeholder="N° de documento"
                v-bind="field"
                autocomplete="off"
                :aria-invalid="!!errors.length"
              />
              <FieldError v-if="errors.length" :errors="errors" />
            </Field>
          </VeeField>
        </div>
      </div>

      <!-- Alert informativo -->
      <div
        class="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3"
      >
        <svg
          class="shrink-0 mt-0.5 text-blue-400"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
        <p class="text-sm text-blue-800 leading-snug">
          Tu documento de identidad debe coincidir con tus datos para evitar
          inconvenientes al momento de hacer una primera operación
        </p>
      </div>

      <!-- Celular -->
      <VeeField v-slot="{ field, errors }" name="phone">
        <Field>
          <FieldLabel for="phone">Celular</FieldLabel>
          <Input
            id="phone"
            type="tel"
            placeholder="N° de celular"
            v-bind="field"
            autocomplete="off"
            :aria-invalid="!!errors.length"
          />
          <FieldError v-if="errors.length" :errors="errors" />
        </Field>
      </VeeField>

      <!-- Fecha de nacimiento -->
      <VeeField v-slot="{ field, errors }" name="birthDate">
        <Field class="flex flex-col gap-1.5">
          <FieldLabel for="birthDate">Fecha de nacimiento</FieldLabel>
          <Input
            id="birthDate"
            placeholder="DD/MM/YYYY"
            v-bind="field"
            :aria-invalid="!!errors.length"
          />
          <FieldError v-if="errors.length" :errors="errors" />
        </Field>
      </VeeField>

      <!-- Error de API -->
      <AppAlert v-if="apiError" type="error" :message="apiError" />

      <!-- Checkboxes -->
      <div class="flex flex-col gap-3">
        <VeeField v-slot="{ field, errors }" name="acceptTerms">
          <FieldGroup data-slot="checkbox-acceptTerms">
            <Field orientation="horizontal">
              <Checkbox
                id="form-acceptTerms"
                :name="field.name"
                :model-value="field.value"
                class="mt-0.5 shrink-0 cursor-pointer"
                @update:model-value="field.onChange"
              />
              <FieldLabel for="form-acceptTerms">
                He leído y acepto los
                <a href="#" class="text-primary font-semibold underline"
                  >Términos y condiciones</a
                >
              </FieldLabel>
            </Field>
          </FieldGroup>
          <FieldError v-if="errors.length" :errors="errors" />
        </VeeField>

        <VeeField v-slot="{ field, errors }" name="acceptPrivacy">
          <FieldGroup data-slot="checkbox-acceptPrivacy">
            <Field orientation="horizontal">
              <Checkbox
                id="acceptPrivacy"
                class="mt-0.5 shrink-0 cursor-pointer"
                :name="field.name"
                :model-value="field.value"
                @update:model-value="field.onChange"
              />
              <FieldLabel
                for="acceptPrivacy"
                class="items-start gap-0 flex-col"
              >
                Acepto de manera expresa e informada la
                <a href="#" class="text-primary font-semibold underline"
                  >Política de Tratamiento de datos personales de Kambista</a
                >
              </FieldLabel>
            </Field>
          </FieldGroup>
          <FieldError v-if="errors.length" :errors="errors" />
        </VeeField>
      </div>
    </FieldGroup>

    <!-- Botón -->
    <Button
      type="submit"
      :loading="loading"
      :disabled="!meta.valid"
      full-width
      class="mt-2"
    >
      CONTINUAR
    </Button>
  </form>
</template>
