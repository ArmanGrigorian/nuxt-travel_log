<script lang="ts" setup>
const props = defineProps<{
  is: string;
  className?: string;
}>();
</script>

<template>
  <component :is :class="cn('skeleton h-10 rounded-none w-full', props.className)"/>
</template>
