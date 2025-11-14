// components/ServicesStrip.tsx
import Link from "next/link";
import { FiMonitor, FiPhoneCall } from "react-icons/fi";
import { MdMedicalServices } from "react-icons/md";

export default function ServicesStrip() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 ">
      {/* Card 1 */}
      <article className="bg-[#83C4FF] text-white/95">
        <div className=" mx-2 md:mx-16 px-6 py-12">
          <div className="flex items-start gap-4">
            <span className="grid h-10 w-10 place-items-center rounded border border-white/60">
              <FiMonitor className="text-white" size={20} />
            </span>
            <div>
              <h2 className="text-white">Hospitality</h2>
              <p className="mt-2 text-white/85">
                Clinical excellence must be the priority for any health care
                service provider.
              </p>
              <Link
                href="/apply-bed"
                className="mt-5 inline-block rounded-md border border-white/70 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
              >
                Apply For A Bed
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Card 2 (darker) */}
      <article className="bg-sky-400/60 text-white">
        <div className=" mx-2 md:mx-16 px-6 py-12">
          <div className="flex items-start gap-4">
            <span className="grid h-10 w-10 place-items-center rounded border border-white/70">
              <FiPhoneCall className="text-white" size={20} />
            </span>
            <div>
              <h2 className="text-white">Emergency Care</h2>
              <p className="mt-2 text-white/90">
                Clinical excellence must be the priority for any health care
                service provider.
              </p>
              <a
                href="tel:+106723563567"
                className="mt-5 inline-block rounded-md border border-white/75 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
              >
                +10 672 356 3567
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Card 3 */}
      <article className="bg-[#83C4FF] text-white/95">
        <div className=" mx-2 md:mx-16 px-6 py-12">
          <div className="flex items-start gap-4">
            <span className="grid h-10 w-10 place-items-center rounded border border-white/60">
              <MdMedicalServices className="text-white" size={20} />
            </span>
            <div>
              <h2 className=" text-white">Chamber Service</h2>
              <p className="mt-2 text-white/85">
                Clinical excellence must be the priority for any health care
                service provider.
              </p>
              <Link
                href="/appointment"
                className="mt-5 inline-block rounded-md border border-white/70 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
              >
                Make An Appointment
              </Link>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
