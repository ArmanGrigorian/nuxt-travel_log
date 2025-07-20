<script lang="ts" setup>
const props = defineProps<{
  errorMessage: string | undefined;
}>();


</script>

<template>
  <div
v-if="props.errorMessage"
role="alert"
class="alert alert-error">
    <Icon name="tabler:alert-circle" size="24" />
    <span>{{ props.errorMessage }}</span>
  </div>
</template>
