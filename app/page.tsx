import Departments from "./components/Departments";
import DoctorsCarousel from "./components/DoctorsCarousel";
import EmergencySection from "./components/EmergencySection ";
import FeaturedProducts from "./components/FeaturedProducts";
import HeroBanner from "./components/HeroBanner";
import KeyStrengths from "./components/KeyStrengths";
import QuickEnquiry from "./components/QuickEnquiry";
import ServicesStrip from "./components/ServicesStrip";

export default function Home() {
  return (
    <>
      {/* <HeroBanner /> */}
      <FeaturedProducts />
      {/* <ServicesStrip /> */}
      {/* <Departments /> */}
      <KeyStrengths />
      <QuickEnquiry/>
      {/* <DoctorsCarousel />
      <EmergencySection /> */}
    </>
  );
}
