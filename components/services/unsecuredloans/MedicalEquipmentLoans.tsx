"use client";

import Image from 'next/image';
import { CheckCircle } from "lucide-react";

import ContactSection from '@/components/ContactSection';
import ServiceSection from '@/components/ServiceSection';

const steps = [
  "KYC of Applicant (Doctor/Proprietor/Directors)",
  "Clinic/Hospital Registration and Address Proof",
  "Medical Council Registration (for doctors)",
  "Proforma Invoice of Equipment",
  "Last 6–12 Months’ Bank Statements",
  "ITRs and Financial Statements (Last 2 Years)"
];

export default function OdCc() {
  return (
    <>
      <section className="py-20 px-6 bg-[#132b4a] text-white flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <Image
            src="/unstructured/M1.jpg"
            alt="Office"
            width={800}
            height={500}
            className="rounded shadow w-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-5">
            Empowering Healthcare Professionals with Easy Financing
          </h2>
          <p className="text-base mb-6">
            Upgrading or acquiring advanced medical equipment is essential for better diagnosis, treatment, and patient care&mdash;but it often requires significant capital investment. At Nihal Finserv, we simplify this process by offering Medical Equipment Loans tailored specifically for healthcare professionals and institutions.
          </p>
          <p className="text-base">
            Whether you&apos;re setting up a new clinic, upgrading diagnostic machinery, or expanding hospital infrastructure, we provide fast, affordable, and flexible equipment loans to help you keep pace with medical innovation.
          </p>
        </div>
      </section>

      <section className="w-full px-6 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <Image
                src="/unstructured/M2.jpg"
                alt="Team"
                width={700}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="text-gray-700 text-lg space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-tight mb-6">
              What is a Medical Equipment Loan?
            </h2>
            <p>
              A Medical Equipment Loan is a specialised financial product designed for doctors, clinics, diagnostic centres, hospitals, and path labs to purchase or lease high-cost medical devices. These loans can cover equipment such as MRI machines, ultrasound devices, X-ray systems, dental chairs, operation theatre tools, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#132b4a] text-white px-8 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h4 className="uppercase text-sm font-semibold underline underline-offset-4 mb-4">
              Key Features
            </h4>
            <h2 className="text-5xl font-bold leading-tight mb-4">
              Nihal Finserv -<br />
              <span className="text-gray-400">Where Your</span> <br />
              <span className="text-red-500">Goals</span>{" "}
              <span className="text-gray-500">Come First</span>
            </h2>
            <p className="text-gray-300 mb-8 max-w-md">
              Your dreams are not just numbers &mdash; they are plans, futures, and possibilities.
            </p>
            <button className="border border-red-500 text-white px-6 py-3 hover:bg-red-500 transition flex items-center gap-2">
              <span className="text-red-500">&#8213;</span> Get In Touch
            </button>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Credit Limit Based on Business Profile</h3>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Up to 100% Equipment Financing</h3>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Quick Approvals &amp; Disbursal in 48&ndash;72 Hours</h3>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Flexible Tenures up to 7 Years</h3>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Collateral-Free Options Available</h3>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">EMI Options Based on Revenue Cycles</h3>
            </div>
            <div className="border border-gray-700 p-6">
              <h3 className="text-2xl font-semibold mb-2">Tax Benefits on Interest &amp; Depreciation</h3>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f5f5] px-6 py-12 md:py-20 w-full">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
              Required Documents
            </h2>
            <p className="text-gray-600 text-lg mb-6 max-w-xl">
              With Nihal Finserv&apos;s OD/CC solutions, your business stays liquid, stable, and scalable.
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
              src="/unstructured/M3.jpg"
              alt="Developer at work"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white text-black py-16 px-6 md:px-20">
        <div className="bg-[#132b4a] text-white mt-20 py-16 px-6 md:px-20">
          <h2 className="text-4xl font-bold text-center mb-6">
            Medical Equipment Loans
          </h2>
          <p className="text-center text-lg max-w-4xl mx-auto mb-14">
            From small clinics to large institutions, Nihal Finserv supports your medical excellence with smart financing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              {
                city: "Ideal For",
                points: [
                  "Private Clinics and Multi-specialty Hospitals",
                  "Diagnostic &amp; Imaging Centers",
                  "Dental &amp; Orthopedic Clinics",
                  "Pathology Labs and IVF Centers",
                  "Daycare Surgery Centres",
                  "Home Healthcare Providers",
                ],
              },
              {
                city: "Eligibility Criteria",
                points: [
                  "Registered Medical Professional or Healthcare Entity",
                  "Minimum 1&ndash;2 years of practice or business continuity",
                  "PAN, Aadhaar &amp; Registration Certificates",
                  "Valid Medical License/Clinic Registration",
                  "Good banking history and credit score (650+ preferred)",
                ],
              },
              {
                city: "Equipment You Can Finance:",
                points: [
                  "MRI, CT, and Ultrasound Machines",
                  "Digital X-ray &amp; Mammography Systems",
                  "Ventilators &amp; ICU Equipment",
                  "Dental Imaging &amp; Operatory Tools",
                  "Pathology &amp; Lab Analyzers",
                  "Dialysis &amp; Surgical Devices",
                  "Physiotherapy and Rehabilitation Machines",
                ],
              },
              {
                city: "Why Choose Nihal Finserv?",
                text: "Nihal Finserv",
                points: [
                  "Specialised Loan Plans for Medical Fraternity",
                  "Tie-ups with 30+ Banks &amp; NBFCs",
                  "End-to-End Assistance till Disbursal",
                  "Competitive Rates with Customised EMI Planning",
                  "Low Processing Charges &amp; Zero Hidden Fees",
                  "Collateral-Free Options for Doctors &amp; Clinics",
                ],
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
