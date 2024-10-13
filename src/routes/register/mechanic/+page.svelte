<script lang="ts">
    import type { PageData } from "./$types";
    import MechanicForm from "./mechanic-form.svelte";
    export let data: PageData;
</script>
  
<h1 class="text-3xl font-bold text-center my-4">Mechanic Registration</h1>

<div class=" justify-center items-center h-screen w-1/2 mx-auto ">
    <MechanicForm data={data.form} />
</div>
  