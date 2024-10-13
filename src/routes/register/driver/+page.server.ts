import type { PageServerLoad, Actions } from "./$types";
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { driverSchema } from "$lib/driver-schema";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(driverSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(driverSchema));
    if (!form.valid) {
      return { form };
    }
    console.log(form.data);
    // Handle form submission
    return { form };
  },
};
