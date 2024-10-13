<script lang="ts">
    import type { PageData } from './$types';
    import DriverForm from './driver-form.svelte';
    
    export let data: PageData;
</script>

<h1 class="text-3xl font-bold text-center my-4">Driver Registration</h1>

<div class=" justify-center items-center h-screen w-1/2 mx-auto ">
    <DriverForm data={data.form} />
</div>