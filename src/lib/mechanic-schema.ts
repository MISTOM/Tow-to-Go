// src/routes/register/mechanic/mechanic-schema.ts
import { z } from "zod";

export const mechanicSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  phone: z.string().min(10, "Phone number must be valid"),
  address: z.string().min(5, "Address must be valid"),
  location: z.string().min(3, "Location must be valid"),
});

export type MechanicSchema = typeof mechanicSchema;
