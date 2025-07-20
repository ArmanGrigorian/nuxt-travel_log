import { defineStore } from "pinia";
import { ref } from "vue";
import type { T_Location } from "~/lib/types";
const { $csrfFetch } = useNuxtApp();

export const useLocationsStore = defineStore("locationsStore", () => {
  const locations = ref<T_Location[]>([]);
  const status = ref<"idle" | "pending" | "success" | "error">("idle");

  async function fetchLocations() {
    try {
      status.value = "pending";
      const data = await $csrfFetch<T_Location[]>("/api/locations");

      if (data) {
        locations.value = data;
        status.value = "success";
      }
    } catch (e) {
      status.value = "error";
      console.error("Unexpected error:", e);
    }
  }

  return {
    locations,
    status,
    fetchLocations,
  };
});
