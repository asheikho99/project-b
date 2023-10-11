export interface Category {
  title: string;
  href: string;
  disabled: boolean;
}

const sidebarCategories: Category[] = [
  {
    title: "Overview",
    href: "/dashboard/overview",
    disabled: false,
  },
  {
    title: "Bookings",
    href: "/dashboard/bookings",
    disabled: false,
  },
];

export const getCatgories = (): Category[] => {
  return sidebarCategories;
};
