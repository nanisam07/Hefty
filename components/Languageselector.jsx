"use client";
import { useState } from "react";
import Image from "next/image";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({
    name: "Select Language",
    flag: "/flags/world.png",
  });

  const languages = [
    { name: "Arabic", flag: "/flags/arabic.png" },
    { name: "Thai", flag: "/flags/thai.png" },
    { name: "Indonesian", flag: "/flags/indonesia.png" },
    { name: "Russian", flag: "/flags/russia.png" },
  ];

  return (
    <div className="relative inline-block text-left">
      {/* Outer container instead of <button> */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-white text-black rounded-full cursor-pointer  shadow-lg"
      >
        <Image
          src={selected.flag}
          alt={selected.name}
          width={20}
          height={20}
          className="mr-2 rounded-full"
        />
        <span>{selected.name}</span>
      </div>

      {isOpen && (
        <div className="absolute mt-2 w-48 bg-black rounded-md shadow-lg z-10">
          {languages.map((lang) => (
            <div
              key={lang.name}
              onClick={() => {
                setSelected(lang);
                setIsOpen(false);
              }}
              className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              <Image
                src={lang.flag}
                alt={lang.name}
                width={20}
                height={20}
                className="mr-2 rounded-full"
              />
              <span>{lang.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
