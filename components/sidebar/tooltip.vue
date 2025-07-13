<script lang="ts" setup>
defineProps<{
  label: string;
  show: boolean;
  className?: string;
}>();
</script>

<template>
  <div :class="cn('tooltip tooltip-right w-full', className)">
    <div v-if="show" class="tooltip-content text-base font-semibold">
      {{ label }}
    </div>
    <slot />
  </div>
</template>
