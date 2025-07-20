import type { T_SidebarItem } from "~/types/sidebar";
import { staticSidebarItems } from "~/utils/constants/sidebar";
import { useLocationsStore } from "./locations";

export const useSidebarStore = defineStore("sidebarStore", () => {
  const locationsStore = useLocationsStore();
  const isOpen = ref(true);
  const dynamicSidebarItems = ref<T_SidebarItem[]>([]);

  const isLoading = computed(() => locationsStore.status === "pending");

  function setIsOpen(status?: boolean): void {
    if (typeof status === "boolean") {
      localStorage.setItem("sidebarIsOpen", JSON.stringify(status));
      isOpen.value = status;
    } else {
      const newStatus = !isOpen.value;
      localStorage.setItem("sidebarIsOpen", JSON.stringify(newStatus));
      isOpen.value = newStatus;
    }
  }

  const sidebarItems = computed(() => [
    ...staticSidebarItems,
    ...dynamicSidebarItems.value,
  ]);

  onMounted(() => {
    const isOpenInLocal = localStorage.getItem("sidebarIsOpen");

    if (isOpenInLocal) {
      isOpen.value = JSON.parse(isOpenInLocal);
    } else isOpen.value = true;
  });

  return {
    isOpen,
    isLoading,
    setIsOpen,
    sidebarItems,
    staticSidebarItems,
    dynamicSidebarItems,
  };
});
