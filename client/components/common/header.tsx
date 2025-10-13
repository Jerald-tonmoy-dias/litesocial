"use client";

import { useState } from "react";
import { LuSquareMenu, LuX } from "react-icons/lu";
import Button from "./button";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Product", href: "#" },
  { label: "Features", href: "#" },
  { label: "Marketplace", href: "#" },
  { label: "Company", href: "#" },
];

function Logo() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
      <path
        d="M10 15C10 15 15 10 20 15C25 20 20 25 20 25"
        stroke="#6366f1"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M20 15C20 15 25 10 30 15C35 20 30 25 30 25"
        stroke="#8b5cf6"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NavLinks({
  links,
  onClick,
  className = "",
}: {
  links: NavLink[];
  onClick?: () => void;
  className?: string;
}) {
  return (
    <div className={`flex flex-col md:flex-row gap-6 ${className}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onClick}
          className="hover:text-gray-300 transition-colors text-base md:text-sm"
        >
          {link.label}
        </a>
      ))}
    </div>
  );
}

function AuthButtons({
  variant = "desktop",
}: {
  variant?: "desktop" | "mobile";
}) {
  return (
    <div
      className={`flex items-center ${
        variant === "desktop"
          ? "gap-4"
          : "gap-3 flex-col mt-4 border-t border-gray-800 pt-4"
      }`}
    >
      <a
        href="#"
        className={`hover:text-gray-300 transition-colors ${
          variant === "mobile" && "text-lg"
        }`}
      >
        Log in
      </a>
      <Button text="Sign Up" variant="primary" size="md" />
    </div>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <header className="bg-[#0f1729] text-white">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between px-8 py-4">
        <Logo />
        <NavLinks links={navLinks} className="items-center" />
        <AuthButtons variant="desktop" />
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-4 py-4">
          <Logo />

          <div className="flex items-center gap-3">
            <Button text="Sign Up" variant="primary" size="sm" />
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-800 rounded transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <LuX size={24} /> : <LuSquareMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-[#0f1729] z-50 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full px-6 py-6">
            <div className="flex items-center justify-between mb-4">
              <Logo />
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-gray-800 rounded transition-colors"
                aria-label="Close menu"
              >
                <LuX size={24} />
              </button>
            </div>

            <NavLinks
              links={navLinks}
              onClick={toggleMenu}
              className="mt-6 space-y-2"
            />
            <AuthButtons variant="mobile" />
          </div>
        </div>
      </nav>
    </header>
  );
}
