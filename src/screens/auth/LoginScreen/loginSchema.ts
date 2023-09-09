import {z} from 'zod';

export const loginSchema = z.object({
  email: z.string().email('e-mail inválido'),
  password: z.string().min(1, 'senha obrigatória'),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
