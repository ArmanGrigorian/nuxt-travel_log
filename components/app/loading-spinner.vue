<script lang="ts" setup>
const props = defineProps<{
  className?: string;
}>();
</script>

<template>
  <span :class="cn('loading loading-bars loading-md', props.className)" />
</template>
