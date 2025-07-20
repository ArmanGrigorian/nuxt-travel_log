<script lang="ts" setup>
const props = defineProps<{
  is: string;
  className?: string;
}>();
</script>

<template>
  <component :is :class="cn('divider my-1 h-1', props.className)"/>
</template>
