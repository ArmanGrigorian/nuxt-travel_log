<script lang="ts" setup>
const { onSubmit, onRedirect, errors, formErrors, isLoading } =
  useAddLocationForm();

const router = useRouter();

onBeforeRouteLeave(() => {
  return onRedirect();
});
</script>
<template>
  <DashboardErrorMessage :error-message="formErrors" />

  <form @submit.prevent="onSubmit">
    <DashboardFormField
      legend="Name"
      name="name"
      :error="errors.name"
      :disabled="isLoading"
    />

    <DashboardFormField
      legend="Description"
      name="description"
      type="textarea"
      :error="errors.description"
      :disabled="isLoading"
    />

    <DashboardFormField
      legend="Latitude"
      name="lat"
      type="number"
      :error="errors.lat"
      :disabled="isLoading"
    />

    <DashboardFormField
      legend="Longitude"
      name="long"
      type="number"
      :error="errors.long"
      :disabled="isLoading"
    />

    <div class="item-center mt-4 flex justify-end gap-4">
      <button
        :disabled="isLoading"
        type="button"
        class="btn btn-outline"
        @click="router.back"
      >
        <Icon name="tabler:arrow-left" size="24" />
        Cancel
      </button>

      <button
:disabled="isLoading"
type="submit"
class="btn btn-primary">
        Add
        <AppLoadingSpinner v-if="isLoading" class-name="loading-sm" />
        <Icon
v-else
name="tabler:plus"
size="24" />
      </button>
    </div>
  </form>
</template>
