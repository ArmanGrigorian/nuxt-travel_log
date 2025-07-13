<script lang="ts" setup>
const sidebarStore = useSidebarStore();
</script>

<template>
  <aside
    :class="
      cn('bg-base-100 flex flex-col', sidebarStore.isOpen ? 'w-64' : 'w-14')
    "
  >
    <button
      type="button"
      :class="
        cn(
          'hover:bg-base-200 flex cursor-pointer px-4 py-2',
          sidebarStore.isOpen ? 'justify-end' : 'justify-center',
        )
      "
      @click="() => sidebarStore.setIsOpen()"
    >
      <Icon
        name="tabler:chevron-left"
        size="24"
        :class="
          cn('transition', sidebarStore.isOpen ? 'rotate-0' : 'rotate-180')
        "
      />
    </button>

    <SidebarNav />
  </aside>
</template>
