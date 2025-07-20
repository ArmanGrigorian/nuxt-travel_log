import type { FetchError } from "ofetch";
import type { z } from "zod";
import type { InsertLocation } from "~/lib/db/schema/location";
const { $csrfFetch } = useNuxtApp();

interface AddLocationResponse {
  data?: unknown;
  error?: string;
}

export const useLocationApi = () => {
  const isLoading = ref(false);

  const addLocation = async (
    values: z.infer<typeof InsertLocation>,
    setErrors: (errors: FetchError["data"]["data"]) => void,
  ): Promise<AddLocationResponse> => {
    isLoading.value = true;

    try {
      const response = await $csrfFetch("/api/locations", {
        method: "post",
        body: values,
        headers: {
          "content-type": "application/json",
        },
      });
      return { data: response, error: undefined };
    } catch (err) {
      const error = err as FetchError;
      const errorMsg = error.statusMessage ?? "An unknown error occurred.";

      if (error.data?.data) {
        setErrors(error.data?.data);
      }

      return {
        data: error.data,
        error: errorMsg,
      };
    } finally {
      isLoading.value = false;
    }
  };

  return { addLocation, isLoading };
};
