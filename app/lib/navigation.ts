// config/navLinks.ts
import {
  IoHomeOutline,
  IoMedkitOutline,
  IoSettingsOutline,
  IoInformationCircleOutline,
  IoCallOutline,
  IoCubeOutline,
} from "react-icons/io5";
import type { IconType } from "react-icons";

export type NavLink = {
  label: string;
  href: string;
  icon?: IconType; // ✅ optional now
};

export const MOBILE_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", icon: IoHomeOutline },
  { label: "Products", href: "/products", icon: IoMedkitOutline },
  { label: "Ex-Stock Sale", href: "/ex-stock-sale", icon: IoCubeOutline },
  {
    label: "Repairs & Parts",
    href: "/repairs-and-parts",
    icon: IoSettingsOutline,
  },
  { label: "About Us", href: "/about", icon: IoInformationCircleOutline },
  { label: "Contact Us", href: "/contact", icon: IoCallOutline },
];

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Ex-Stock Sale", href: "/coming-soon" },
  { label: "Repairs & Parts", href: "/repairs-and-parts" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];
