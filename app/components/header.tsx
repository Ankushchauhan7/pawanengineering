"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Scroll behavior
  useEffect(() => {
    const onScroll = () => setIsFixed(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <header>
      {/* --- Top Bar --- */}
      <div className="bg-blue-50">
        <div className="flex flex-col gap-2 py-3 px-4 mx-2 items-center justify-center md:mx-16 lg:justify-between lg:flex-row">
          <ul className="flex gap-4">
            <li>
              <Link
                href="https://linkedin.com"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C7C7C7] hover:text-blue-700 transition-colors text-xs sm:text-sm"
              >
                <FaLinkedinIn />
              </Link>
            </li>
            <li>
              <Link
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C7C7C7] hover:text-blue-700 transition-colors text-xs sm:text-sm"
              >
                <FaFacebookF />
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C7C7C7] hover:text-pink-600 transition-colors  text-xs sm:text-sm"
              >
                <FaInstagram />
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col items-center gap-1 lg:gap-14 sm:flex sm:flex-row">
            <li className="flex items-center gap-2 text-xs  text-[#C7C7C7] sm:text-sm">
              <MdEmail className="text-blue-300" fontSize={15} />
              info@pawanengineering.in
            </li>
            <li className="flex items-center gap-2 text-xs text-[#C7C7C7] sm:text-sm">
              <FaPhoneAlt className="text-blue-300" fontSize={15} /> +91-
              9810368018, +91-9412622300
            </li>
          </ul>
        </div>
      </div>

      {/* --- Main Nav --- */}
      <div className="relative" ref={menuRef}>
        <div
          className={`transition-all duration-300 ease-linear ${
            isFixed
              ? "fixed top-0 z-50 w-full max-w-7xl bg-white shadow-lg py-2"
              : "bg-white"
          }`}
        >
          <div className="flex justify-between gap-3 py-3 px-4 mx-2 items-center md:mx-16">
            {/* Logo */}
            <div className="relative flex items-center justify-start lg:flex-1">
              <Link href="/">
                <div className="flex flex-col leading-tight">
                  <span className="text-base md:text-2xl font-bold text-black">
                    Pawan Engineering Works
                  </span>
                  <span className="text-base md:text-xl font-bold">
                    <span className="text-blue-700">AAYU</span>
                    <span className="text-cyan-500">MED</span>
                  </span>
                </div>
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex lg:flex-2 text-sm ">
              <ul className="lg:flex lg:flex-1 lg:justify-evenly lg:items-center gap-3">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/products">Products</Link>
                </li>
                <li>
                  <Link href="/coming-soon">Repairs and parts</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                className="flex items-center"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle Menu"
              >
                {menuOpen ? (
                  <IoMdClose fontSize={28} className="text-gray-800" />
                ) : (
                  <IoIosMenu fontSize={28} className="text-gray-800" />
                )}
              </button>
            </div>

            {/* Desktop CTA */}
            {/* <div className="hidden justify-end lg:flex lg:flex-1">
              <Link
                href="/appointment"
                className="inline-flex items-center rounded-lg text-sm bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 font-medium shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-600/30"
              >
                Make an Appointment
              </Link>
            </div> */}
          </div>

          {/* --- Mobile Nav Dropdown --- */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="bg-white border-t border-gray-100 px-4 py-3">
              <ul className="flex flex-col gap-4 text-gray-800">
                {["Home", "Products", "About", "Contact"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="block hover:text-sky-700 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/appointment"
                    onClick={() => setMenuOpen(false)}
                    className="block rounded-lg bg-sky-600 text-white text-center px-4 py-2 font-medium hover:bg-sky-700 transition"
                  >
                    Make an Appointment
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
