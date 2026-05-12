"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaChevronDown,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { MAIN_NAV_LINKS, MOBILE_NAV_LINKS } from "../lib/navigation";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // ── Sticky nav on scroll ──────────────────────────────
  useEffect(() => {
    const onScroll = () => setIsFixed(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Close mobile menu on outside click ───────────────
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // ── Close dropdown on outside click ──────────────────
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header>
      {/* ── Top Bar ───────────────────────────────────── */}
      <div className="bg-blue-50">
        <div className="flex flex-col gap-2 py-3 px-4 mx-2 items-center justify-center md:mx-16 lg:justify-between lg:flex-row">

          {/* Social icons */}
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
                className="text-[#C7C7C7] hover:text-pink-600 transition-colors text-xs sm:text-sm"
              >
                <FaInstagram />
              </Link>
            </li>
          </ul>

          {/* Contact info */}
          <ul className="flex flex-col items-center gap-1 lg:gap-14 sm:flex sm:flex-row">
            <li className="flex items-center gap-2 text-xs text-[#C7C7C7] sm:text-sm">
              <MdEmail className="text-blue-300" fontSize={15} />
              support@pawanengineering.in
            </li>
            <li className="flex items-center gap-2 text-xs text-[#C7C7C7] sm:text-sm">
              <FaPhoneAlt className="text-blue-300" fontSize={15} />
              +91-9810368018, +91-9412622300
            </li>
          </ul>

        </div>
      </div>

      {/* ── Main Nav ──────────────────────────────────── */}
      <div className="relative" ref={menuRef}>
        <div
          className={`transition-all duration-300 ease-linear ${
            isFixed
              ? "fixed top-0 z-50 w-full bg-white shadow-lg py-2"
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

            {/* ── Desktop Nav ───────────────────────── */}
            <nav className="hidden lg:flex text-sm">
              <ul className="flex items-center gap-6">
                {MAIN_NAV_LINKS.map((link) =>
                  link.children ? (
                    // ✅ Products — dropdown
                    <li key={link.href} ref={dropdownRef} className="relative">
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex items-center gap-1 text-slate-700 hover:text-blue-700 transition-colors font-medium"
                      >
                        {link.label}
                        <FaChevronDown
                          className={`text-xs transition-transform duration-200 ${
                            dropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Dropdown panel */}
                      {dropdownOpen && (
                        <div className="absolute top-full left-0 mt-3 w-52 bg-white rounded-xl shadow-xl ring-1 ring-slate-100 z-50 overflow-hidden">
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setDropdownOpen(false)}
                              className="flex items-center px-4 py-3 text-sm text-slate-700 hover:bg-sky-50 hover:text-blue-700 transition-colors border-b border-slate-100 last:border-0"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </li>
                  ) : (
                    // Normal link
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-slate-700 hover:text-blue-700 transition-colors font-medium"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
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
          </div>

          {/* ── Mobile Nav ────────────────────────────── */}
          <div
            className={`lg:hidden overflow-hidden transition-all duration-300 ${
              menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <nav className="backdrop-blur-md bg-white/80 px-4 py-3 border-t border-slate-200">
              <ul className="flex flex-col gap-1">
                {MOBILE_NAV_LINKS.map(({ label, href, icon: Icon }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 text-sm text-slate-700 px-3 py-2 rounded-md hover:bg-sky-100 transition"
                    >
                      {Icon && <Icon className="text-sky-600" size={18} />}
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;