<script lang="ts" setup>
const props = defineProps<{
  fieldsetClassName?: string;
  legendClassName?: string;
  inputClassName?: string;
  errorClassName?: string;
  legend: string;
  name: string;
  type?: "text" | "textarea" | "number";
  error: string | undefined;
  disabled?: boolean;
}>();
</script>

<template>
  <fieldset :class="cn('fieldset', props.fieldsetClassName)">
    <legend :class="cn('fieldset-legend', props.legendClassName)">
      {{ legend }}
    </legend>

    <Field
      :as="type === 'textarea' ? 'textarea' : 'input'"
      :name
      :disabled
      :type="type ?? 'text'"
      :class="
        cn(
          'w-full',
          props.error && 'input-error',
          type === 'textarea' ? 'textarea' : 'input',
          inputClassName,
        )
      "
    />
    <p
      v-if="error"
      :class="cn('fieldset-label text-error', props.errorClassName)"
    >
      {{ props.error }}
    </p>
  </fieldset>
</template>
