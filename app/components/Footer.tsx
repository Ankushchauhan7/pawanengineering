// components/Footer.tsx
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-neutral-300">
      <div className=" px-4 py-14 mx-2 md:mx-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex flex-col leading-tight">
                <span className="text-base md:text-xl font-bold text-white">
                  Pawan Engineering Works
                </span>
                <span className="text-base md:text-lg font-bold">
                  <span className="text-blue-700">AAYU</span>
                  <span className="text-cyan-500">MED</span>
                </span>
              </div>
            </Link>

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
              <li> Own Factory </li>
              <li>Latest Machineries</li>
              <li>Experienced staff </li>
              <li>QC & Certifications</li>
              <li>Warranty, AMC & CMC</li>
              <li>18 + years in the industry </li>
            </ul>
          </div>
          {/* Departments */}
          <div>
            <h6 className=" text-white">Products</h6>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/products" className="hover:text-white">
                  ICU Beds
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Room & Ward Care
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Emergency Transfer
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Examination Room
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Treatment Devices
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Biomedical Waste
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Utility
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Operation Room
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  OB/GYN
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h6 className=" text-white">Useful Links</h6>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/coming-soon" className="hover:text-white">
                  Ex-Stock items
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="hover:text-white">
                  Customization
                </Link>
              </li>
              <li>
                <Link href="/repairs-and-parts" className="hover:text-white">
                  Repair & Parts
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="hover:text-white">
                  Refurbishing
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="hover:text-white">
                  Quotations & terms
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="hover:text-white">
                  Technical documents
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="hover:text-white">
                  FAQ
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
                Ganga Nahar, Meerut Road, Murad Nagar,Ghaziabad-201206, (Uttar
                Pradesh), India
              </li>
              <li>
                <a href="tel:+919810368018" className="hover:text-white">
                  +91- 9810368018
                  <br />
                  +91-9412622300
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
