import Departments from "./components/Departments";
import DoctorsCarousel from "./components/DoctorsCarousel";
import EmergencySection from "./components/EmergencySection ";
import Footer from "./components/Footer";
import Header from "./components/header";
import HeroBanner from "./components/HeroBanner";
import ServicesStrip from "./components/ServicesStrip";

export default function Home() {
  return (
    <div className="relative max-w-7xl mx-auto">
      <main className="">
        <Header />
        <HeroBanner />
        <ServicesStrip />
        <Departments />
        <DoctorsCarousel />
        <EmergencySection />
        <Footer />
      </main>
    </div>
  );
}
