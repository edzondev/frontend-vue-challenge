import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Email inválido").min(1, "El email es requerido"),
  password: z.string().min(1, "La contraseña es requerida"),
});

export type LoginInput = z.input<typeof loginSchema>;
