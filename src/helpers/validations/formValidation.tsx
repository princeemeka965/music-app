import * as z from "zod";

export const loginSchemaValidation = (): any => {
  return z.object({
    username: z.string().min(1, {
      message: "Username is required",
    }),
    password: z.string().min(6, {
      message: "Password must contain at least 6 characters.",
    }),
  });
};

export const signUpSchemaValidation = (): any => {
  return z.object({
    name: z.string().min(1, {
      message: "Name is required",
    }),
    email: z.string().email(),
    username: z.string().min(1, {
      message: "Username is required",
    }),
    password: z.string().min(6, {
      message: "Password must contain at least 6 characters.",
    }),
  });
};
