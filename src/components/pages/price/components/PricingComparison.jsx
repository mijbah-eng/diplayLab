
export default function PricingComparison({plans, billing, symbols, rates,currency}) {
  // const plans = [
  //   { name: "Pro Plus", price: "$15.00", btn: "Try for Free", highlight: true },
  //   { name: "Engage", price: "$30.00", btn: "Try for Free" },
  //   { name: "Enterprise", price: "$45.00", btn: "Talk With Sales" },
  // ];
  const convertPrice = (price) => {
      return (price * rates[currency]).toFixed(2);
    };
    const PlansSlice = plans.slice(1) 
    
  const featureDetails = [
    {
      feature_section_title: "Content Automation and Integration",
      features: [
        {
          name: "Scheduling",
          cardAllow: [true, true, true],
        },
        {
          name: "Content Library",
          cardAllow: [true, true, true],
        },
        {
          name: "API & Secure Automation",
          cardAllow: [false, true, true],
        },
        {
          name: "HD Update Automation",
          cardAllow: [false, true, true],
        },
        {
          name: "Proof of Play",
          cardAllow: [false, true, true],
        },
        {
          name: "Templates, Format and Orientation",
          cardAllow: [false, true, true],
        }
      ]
    },
    {
      feature_section_title: "Campaign Management & Advanced Playback",
      features: [
        {
          name: "Advanced Scheduling",
          cardAllow: [false, true, true],
        },
        {
          name: "Playlist Management",
          cardAllow: [false, true, true],
        },
        {
          name: "Conditional Playback",
          cardAllow: [false, true, true],
        },
        {
          name: "Real-time Updates",
          cardAllow: [false, false, true],
        },
        {
          name: "Multi-User Collaboration",
          cardAllow: [false, false, true],
        },
      ]
    }
  ]

  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Sticky Pricing Header */}
        <div className="sticky top-10 z-20 bg-gray-50 pb-6">
          <h2 className="text-center text-2xl font-semibold mb-6">
            Compare Features
          </h2>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4 items-end">
            <div className="hidden md:flex"></div>
            {PlansSlice.map((plan, i) => {
              const basePrice =
              billing === "monthly" ? plan.monthly : plan.annual;
              
              return(
              <div
                key={i}
                className={`rounded-xl p-4 text-center border ${
                  plan.popular
                    ? "bg-green-50 border-[#3095b5] shadow-md"
                    : "bg-white"
                }`}
              >
                <h3 className="font-semibold">{plan.name}</h3>
                <p className="text-lg font-bold mt-1">{symbols}
                  {convertPrice(basePrice)}</p>
                <p className="text-xs text-gray-500">/month</p>

                <button
                  className={`mt-3 w-full py-2 rounded-md text-sm font-medium ${
                    plan.name === "Pro Plus"
                      ? "bg-[#005582] text-white"
                      : "bg-gray-100"
                  }`}
                >
                  Try for Free
                </button>
              </div>
            )}
            )}
          </div>
        </div>

{/* Table */}
        {
          featureDetails.map((section, i) => (
             <div key={i} className="mt-6 bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Section Header */}
          <div className="px-6 py-4 border-b text-xl text-white font-bold flex justify-between bg-[#3095b5]">
            <span>{section.feature_section_title}</span>
          </div>

          {/* Features */}
          {section.features.map((feature, i) => (
            <div
              key={i}
              className="grid grid-cols-3 md:grid-cols-4 border-b last:border-none"
            >
              {/* Feature Name */}
              <div className="px-6 py-4 text-black md:text-gray-600 col-span-full md:col-span-1 md:bg-transparent font-bold bg-gray-300 ">{feature.name}</div>

              {/* Plan Columns */}
              {feature.cardAllow.map((value, idx) => (
                <div
                  key={idx}
                  className={`${idx === 1 ? "bg-green-50 text-green-500 text-lg" : ""} flex items-center justify-center py-4`}
                >
                  {value ? (
                    <span className={`text-green-500 text-lg `}>✓</span>
                  ) : (
                    <span className="text-red-500">X</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
          ))
         }



       
       

      </div>
    </div>
  );
}