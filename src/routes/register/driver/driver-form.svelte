<!-- src/routes/register/driver/driver-form.svelte -->
<script lang="ts">
    import { superForm, type SuperValidated, type Infer } from "sveltekit-superforms";
    import {zodClient} from "sveltekit-superforms/adapters";
    import * as Form from "$lib/components/ui/form";
    import { Input } from "$lib/components/ui/input";
    import { driverSchema, type DriverSchema } from "$lib/driver-schema";
  
    export let data: SuperValidated<Infer<DriverSchema>>;
    
    const form = superForm(data, {
      validators: zodClient(driverSchema),
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
  
    <Form.Field {form} name="license">
      <Form.Control let:attrs>
        <Form.Label>License Plate</Form.Label>
        <Input {...attrs} bind:value={$formData.license} />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>
  
    <Form.Field {form} name="vehicle">
      <Form.Control let:attrs>
        <Form.Label>Vehicle Model</Form.Label>
        <Input {...attrs} bind:value={$formData.vehicle} />
      </Form.Control>
      <Form.FieldErrors />
    </Form.Field>

    <Form.Button>Register</Form.Button>
    
</form>
  