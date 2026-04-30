"use client";
import { useState } from "react";

export default function PriceCards() {
  const [billing, setBilling] = useState("monthly");
  const [currency, setCurrency] = useState("USD");

  const plans = [
    {
      name: "Free",
      monthly: 0,
      annual: 0,
      features: [
        "Upload Images, Videos, Documents",
        "Manage screens remotely",
        "1GB Cloud Storage",
        "25 Basic Apps",
        "3 screen limit",
      ],
    },
    {
      name: "Standard",
      monthly: 10,
      annual: 8,
      features: [
        "Build playlists & schedule content",
        "100+ Apps & Integrations",
        "Ready-to-use Templates",
        "Multi Users",
        "Unlimited Cloud Storage",
        "Split Screen Zones",
      ],
    },
    {
      name: "Pro Plus",
      monthly: 15,
      annual: 12,
      popular: true,
      features: [
        "Everything in Standard, and:",
        "Microsoft 365 & Google Workspace",
        "Display Dashboards (Power BI, etc.)",
        "Display Secure Websites",
        "Slack & Teams Integration",
        "Dynamic Data Mapping",
        "Auto Power On/Off TV",
      ],
    },
    {
      name: "Engage",
      monthly: 30,
      annual: 25,
      features: [
        "Everything in Pro Plus, and:",
        "Interactive Kiosk Designer",
        "Transform Catalogues into Kiosks",
        "Lift & Learn",
        "Check-in App",
        "QR Scan-to-Interact",
        "Live TV Ads Overlay",
        "Event-Based Analytics",
      ],
    },
    {
      name: "Enterprise",
      monthly: 45,
      annual: 40,
      features: [
        "Everything in Engage, and:",
        "Dedicated Customer Success Manager",
        "Onboarding & Training",
        "Tailored Deployments",
        "Priority Support",
        "GraphQL API Access",
        "Custom Digital Signage System",
      ],
    },
  ];

  const rates = {
    USD: 1,
    EUR: 0.92,
    AUD: 1.5,
    CAD: 1.35,
    GBP: 0.79,
  };

  const symbols = {
    USD: "$",
    EUR: "€",
    AUD: "AU$",
    CAD: "CA$",
    GBP: "£",
  };

  const convertPrice = (price) => {
    return (price * rates[currency]).toFixed(2);
  };

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <h2 className="text-4xl font-bold text-center mb-10">
          Find The <span className="text-[#3095b5]">Best Plan</span> For Your Business
        </h2>

        {/* Toggles */}
        <div className="flex flex-wrap justify-between items-center mb-10 gap-4">

          {/* Billing Toggle */}
          <div className="flex bg-gray-200 rounded-full p-1">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-4 py-2 rounded-full ${
                billing === "monthly" ? "bg-[#3095b5] text-white" : ""
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-4 py-2 rounded-full ${
                billing === "annual" ? "bg-[#3095b5] text-white" : ""
              }`}
            >
              Annual
            </button>
          </div>

          {/* Currency */}
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="border px-3 py-2 rounded-md"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="AUD">AUD</option>
            <option value="CAD">CAD</option>
            <option value="GBP">GBP</option>
          </select>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

          {plans.map((plan, i) => {
            const basePrice =
              billing === "monthly" ? plan.monthly : plan.annual;

            return (
              <div
                key={i}
                className={`p-6 rounded-xl border bg-white flex flex-col ${
                  plan.popular
                    ? "border-[#3095b5] shadow-xl scale-105"
                    : ""
                }`}
              >
                {plan.popular && (
                  <div className="text-xs font-semibold text-[#3095b5] mb-2">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>

                <p className="text-3xl font-bold mb-1">
                  {symbols[currency]}
                  {convertPrice(basePrice)}
                </p>

                <p className="text-sm text-gray-500 mb-4">
                  /screen/month
                </p>

                <button
                  className={`w-full py-2 mb-4 rounded-md ${
                    plan.popular
                      ? "bg-black text-white"
                      : "bg-[#3095b5] text-white"
                  }`}
                >
                  Try For Free
                </button>

                {/* Features */}
                <ul className="space-y-2 text-sm text-gray-600 mt-auto">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#3095b5]">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/*  */}
      </div>
    </div>
  );
}