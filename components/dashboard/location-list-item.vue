<script lang="ts" setup>
import type { T_Location } from "~/types/db";

defineProps<{ location: T_Location }>();
</script>

<template>
  <li>
    <article class="card card-compact bg-base-300 h-40 w-72">
      <div class="card-body">
        <h3 class="text-xl">{{ location.name }}</h3>
        <p>{{ location.description }}</p>
      </div>
    </article>
  </li>
</template>
