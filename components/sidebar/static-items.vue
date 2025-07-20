<script lang="ts" setup>
const sidebarStore = useSidebarStore();
</script>

<template>
  <template v-if="sidebarStore.isLoading">
    <AppSkeleton is="li" />
    <AppSkeleton is="li" />
  </template>
  <template v-else>
    <li
      v-for="sidebarItem in sidebarStore.staticSidebarItems"
      :key="sidebarItem.href"
    >
      <SidebarButton
        :label="sidebarItem.label"
        :icon="sidebarItem.icon"
        :href="sidebarItem.href"
      />
    </li>
  </template>
</template>
