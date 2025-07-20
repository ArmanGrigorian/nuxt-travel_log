import { defineStore } from "pinia";
import { ref } from "vue";
import type { T_Location } from "~/types/db";
import type { T_SidebarItem } from "~/types/sidebar";
import { useSidebarStore } from "./sidebar";

export const useLocationsStore = defineStore("locationsStore", () => {
  const { $csrfFetch } = useNuxtApp();
  const sidebarStore = useSidebarStore();
  const locations = ref<T_Location[]>([]);
  const status = ref<"idle" | "pending" | "success" | "error">("idle");

  async function fetchLocations() {
    try {
      status.value = "pending";
      const data = await $csrfFetch<T_Location[]>("/api/locations");

      if (data) {
        locations.value = data;
        status.value = "success";
        sidebarStore.dynamicSidebarItems = data.map(
          (location) =>
            ({
              label: location.name,
              icon: "tabler:map-pin",
              href: `/locations/${location.id}`,
            }) as T_SidebarItem,
        );
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
