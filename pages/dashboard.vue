<script lang="ts" setup>
const locationsStore = useLocationsStore();

await locationsStore.fetchLocations();
</script>

<template>
  <div class="flex flex-1">
    <SidebarContainer />

    <div class="flex-1">
      <NuxtPage />
    </div>
  </div>
</template>
