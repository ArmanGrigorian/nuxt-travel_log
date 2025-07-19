<template>
  <nav class="flex flex-1 flex-col">
    <ul class="flex flex-1 flex-col">
      <li>
        <SidebarButton
label="Locations"
icon="tabler:map"
href="/dashboard" />
      </li>
      <li class="flex-1">
        <SidebarButton
          label="Add Location"
          icon="tabler:plus"
          href="/dashboard/add"
        />
      </li>
      <li class="divider"/>
      <li class="pb-5">
        <SidebarButton
          label="Sign Out"
          icon="tabler:logout-2"
          href="/sign-out"
        />
      </li>
    </ul>
  </nav>
</template>
