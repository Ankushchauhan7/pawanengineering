// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-neutral-300">
      <div className=" px-4 py-14 mx-2 md:mx-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logopc.png" // 40x40 (put in /public/assets/)
                alt="Docmed"
                width={200}
                height={90}
                className="rounded-md"
              />
            </Link>

            {/* <p className="mt-6 max-w-sm leading-relaxed text-neutral-400">
              Firmament morning sixth subdue darkness creeping gathered divide.
            </p> */}

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-md bg-white/10 text-neutral-300 hover:bg-white/20 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-md bg-white/10 text-neutral-300 hover:bg-white/20 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
                className="grid h-12 w-12 place-items-center rounded-md bg-white/10 text-neutral-300 hover:bg-white/20 transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Departments */}
          <div>
            <h6 className=" text-white">Manufacuring</h6>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="#" className="hover:text-white">
                  Quality control
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  After sales services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Warranty
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Refurbishing
                </Link>
              </li>
              
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className=" text-white">Useful Links</h6>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="hover:text-white">
                  Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h6 className="text-white">Address</h6>
            <ul className="mt-6 space-y-4">
              <li className="text-neutral-400">
                Khasra No.509, United Paradise, behind Krishnagar Restaurant,
                Ganga Nahar, Meerut Road, Murad Nagar,Ghaziabad-201206, (Uttar Pradesh),
                India
              </li>
              <li>
                <a href="tel:+103674678934" className="hover:text-white">
                  +91 7736077740
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@pawanengineering.in"
                  className="hover:text-white"
                >
                  info@pawanengineering.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 mx-2 md:mx-16">
        <div className="mx-auto max-w-7xl px-4 py-5 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© 2025 Pawan Engineering Works. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
