"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  // State to hold the timeout ID so we can clear it
  const [timeoutId, setTimeoutId] = useState(null);

  // When the mouse enters, clear any pending close timeouts and open the menu
  const handleMouseEnter = (menu) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setOpenMenu(menu);
  };

  // When the mouse leaves, set a small delay before closing the menu
  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setOpenMenu(null);
    }, 100); // 100ms delay to allow moving the cursor to the dropdown
    setTimeoutId(id);
  };

  // A single function to handle mobile link clicks to close the menu
  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileProductsOpen(false); // Also close the submenu
  };

  return (
    <header className="w-full h-20 shadow-lg bg-[#132b4a] text-white relative z-50 font-serif">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between h-full px-6">

        {/* Logo */}
        <div className="hidden md:flex font-bold flex-shrink-0">
      <Link href="/" className="flex items-center">
        <Image
          src="/Logo.jpg"
          alt="Nihal Finserv"
          width={120}
          height={30}
          className="h-auto w-auto shadow-lg"
          priority // optional: ensures logo loads quickly
        />
      </Link>
    </div>


        {/* Navigation */}
        <nav className="hidden md:flex flex-1 justify-center gap-2 items-center text-sm">
          <a href="/" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            Home
          </a>
          <a href="#" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            Company
          </a>

          {/* Products Dropdown - Mouse events are on this parent div */}
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
                      <a href="/products/crushes" className="hover:text-blue-400 transition-colors">Crushes</a>
                    </div>
                    <a href="#" className="hover:text-blue-400 transition-colors">Jaw Crushers</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Cone Crushers</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Roll Crushers</a>
                  </div>
                  {/* Column 2: Mobile Series */}
                  <div className="flex flex-col space-y-3">
                    <div className="font-semibold text-base mb-2">
                      <a href="#" className="hover:text-blue-400 transition-colors">Mobile Series</a>
                    </div>
                    <a href="#" className="hover:text-blue-400 transition-colors">Track Mounted Jaw Crusher</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Track Mounted Cone Crusher</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Track Mounted Endurer</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Track Mounted Vertical Shift Impactor</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Track Mounted Screen</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Track Mounted Scalper</a>
                  </div>
                  {/* Column 3: Semi Mobile Series */}
                  <div className="flex flex-col space-y-3">
                    <div className="font-semibold text-base mb-2">
                      <a href="/products/semi-mobile-series" className="hover:text-blue-400 transition-colors">Semi Mobile Series</a>
                    </div>
                    <a href="#" className="hover:text-blue-400 transition-colors">Pro Fast Jaw</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Pro Fast Cone</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">Pro Fast Vertical Shift Impactor</a>
                  </div>
                  {/* Column 4: Feeders and Impactors */}
                  <div className="flex flex-col space-y-3">
                    <div className="font-semibold text-base mb-2">
                      <a href="/products/feeders" className="hover:text-blue-400 transition-colors">Feeders</a>
                    </div>
                    <a href="/products/feeders/grizzly" className="hover:text-blue-400 transition-colors">Grizzly Feeder</a>
                    <a href="/products/feeders/feeder-screen" className="hover:text-blue-400 transition-colors">Feeder Screen</a>
                    <a href="/products/feeders/pan-feeder" className="hover:text-blue-400 transition-colors">Pan Feeder</a>
                    <div className="font-semibold text-base mt-4 mb-2">
                      <a href="/products/impactors" className="hover:text-blue-400 transition-colors">Impactors</a>
                    </div>
                    <a href="/products/impactors/vsi" className="hover:text-blue-400 transition-colors">Vertical Shift Impactor</a>
                    <a href="/products/impactors/hsi" className="hover:text-blue-400 transition-colors">Horizontal Shift Impactor</a>
                  </div>
                  {/* Column 5: Screens, Washing, Classifier */}
                  <div className="flex flex-col space-y-3">
                    <div className="font-semibold text-base mb-2">
                      <a href="/products/screens" className="hover:text-blue-400 transition-colors">Screens</a>
                    </div>
                    <a href="/products/screens/vibrating" className="hover:text-blue-400 transition-colors">Vibrating Screen</a>
                    <div className="font-semibold text-base mt-4 mb-2">
                      <a href="/products/washing-systems" className="hover:text-blue-400 transition-colors">Washing Systems</a>
                    </div>
                    <a href="/products/washing-systems/sand-washer" className="hover:text-blue-400 transition-colors">Sand Washer</a>
                    <a href="/products/washing-systems/dual-sand-washer" className="hover:text-blue-400 transition-colors">Dual Sand Washer</a>
                    <div className="font-semibold text-base mt-4 mb-2">
                      <a href="/products/classifier" className="hover:text-blue-400 transition-colors">Classifier</a>
                    </div>
                    <a href="#" className="hover:text-blue-400 transition-colors">Pro Air Classifier</a>
                  </div>
                  <div className="font-semibold text-base mb-2">
                    <a href="/products/screens" className="hover:text-blue-400 transition-colors">Concerete Batching Solution </a>
                  </div>
                  <div className="font-semibold text-base mb-2">
                    <a href="/products/screens" className="hover:text-blue-400 transition-colors">Mechanical Road Paver </a>
                  </div>
                  <div className="font-semibold text-base mb-2">
                    <a href="/products/screens" className="hover:text-blue-400 transition-colors">EV -  Dumper Truck </a>
                  </div>
                  <div className="font-semibold text-base mb-2">
                    <a href="/products/screens" className="hover:text-blue-400 transition-colors">EV- Tractor Trailer Truck </a>
                  </div>
                </div>
              </div>
            )}
          </div>
          <a href="/blogs" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            Blogs
          </a>
          <a href="/facilities" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            Facilities
          </a>
          <a href="/international" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            International
          </a>
          <a href="/services-and-parts" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            Services & Parts
          </a>
          <a href="/news" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            News
          </a>
          <a href="/contact" className="relative group px-3 py-2 rounded-lg transition-colors duration-300 hover:bg-[#204066]">
            Contact Us
          </a>
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
          <a href="/" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">
            Home
          </a>
          <a href="/about" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">
            About Us
          </a>

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
                    <a href="/products/crushes" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Crushes</a>
                  </div>
                  <a href="/products/crushes/jaw" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Jaw Crushers</a>
                  <a href="/products/crushes/cone" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Cone Crushers</a>
                  <a href="/products/crushes/roll" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Roll Crushers</a>
                </div>
                {/* Column 2: Mobile Series */}
                <div>
                  <div className="font-semibold mb-2">
                    <a href="/products/mobile-series" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Mobile Series</a>
                  </div>
                  <a href="/products/mobile-series/jaw-crusher" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Track Mounted Jaw Crusher</a>
                  <a href="/products/mobile-series/cone-crusher" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Track Mounted Cone Crusher</a>
                  <a href="#" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Track Mounted Endurer</a>
                  <a href="/products/mobile-series/impactor" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Track Mounted Vertical Shift Impactor</a>
                  <a href="/products/mobile-series/screen" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Track Mounted Screen</a>
                  <a href="/products/mobile-series/scalper" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Track Mounted Scalper</a>
                </div>
                {/* Column 3: Semi Mobile Series */}
                <div>
                  <div className="font-semibold mb-2">
                    <a href="/products/semi-mobile-series" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Semi Mobile Series</a>
                  </div>
                  <a href="/products/semi-mobile-series/pro-fast-jaw" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Pro Fast Jaw</a>
                  <a href="/products/semi-mobile-series/pro-fast-cone" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Pro Fast Cone</a>
                  <a href="/products/semi-mobile-series/vsi" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Pro Fast Vertical Shift Impactor</a>
                </div>
                {/* Column 4: Feeders and Impactors */}
                <div>
                  <div className="font-semibold mb-2">
                    <a href="/products/feeders" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Feeders</a>
                  </div>
                  <a href="/products/feeders/grizzly" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Grizzly Feeder</a>
                  <a href="/products/feeders/feeder-screen" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Feeder Screen</a>
                  <a href="/products/feeders/pan-feeder" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Pan Feeder</a>
                  <div className="font-semibold mt-4 mb-2">
                    <a href="/products/impactors" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Impactors</a>
                  </div>
                  <a href="/products/impactors/vsi" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Vertical Shift Impactor</a>
                  <a href="/products/impactors/hsi" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Horizontal Shift Impactor</a>
                </div>
                {/* Column 5: Screens, Washing, Classifier */}
                <div>
                  <div className="font-semibold mb-2">
                    <a href="/products/screens" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Screens</a>
                  </div>
                  <a href="/products/screens/vibrating" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Vibrating Screen</a>
                  <div className="font-semibold mt-4 mb-2">
                    <a href="/products/washing-systems" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Washing Systems</a>
                  </div>
                  <a href="/products/washing-systems/sand-washer" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Dual Sand Washer</a>
                  <a href="/products/washing-systems/dual-sand-washer" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Dual Sand Washer</a>
                  <div className="font-semibold mt-4 mb-2">
                    <a href="/products/classifier" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Classifier</a>
                  </div>
                  <a href="#" onClick={handleMobileLinkClick} className="block hover:text-blue-400 transition-colors">Pro Air Classifier</a>
                </div>
              </div>
            )}
          </div>
          <a href="/blogs" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">Blogs</a>
          <a href="/facilities" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">Facilities</a>
          <a href="/international" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">International</a>
          <a href="/services-and-parts" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">Services & Parts</a>
          <a href="/news" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">News</a>
          <a href="/contact" onClick={handleMobileLinkClick} className="block px-4 py-2 rounded-md hover:bg-[#204066] transition-colors duration-200">Contact Us</a>

          {/* Hire Us Button (Mobile) */}
          <button
            onClick={handleMobileLinkClick}
            className="bg-black w-full text-white py-2.5 rounded-full font-semibold shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 mt-4"
          >
            Hire Us →
          </button>
        </nav>
      )}
    </header>
  );
}
