export const useSidebarStore = defineStore("sidebarStore", () => {
  const isOpen = ref(true);

  function setIsOpen(status?: boolean): void {
    if (status) {
      localStorage.setItem("sidebarIsOpen", JSON.stringify(status));
      isOpen.value = status;
    } else {
      localStorage.setItem("sidebarIsOpen", JSON.stringify(!isOpen.value));
      isOpen.value = !isOpen.value;
    }
  }

  onMounted(() => {
    const isOpenInLocal = localStorage.getItem("sidebarIsOpen");

    if (isOpenInLocal) {
      isOpen.value = JSON.parse(isOpenInLocal);
    } else isOpen.value = true;
  });

  return {
    isOpen,
    setIsOpen,
  };
});
