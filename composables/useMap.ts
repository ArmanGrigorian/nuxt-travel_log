import { computed, onMounted, ref } from "vue";

export default function useMap() {
  const colorMode = useColorMode();
  const defaultCenter = [44.50349, 40.1772];
  const center = ref(defaultCenter);
  const zoom = ref(12);

  const style = computed(() =>
    colorMode.value === "dark"
      ? "/styles/dark.json"
      : "https://tiles.openfreemap.org/styles/liberty",
  );


  onMounted(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          center.value = [position.coords.longitude, position.coords.latitude];
        },
        (error) => {
          console.error(error);
          center.value = [44.50349, 40.1772];
        },
      );
    }
  });

  return {
    style,
    center,
    zoom,
  };
}
