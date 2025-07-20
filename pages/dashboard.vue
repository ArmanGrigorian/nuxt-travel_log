<script lang="ts" setup>
const locationsStore = useLocationsStore();

await locationsStore.fetchLocations();
</script>

<template>
  <div class="flex flex-1">
    <SidebarContainer />

    <div class="flex flex-1 flex-col">
      <NuxtPage />
      <div class="flex-1 p-4 pt-2">
        <AppMap />
      </div>
    </div>
  </div>
</template>
