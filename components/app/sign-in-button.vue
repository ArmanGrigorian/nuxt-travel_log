<script lang="ts" setup>
import { useAuthStore } from "~/stores/auth";

const { isLoading, signIn } = useAuthStore();
</script>

<template>
  <button :disabled="isLoading" class="btn btn-accent" @click="signIn">
    Sign In With GitHub
    <span v-if="isLoading" class="loading loading-bars loading-md"/>
    <Icon v-else name="tabler:brand-github" size="24" />
  </button>
</template>
