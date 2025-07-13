<script lang="ts" setup>
const route = useRoute();
const error = route.query.error || "An unknown error occurred.";
</script>

<template>
  <div
    class="card bg-base-300 container mx-auto mt-4 flex min-h-72 flex-col items-center justify-center gap-4"
  >
    <div role="alert" class="alert alert-error text-center">
      <span>Oh no! {{ error }}</span>
    </div>
    <NuxtLink to="/" class="btn btn-primary">
      Home
      <Icon name="tabler:arrow-big-left-lines-filled" size="24" />
    </NuxtLink>
  </div>
</template>
