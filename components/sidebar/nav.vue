<script lang="ts" setup>
const sidebarStore = useSidebarStore();
</script>

<template>
  <nav class="flex flex-1 flex-col">
    <ul class="flex flex-1 flex-col gap-1">
      <SidebarStaticItems />

      <AppDivider is="li" />

      <SidebarDynamicItems v-if="sidebarStore.dynamicSidebarItems.length" />
      <li v-else class="flex-1"/>

      <AppDivider is="li" />
      
      <li class="pb-2">
        <SidebarButton
          label="Sign Out"
          icon="tabler:logout-2"
          href="/sign-out"
        />
      </li>
    </ul>
  </nav>
</template>
