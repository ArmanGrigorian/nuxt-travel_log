<script lang="ts" setup>
const locationsStore = useLocationsStore();
</script>

<template>
  <div class="p-4">
    <h2 class="text-2xl">Locations</h2>

    <div v-if="locationsStore.status === 'pending'">
      <AppLoadingSpinner class-name="loading-xl" />
    </div>

    <DashboardLocationsList v-else-if="locationsStore.locations.length" />

    <div v-else class="mt-4 flex flex-col gap-2">
      <p>Add a location to get started</p>
      <NuxtLink to="/dashboard/add" class="btn btn-primary w-fit">
        Add Location
        <Icon name="tabler:square-plus" size="24" />
      </NuxtLink>
    </div>
  </div>
</template>
