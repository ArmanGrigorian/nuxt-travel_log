<script lang="ts" setup>
const authStore = useAuthStore();

onMounted(() => {
  authStore.signOut();
  navigateTo("/");
});
</script>

<template>
  <div
    class="card bg-base-300 container mx-auto mt-4 flex min-h-72 flex-col items-center justify-center gap-4"
  >
    <AppLoadingSpinner class-name="loading-xl" />
  </div>
</template>
