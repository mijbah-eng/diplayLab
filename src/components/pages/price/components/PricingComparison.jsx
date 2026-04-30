export default function PricingComparison() {
  const plans = [
    { name: "Free", price: "Free", btn: "Get Started" },
    { name: "Standard", price: "$10.00", btn: "Try for Free" },
    { name: "Pro Plus", price: "$15.00", btn: "Try for Free", highlight: true },
    { name: "Engage", price: "$30.00", btn: "Try for Free" },
    { name: "Enterprise", price: "$45.00", btn: "Talk With Sales" },
  ];

  const features = [
    "Scheduling",
    "Content Library",
    "API & Secure Automation",
    "HD Update Automation",
    "Proof of Play",
    "Templates, Format and Orientation",
  ];

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Sticky Pricing Header */}
        <div className="sticky top-0 z-20 bg-gray-50 pb-6">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Compare Features
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-end">
            <div></div>

            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl p-4 text-center border ${
                  plan.highlight
                    ? "bg-green-50 border-green-500 shadow-md"
                    : "bg-white"
                }`}
              >
                <h3 className="font-semibold">{plan.name}</h3>
                <p className="text-lg font-bold mt-1">{plan.price}</p>
                <p className="text-xs text-gray-500">/month</p>

                <button
                  className={`mt-3 w-full py-2 rounded-md text-sm font-medium ${
                    plan.highlight
                      ? "bg-green-600 text-white"
                      : "bg-gray-100"
                  }`}
                >
                  {plan.btn}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="mt-6 bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Section Header */}
          <div className="px-6 py-4 border-b font-medium text-gray-700 flex justify-between">
            <span>Content Automation and Integration</span>
            <span>⌄</span>
          </div>

          {/* Features */}
          {features.map((feature, i) => (
            <div
              key={i}
              className="grid grid-cols-2 md:grid-cols-6 border-b last:border-none"
            >
              {/* Feature Name */}
              <div className="px-6 py-4 text-gray-600">{feature}</div>

              {/* Plan Columns */}
              {plans.map((_, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center py-4"
                >
                  {idx >= 2 ? (
                    <span className="text-green-500 text-lg">✓</span>
                  ) : (
                    <span className="text-gray-300">—</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Additional Sections (collapsed style placeholders) */}
        {[
          "Campaign Management & Advanced Playback",
          "Device Management",
          "Engage - Create Interactive Experiences",
          "User Management and Security",
          "Reporting & Analytics",
          "Branding",
          "Enterprise",
          "Support",
        ].map((section, i) => (
          <div
            key={i}
            className="mt-4 bg-white rounded-lg border px-6 py-4 flex justify-between"
          >
            <span>{section}</span>
            <span>⌄</span>
          </div>
        ))}
      </div>
    </div>
  );
}