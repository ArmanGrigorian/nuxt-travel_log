<script lang="ts" setup>
const authStore = useAuthStore();

await authStore.init();
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <AppNavBar />
    <main class="flex flex-1 flex-col">
      <slot />
    </main>
  </div>
</template>
