// config/navLinks.ts
import {
  IoHomeOutline,
  IoMedkitOutline,
  IoSettingsOutline,
  IoInformationCircleOutline,
  IoCallOutline,
  IoCubeOutline,
  IoFlashOutline,
} from "react-icons/io5";
import { MdTableRestaurant } from "react-icons/md";
import type { IconType } from "react-icons";

export type NavLink = {
  label: string;
  href: string;
  icon?: IconType;
  children?: { label: string; href: string }[];  // ✅ dropdown support
};

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Medical Furniture", href: "/products" },
      { label: "OT Tables", href: "/products/ot-tables" },
      { label: "OT Lights", href: "/products/ot-lights" },
    ],
  },
  { label: "Ex-Stock Sale", href: "/ex-stock-sale" },
  { label: "Repairs & Parts", href: "/repairs-and-parts" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export const MOBILE_NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/", icon: IoHomeOutline },
  { label: "Medical Furniture", href: "/products", icon: IoMedkitOutline },
  { label: "OT Tables", href: "/products/ot-tables", icon: MdTableRestaurant },
  { label: "OT Lights", href: "/products/ot-lights", icon: IoFlashOutline },
  { label: "Ex-Stock Sale", href: "/ex-stock-sale", icon: IoCubeOutline },
  { label: "Repairs & Parts", href: "/repairs-and-parts", icon: IoSettingsOutline },
  { label: "About Us", href: "/about", icon: IoInformationCircleOutline },
  { label: "Contact Us", href: "/contact", icon: IoCallOutline },
];