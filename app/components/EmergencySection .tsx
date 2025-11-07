import Image from "next/image";
import Link from "next/link";
import EmergencyImage from "../assets/emergency.webp";
import Appointment from "../assets/appointment.webp";
const EmergencySection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2">
      {/* Left Section - Emergency Contact */}
      <div className="relative h-[200px] md:h-[300px]">
        {/* Background Image */}
        <Image
          src={EmergencyImage}
          alt="Doctor smiling"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-sky-600/80" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
            For Any Emergency Contact
          </h3>
          <p className="text-white/90 mb-5">
            Esteem spirit temper too say adieus.
          </p>
          <a
            href="tel:+103784673467"
            className="border border-white rounded-full px-6 py-2 text-white hover:bg-white hover:text-sky-600 transition"
          >
            +91 7736077740
          </a>
        </div>
      </div>

      {/* Right Section - Appointment */}
      <div className="relative h-[200px] md:h-[300px]">
        <Image
          src={Appointment}
          alt="Female doctor"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-sky-500/80" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
          <h3 className="text-2xl sm:text-3xl font-semibold mb-2">
            Make an Online Appointment
          </h3>
          <p className="text-white/90 mb-5">
            Esteem spirit temper too say adieus.
          </p>
          <Link
            href="/appointment"
            className="border border-white rounded-full px-6 py-2 text-white hover:bg-white hover:text-sky-600 transition"
          >
            Make An Appointment
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmergencySection;
