<script lang="ts" setup>
const { style, center, zoom } = useMap();
</script>

<template>
  <MglMap
:map-style="style"
:center="center"
:zoom="zoom">
    <MglNavigationControl />
  </MglMap>
</template>
