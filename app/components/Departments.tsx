import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Img1 from "../assets/1.png.webp";
import Img2 from "../assets/2.png.webp";
import Img3 from "../assets/3.png.webp";
import Img4 from "../assets/4.png.webp";
import Img5 from "../assets/5.png.webp";
import Img6 from "../assets/6.png.webp";

type Dept = {
  title: string;
  desc: string;
  image: StaticImageData;
  href: string;
};

const DEPARTMENTS: Dept[] = [
  {
    title: "Eye Care",
    desc: "Esteem spirit temper too say adieus who direct esteem.",
    image: Img1,
    href: "/departments/eye-care",
  },
  {
    title: "Physical Therapy",
    desc: "Esteem spirit temper too say adieus who direct esteem.",
    image: Img2,
    href: "/departments/physical-therapy",
  },
  {
    title: "Dental Care",
    desc: "Esteem spirit temper too say adieus who direct esteem.",
    image: Img3,
    href: "/departments/dental-care",
  },
  {
    title: "Diagnostic Test",
    desc: "Esteem spirit temper too say adieus who direct esteem.",
    image: Img4,
    href: "/departments/diagnostic-test",
  },
  {
    title: "Skin Surgery",
    desc: "Esteem spirit temper too say adieus who direct esteem.",
    image: Img5,
    href: "/departments/skin-surgery",
  },
  {
    title: "Surgery Service",
    desc: "Esteem spirit temper too say adieus who direct esteem.",
    image: Img6,
    href: "/departments/surgery-service",
  },
];

export default function Departments() {
  return (
    <section className="bg-sky-50/30 py-14">
      <div className="mx-2 md:mx-16 px-4">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold text-slate-800">
            Our Departments
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-sky-500" />
          <p className="mt-4 text-slate-600">
            Esteem spirit temper too say adieus who direct esteem. It esteems
            luckily or picture placing drawing.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
          {DEPARTMENTS.map((d) => (
            <article
              key={d.title}
              className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-100 transition hover:shadow-md focus-within:shadow-md"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl">
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  priority={false}
                />
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800">
                  {d.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {d.desc}
                </p>

                <Link
                  href={d.href}
                  className="mt-3 inline-block text-sm font-medium text-sky-600 hover:text-sky-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/30"
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
