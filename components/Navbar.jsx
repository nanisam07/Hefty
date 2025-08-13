"use client";
import { useState } from "react";
import Link from 'next/link';
import Image from "next/image";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const handleMouseEnter = (menu) => {
    setOpenMenu(menu);
  };

  const handleMouseLeave = () => {
    setOpenMenu(null);
  };

  return (
    <header className="w-full h-20 shadow-lg font-sans bg-[#132b4a] text-white relative z-50 font-serif">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-full px-6">

        {/* Logo */}
        <div className="hidden md:flex font-bold flex-shrink-0">
          <Link href="/">
            <Image
              src="/Logo.jpg"
              alt="Nihal Finserv"
              width={120}
              height={30}
              className="h-auto w-auto shadow-lg"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-2 items-center text-sm">
          <Link href="/" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            Home
          </Link>
          <Link href="#" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            Company
          </Link>

          {/* Products Dropdown */}
          <div
            className="relative group h-full flex items-center"
            onMouseEnter={() => handleMouseEnter("products")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="cursor-pointer px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
              Products ▾
            </span>
            {openMenu === "products" && (
              <div className="fixed top-20 left-0 right-0 bg-[#0F2D54] shadow-2xl rounded-b-lg p-8 transition-all duration-300 ease-in-out opacity-100 animate-slide-down">
                <div className="grid grid-cols-5 gap-8 max-w-[1280px] mx-auto text-white text-sm">
                  {/* Column 1: Crushes */}
                  <div className="flex flex-col space-y-3">
                    <div className="font-semibold text-base mb-2">
                      <Link href="/products/crushes" className="hover:text-blue-400 transition-colors">Crushes</Link>
                    </div>
                    <Link href="#" className="hover:text-blue-400 transition-colors">Jaw Crushers</Link>
                    <Link href="#" className="hover:text-blue-400 transition-colors">Cone Crushers</Link>
                    <Link href="#" className="hover:text-blue-400 transition-colors">Roll Crushers</Link>
                  </div>
                  {/* Column 2: Mobile Series */}
                  <div className="flex flex-col space-y-3">
                    <div className="font-semibold text-base mb-2">
                      <Link href="#" className="hover:text-blue-400 transition-colors">Mobile Series</Link>
                    </div>
                    <Link href="#" className="hover:text-blue-400 transition-colors">Track Mounted Jaw Crusher</Link>
                    <Link href="#" className="hover:text-blue-400 transition-colors">Track Mounted Cone Crusher</Link>
                    <Link href="#" className="hover:text-blue-400 transition-colors">Track Mounted Endurer</Link>
                    <Link href="#" className="hover:text-blue-400 transition-colors">Track Mounted Vertical Shift Impactor</Link>
                    <Link href="#" className="hover:text-blue-400 transition-colors">Track Mounted Screen</Link>
                    <Link href="#" className="hover:text-blue-400 transition-colors">Track Mounted Scalper</Link>
                  </div>
                  {/* Column 3: Semi Mobile Series */}
                  <div className="flex flex-col space-y-3">
                    <div className="font-semibold text-base mb-2">
                      <Link href="/products/semi-mobile-series" className="hover:text-blue-400 transition-colors">Semi Mobile Series</Link>
                    </div>
                    <Link href="#" className="hover:text-blue-400 transition-colors">Pro Fast Jaw</Link>
                    <Link href="#" className="hover:text-blue-400 transition-colors">Pro Fast Cone</Link>
                    <Link href="#" className="hover:text-blue-400 transition-colors">Pro Fast Vertical Shift Impactor</Link>
                  </div>
                  {/* Column 4: Feeders and Impactors */}
                  <div className="flex flex-col space-y-3">
                    <div className="font-semibold text-base mb-2">
                      <Link href="/products/feeders" className="hover:text-blue-400 transition-colors">Feeders</Link>
                    </div>
                    <Link href="/products/feeders/grizzly" className="hover:text-blue-400 transition-colors">Grizzly Feeder</Link>
                    <Link href="/products/feeders/feeder-screen" className="hover:text-blue-400 transition-colors">Feeder Screen</Link>
                    <Link href="/products/feeders/pan-feeder" className="hover:text-blue-400 transition-colors">Pan Feeder</Link>
                    <div className="font-semibold text-base mt-4 mb-2">
                      <Link href="/products/impactors" className="hover:text-blue-400 transition-colors">Impactors</Link>
                    </div>
                    <Link href="/products/impactors/vsi" className="hover:text-blue-400 transition-colors">Vertical Shift Impactor</Link>
                    <Link href="/products/impactors/hsi" className="hover:text-blue-400 transition-colors">Horizontal Shift Impactor</Link>
                  </div>
                  {/* Column 5: Screens, Washing, Classifier */}
                  <div className="flex flex-col space-y-3">
                    <div className="font-semibold text-base mb-2">
                      <Link href="/products/screens" className="hover:text-blue-400 transition-colors">Screens</Link>
                    </div>
                    <Link href="/products/screens/vibrating" className="hover:text-blue-400 transition-colors">Vibrating Screen</Link>
                    <div className="font-semibold text-base mt-4 mb-2">
                      <Link href="/products/washing-systems" className="hover:text-blue-400 transition-colors">Washing Systems</Link>
                    </div>
                    <Link href="/products/washing-systems/sand-washer" className="hover:text-blue-400 transition-colors">Sand Washer</Link>
                    <Link href="/products/washing-systems/dual-sand-washer" className="hover:text-blue-400 transition-colors">Dual Sand Washer</Link>
                    <div className="font-semibold text-base mt-4 mb-2">
                      <Link href="/products/classifier" className="hover:text-blue-400 transition-colors">Classifier</Link>
                    </div>
                    <Link href="/products/classifier/air" className="hover:text-blue-400 transition-colors">Pro Air Classifier</Link>
                  </div>
                  <div className="font-semibold text-base mb-2">
                      <Link href="/products/screens" className="hover:text-blue-400 transition-colors">Concerete Batching Solution </Link>
                    </div>
                    <div className="font-semibold text-base mb-2">
                      <Link href="/products/screens" className="hover:text-blue-400 transition-colors">Mechanical Road Paver </Link>
                    </div>
                    <div className="font-semibold text-base mb-2">
                      <Link href="/products/screens" className="hover:text-blue-400 transition-colors">EV -  Dumper Truck </Link>
                    </div>
                    <div className="font-semibold text-base mb-2">
                      <Link href="/products/screens" className="hover:text-blue-400 transition-colors">EV- Tractor Trailer Truck </Link>
                    </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/blogs" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            Blogs
          </Link>
          <Link href="/facilities" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            Facilities
          </Link>
          <Link href="/international" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            International
          </Link>
          <Link href="/services-and-parts" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            Services & Parts
          </Link>
          <Link href="/news" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            News
          </Link>
          <Link href="/contact" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            Contact Us
          </Link>
        </nav>

        {/* Hire Us Button */}
        <div className="hidden md:flex flex-shrink-0">
          <button className="bg-black text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
            Hire Us →
          </button>
        </div>


        {/* Mobile Hamburger Button */}
        <div className="md:hidden p-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="text-white text-3xl focus:outline-none"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-[#0F2D54] text-white px-6 py-4 space-y-4 shadow-lg">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">
            About Us
          </Link>

          {/* Mobile Products collapsible */}
          <div>
            <button
              onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
              className="w-full text-left px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200 flex justify-between items-center"
              aria-expanded={mobileProductsOpen}
            >
              Products
              <span className="ml-2 transition-transform duration-200 transform">{mobileProductsOpen ? "▲" : "▼"}</span>
            </button>
            {mobileProductsOpen && (
              <div className="pl-4 mt-2 space-y-4 text-sm transition-all duration-300 ease-in-out overflow-hidden">
                {/* Column 1: Crushes */}
                <div>
                  <div className="font-semibold mb-2">
                    <Link href="/products/crushes" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Crushes</Link>
                  </div>
                  <Link href="/products/crushes/jaw" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Jaw Crushers</Link>
                  <Link href="/products/crushes/cone" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Cone Crushers</Link>
                  <Link href="/products/crushes/roll" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Roll Crushers</Link>
                </div>
                {/* Column 2: Mobile Series */}
                <div>
                  <div className="font-semibold mb-2">
                    <Link href="/products/mobile-series" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Mobile Series</Link>
                  </div>
                  <Link href="/products/mobile-series/jaw-crusher" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Track Mounted Jaw Crusher</Link>
                  <Link href="/products/mobile-series/cone-crusher" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Track Mounted Cone Crusher</Link>
                  <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Track Mounted Endurer</Link>
                  <Link href="/products/mobile-series/impactor" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Track Mounted Vertical Shift Impactor</Link>
                  <Link href="/products/mobile-series/screen" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Track Mounted Screen</Link>
                  <Link href="/products/mobile-series/scalper" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Track Mounted Scalper</Link>
                </div>
                {/* Column 3: Semi Mobile Series */}
                <div>
                  <div className="font-semibold mb-2">
                    <Link href="/products/semi-mobile-series" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Semi Mobile Series</Link>
                  </div>
                  <Link href="/products/semi-mobile-series/pro-fast-jaw" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Pro Fast Jaw</Link>
                  <Link href="/products/semi-mobile-series/pro-fast-cone" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Pro Fast Cone</Link>
                  <Link href="/products/semi-mobile-series/vsi" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Pro Fast Vertical Shift Impactor</Link>
                </div>
                {/* Column 4: Feeders and Impactors */}
                <div>
                  <div className="font-semibold mb-2">
                    <Link href="/products/feeders" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Feeders</Link>
                  </div>
                  <Link href="/products/feeders/grizzly" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Grizzly Feeder</Link>
                  <Link href="/products/feeders/feeder-screen" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Feeder Screen</Link>
                  <Link href="/products/feeders/pan-feeder" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Pan Feeder</Link>
                  <div className="font-semibold mt-4 mb-2">
                    <Link href="/products/impactors" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Impactors</Link>
                  </div>
                  <Link href="/products/impactors/vsi" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Vertical Shift Impactor</Link>
                  <Link href="/products/impactors/hsi" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Horizontal Shift Impactor</Link>
                </div>
                {/* Column 5: Screens, Washing, Classifier */}
                <div>
                  <div className="font-semibold mb-2">
                    <Link href="/products/screens" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Screens</Link>
                  </div>
                  <Link href="/products/screens/vibrating" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Vibrating Screen</Link>
                  <div className="font-semibold mt-4 mb-2">
                    <Link href="/products/washing-systems" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Washing Systems</Link>
                  </div>
                  <Link href="/products/washing-systems/sand-washer" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Sand Washer</Link>
                  <Link href="/products/washing-systems/dual-sand-washer" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Dual Sand Washer</Link>
                  <div className="font-semibold mt-4 mb-2">
                    <Link href="/products/classifier" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Classifier</Link>
                  </div>
                  <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block hover:text-blue-400 transition-colors">Pro Air Classifier</Link>
                </div>
              </div>
            )}
          </div>
          <Link href="/blogs" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">Blogs</Link>
          <Link href="/abb"  className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">Facilities</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">International</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">Services & Parts</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">News</Link>
          <Link href="#" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">Contact Us</Link>

          {/* Hire Us Button (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="bg-black w-full text-white py-2.5 rounded-full font-semibold shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 mt-4"
          >
            Hire Us →
          </button>
        </nav>
      )}
    </header>
  );
}
