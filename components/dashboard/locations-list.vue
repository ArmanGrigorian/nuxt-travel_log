<script setup lang="ts">
import { useLocationsStore } from "~/stores/locations";

const locationsStore = useLocationsStore();
</script>

<template>
  <ul class="mt-4 flex flex-wrap gap-4">
    <DashboardLocationListItem
      v-for="location in locationsStore.locations"
      :key="location.id"
      :location="location"
    />
  </ul>
</template>
