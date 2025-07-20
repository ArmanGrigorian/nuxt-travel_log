import { InsertLocation } from "~/lib/db/schema/location";
import { useLocationApi } from "../api/location/useLocationApi";


export const useAddLocationForm = () => {
  const { addLocation, isLoading } = useLocationApi();
  const { handleSubmit, errors, meta, setErrors } = useForm({
    validationSchema: toTypedSchema(InsertLocation),
  });

  const formErrors = ref("");
  const isSubmitted =  ref(false);

  const onSubmit = handleSubmit(async (values) => {
    formErrors.value = "";
    const result = await addLocation(values, setErrors);

    if (result.error) {
      formErrors.value = result.error;
    } else {
      formErrors.value = "";
      isSubmitted.value = true
      navigateTo("/dashboard")
    }

  });

  const onRedirect = () => {
    if (meta.value.dirty && !isSubmitted.value) {
      const isConfirmed = confirm(
        "Are you sure you want to leave? All unsaved changes will be lost.",
      );

      if (!isConfirmed) {
        return false;
      }
    }

    return true;
  };

  return {
    formErrors,
    isLoading,
    onRedirect,
    onSubmit,
    errors,
    meta,
  };
};
