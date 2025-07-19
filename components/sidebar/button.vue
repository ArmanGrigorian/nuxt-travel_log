<script lang="ts" setup>
const props = defineProps<{
  label: string;
  icon: string;
  href: string;
  className?: string;
}>();

const route = useRoute();
const sidebarStore = useSidebarStore();
</script>

<template>
  <SidebarTooltip :label="props.label" :show="!sidebarStore.isOpen">
    <NuxtLink
      :to="href"
      :class="
        cn(
          'hover:bg-base-300 flex cursor-pointer items-center gap-4 px-4 py-2 transition-colors',
          sidebarStore.isOpen ? 'justify-start' : 'justify-center',
          route.path === props.href ? 'bg-base-200' : '',
          className,
        )
      "
    >
      <Icon :name="props.icon" size="24" />
      <span v-if="sidebarStore.isOpen" class="min-w-max">{{
        props.label
      }}</span>
    </NuxtLink>
  </SidebarTooltip>
</template>
