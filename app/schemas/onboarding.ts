import { z } from "zod";

const today = new Date();
const minAge = new Date(
  today.getFullYear() - 18,
  today.getDate(),
  today.getMonth(),
);

console.log("Min age date:", minAge.toISOString().split("T")[0]);

export const personalDataSchema = z
  .object({
    fullName: z
      .string()
      .min(1, "El nombre es requerido")
      .regex(
        /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
        "Solo letras, sin números ni caracteres especiales",
      ),
    documentType: z.enum(["DNI", "CE", "PASAPORTE"]),
    documentNumber: z.string(),
    phone: z
      .string()
      .min(1, "El celular es requerido")
      .regex(/^\d{9}$/, "El celular debe tener 9 dígitos"),
    birthDate: z
      .string()
      .min(1, "La fecha de nacimiento es requerida")
      .refine((val) => new Date(val) <= minAge, "Debes ser mayor de edad"),

    acceptTerms: z.literal(true, { message: "Debes aceptar los términos" }),
    acceptPrivacy: z.literal(true, {
      message: "Debes aceptar la política de privacidad",
    }),
  })
  .superRefine((data, ctx) => {
    const rules: Record<string, { regex: RegExp; message: string }> = {
      DNI: { regex: /^\d{8}$/, message: "El DNI debe tener 8 dígitos" },
      CE: { regex: /^\d{9}$/, message: "El CE debe tener 9 dígitos" },
      PASAPORTE: {
        regex: /^[a-zA-Z0-9]{8,15}$/,
        message: "El pasaporte debe tener entre 8 y 15 caracteres",
      },
    };

    const rule = rules[data.documentType];
    if (rule && !rule.regex.test(data.documentNumber)) {
      ctx.addIssue({
        code: "custom",
        path: ["documentNumber"],
        message: rule.message,
      });
    }
  });

export type PersonalDataInput = z.input<typeof personalDataSchema>;
