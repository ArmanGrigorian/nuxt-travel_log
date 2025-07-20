import type { T_SidebarItem } from "~/types/sidebar";

export const staticSidebarItems: T_SidebarItem[] = [
  {
    label: "Locations",
    icon: "tabler:map",
    href: "/dashboard",
  },
  {
    label: "Add Location",
    icon: "tabler:square-plus",
    href: "/dashboard/add",
  },
];
