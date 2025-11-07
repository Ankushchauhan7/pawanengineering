import Departments from "./components/Departments";
import DoctorsCarousel from "./components/DoctorsCarousel";
import EmergencySection from "./components/EmergencySection ";
import HeroBanner from "./components/HeroBanner";
import ServicesStrip from "./components/ServicesStrip";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ServicesStrip />
      <Departments />
      <DoctorsCarousel />
      <EmergencySection />
    </>
  );
}
