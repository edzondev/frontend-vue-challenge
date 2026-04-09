<script setup lang="ts">
import { useForm, Field as VeeField } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import { loginSchema } from "~/schemas/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";

const auth = useAuthStore();
const router = useRouter();

const { handleSubmit } = useForm({
  validationSchema: toTypedSchema(loginSchema),
  initialValues: {
    email: "",
    password: "",
  },
});

const apiError = ref("");
const loading = ref(false);

const onSubmit = handleSubmit(async (values) => {
  try {
    loading.value = true;
    apiError.value = "";

    auth.setAuth(
      { id: "1", email: values.email, firstName: "John", lastName: "Doe" },
      "token-de-prueba",
    );

    await router.push("/transaction");
  } catch (err: any) {
    apiError.value =
      err?.data?.message ?? "Ocurrió un error, intenta de nuevo.";
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <form id="form-auth" class="flex flex-col gap-5" @submit.prevent="onSubmit">
    <FieldGroup>
      <VeeField v-slot="{ field, errors }" name="email">
        <Field :data-invalid="!!errors.length">
          <FieldLabel for="form-email"> Correo electrónico </FieldLabel>
          <Input
            type="email"
            id="form-email"
            v-bind="field"
            placeholder="Escribe tu correo"
            autocomplete="off"
            :aria-invalid="!!errors.length"
          />
          <FieldError v-if="errors.length" :errors="errors" />
        </Field>
      </VeeField>
      <VeeField v-slot="{ field, errors }" name="password">
        <Field :data-invalid="!!errors.length">
          <FieldLabel for="form-password"> Contraseña </FieldLabel>
          <Input
            type="password"
            id="form-password"
            v-bind="field"
            placeholder="Escribe tu contraseña"
            autocomplete="off"
            :aria-invalid="!!errors.length"
          />
          <FieldError v-if="errors.length" :errors="errors" />
        </Field>
      </VeeField>
    </FieldGroup>
    <Button type="submit" form="form-auth" variant="lighter">
      INICIA SESIÓN
    </Button>
  </form>
</template>
