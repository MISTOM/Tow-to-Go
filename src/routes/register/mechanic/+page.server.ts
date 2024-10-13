import type { PageServerLoad } from './$types';
import type { Actions } from '@sveltejs/kit';
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";
import { mechanicSchema } from "$lib/mechanic-schema";

export const load: PageServerLoad = async () => {
  return {
    form: await superValidate(zod(mechanicSchema)),
  };
};

export const actions: Actions = {
  default: async (event) => {
    const form = await superValidate(event, zod(mechanicSchema));
    if (!form.valid) {
      return { form };
    }
    console.log(form.data);
    // Handle form submission (e.g., save to database)
    return { form };
  },
};


