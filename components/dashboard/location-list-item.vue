<script lang="ts" setup>
const { locations } = useLocationsStore();
</script>

<template>
  <li v-for="location in locations" :key="location.id">
    <article class="card card-compact bg-base-300 h-40 w-72">
      <div class="card-body">
        <h3 class="text-xl">{{ location.name }}</h3>
        <p>{{ location.description }}</p>
      </div>
    </article>
  </li>
</template>
