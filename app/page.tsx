import ActionButtons from "./components/ActionButtons";
import FeaturedProducts from "./components/FeaturedProducts";
import HeroBannerWithOverlay from "./components/HeroBanner";
import HeroBanner from "./components/HeroBanner";
import KeyStrengths from "./components/KeyStrengths";
import QuickEnquiry from "./components/QuickEnquiry";

export default function Home() {
  return (
    <>
      {/* <HeroBanner /> */}
      <HeroBannerWithOverlay/>
      <ActionButtons />
      <FeaturedProducts />
      {/* <ServicesStrip /> */}
      {/* <Departments /> */}
      <KeyStrengths />
      <QuickEnquiry />
      {/* <DoctorsCarousel />
      <EmergencySection /> */}
    </>
  );
}
