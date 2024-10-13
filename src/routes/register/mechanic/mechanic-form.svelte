<!-- src/routes/register/mechanic/mechanic-form.svelte -->
<script lang="ts">
    import { zodClient } from "sveltekit-superforms/adapters"
    import { superForm, type SuperValidated, type Infer } from "sveltekit-superforms";
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
    import { mechanicSchema, type MechanicSchema } from "$lib/mechanic-schema";
  
    export let data: SuperValidated<Infer<MechanicSchema>>;
    
    const form = superForm(data, {
      validators: zodClient(mechanicSchema),
    });
  
    const { form: formData, enhance } = form;
  </script>
  
  <form method="POST" use:enhance>
    <Form.Field {form} name="name">
      <Form.Control let:attrs>
        <Form.Label>Name</Form.Label>
        <Input {...attrs} bind:value={$formData.name} />
      </Form.Control>
      <Form.Description />
      <Form.FieldErrors />
    </Form.Field>
  
    <Form.Field {form} name="email">
      <Form.Control let:attrs>
        <Form.Label>Email</Form.Label>
        <Input type="email" {...attrs} bind:value={$formData.email} />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  
    <Form.Field {form} name="password">
      <Form.Control let:attrs>
        <Form.Label>Password</Form.Label>
        <Input type="password" {...attrs} bind:value={$formData.password} />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  
    <Form.Field {form} name="phone">
      <Form.Control let:attrs>
        <Form.Label>Phone</Form.Label>
        <Input type="tel" {...attrs} bind:value={$formData.phone} />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  
    <Form.Field {form} name="address">
      <Form.Control let:attrs>
        <Form.Label>Address</Form.Label>
        <Input {...attrs} bind:value={$formData.address} />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  
    <Form.Field {form} name="location">
      <Form.Control let:attrs>
        <Form.Label>Location</Form.Label>
        <Input {...attrs} bind:value={$formData.location} />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  
    <Form.Button>Register</Form.Button>
  </form>
  