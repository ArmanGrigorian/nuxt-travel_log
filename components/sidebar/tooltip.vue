<script lang="ts" setup>
const props = defineProps<{
  label: string;
  show: boolean;
  className?: string;
}>();
</script>

<template>
  <div :class="cn('tooltip tooltip-right w-full', props.className)">
    <div v-if="props.show" class="tooltip-content text-base font-semibold">
      {{ props.label }}
    </div>
    <slot />
  </div>
</template>
