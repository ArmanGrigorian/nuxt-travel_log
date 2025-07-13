<script lang="ts" setup>
defineProps<{
  className?: string;
}>();
</script>

<template>
  <span :class="cn('loading loading-bars loading-md', className)" />
</template>
