import { z } from 'zod'

export const FormDataSchema = z.object({
    name: z.string(),
    subject: z
      .string()
      .min(1, {message: 'Subject must be at least 6 characters.' }),
    email : z
    .string(),
    message: z
      .string()
      .min(6, { message: 'Message must be at least 6 characters.' }),
})
