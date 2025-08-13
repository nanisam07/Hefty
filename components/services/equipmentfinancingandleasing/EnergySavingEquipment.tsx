"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "Business PAN & registration documents",
  "Equipment quotation or project proposal",
  "Recent bank statements",
  "ITRs or audited financials",
  "Energy audit report (optional but preferred)",
];

export default function EnergySavingEquipmentFinancing() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/equipmentfinancing/ESE1.jpg"
            alt="Energy Efficiency Financing"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Invest in Efficiency. Save on Costs. Grow Sustainably.
          </h2>
          <p className="text-base mb-6">
            Energy-efficient upgrades like solar, HVAC, and automation can slash your operating expenses. With Nihal Finserv’s financing, you adopt green tech without draining your working capital.
          </p>
          <p className="text-base">
            Whether you’re upgrading existing infrastructure or building smart from the start — we enable your transition to a more sustainable business.
          </p>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/equipmentfinancing/ESE2.jpg"
                alt="Energy Equipment Types"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              What We Finance
            </h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Solar Panels & Inverters</li>
              <li>LED Lighting & Smart Lighting Systems</li>
              <li>Energy-Efficient HVAC Systems</li>
              <li>Battery Storage & Backup Solutions</li>
              <li>Water Heating & Heat Recovery Systems</li>
              <li>Industrial Automation & Monitoring Tools</li>
              <li>Green Building Equipment & Retrofitting</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-[#132b4a] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
              Key Features
            </h4>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Nihal Finserv -<br />
              <span className="text-gray-400">Power Your Savings</span> <br />
              <span className="text-red-500">Fund</span>{" "}
              <span className="text-gray-500">Your Sustainability</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Make green upgrades without delay — unlock savings, subsidies, and efficiency now.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
              <span className="text-red-500">&#8213;</span> Get In Touch
            </button>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Low or Zero Upfront Cost</h3>
              <p className="text-gray-400">Preserve liquidity and spread cost over EMIs</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Save on Energy Bills</h3>
              <p className="text-gray-400">Cut long-term electricity and utility expenses</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Fast ROI</h3>
              <p className="text-gray-400">Energy savings offset repayment cost</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Tax & Subsidy Eligible</h3>
              <p className="text-gray-400">Depreciation, green credits, govt. schemes</p>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Boost ESG Ratings</h3>
              <p className="text-gray-400">Showcase your green commitment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Document Checklist */}
      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Documents Required
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              Get expert help from our team from proposal to payout.
            </p>
            <ul className="space-y-4">
              {steps.map((step, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-800 text-base md:text-lg">
                  <CheckCircle className="text-red-500 mt-1" size={20} />
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full rounded-xl overflow-hidden shadow-md">
            <Image
              src="/equipmentfinancing/ESE3.jpg"
              alt="Documents"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Business Use Cases */}
      <section className="bg-white text-black py-16 px-6 md:px-20">
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            Energy Saving Equipment Financing
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            Adopt smart systems, cut operating costs, and lead with clean technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Who Should Apply",
                points: [
                  "Manufacturing Units & Industrial Plants",
                  "Commercial Buildings & Offices",
                  "Hospitals & Educational Institutions",
                  "Warehouses & Retail Spaces",
                  "Hotels, Resorts & Shopping Malls",
                  "IT Parks & Data Centers",
                  "Green Startups & ESG Projects",
                ],
              },
              {
                city: "Why Nihal Finserv",
                points: [
                  "Green financing lifecycle understanding",
                  "Step-up or balloon EMI options",
                  "Quick loan approvals",
                  "Certified vendor & installer network",
                  "Transparent, affordable terms",
                ],
              },
              {
                city: "Use Cases",
                points: [
                  "Solar energy generation",
                  "Lighting and HVAC retrofitting",
                  "Automation for energy control",
                  "Battery storage integration",
                  "Green building certifications",
                ],
              },
              {
                city: "Client Testimonial",
                text: "We upgraded our factory with solar and energy-efficient lighting through Nihal Finserv. Their quick processing and ROI-focused planning made it a win-win.",
              },
            ].map(({ city, text, points }) => (
              <div key={city} className="border border-gray-700 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4 text-white">{city}</h3>
                {points ? (
                  <ul className="text-gray-300 list-disc list-inside space-y-2">
                    {points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300 leading-relaxed">{text}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <ServiceSection />
    </>
  );
}
