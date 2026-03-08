export default function AvailableSizes() {
  const sizes = [
    {
      size: '43"',
      desc: "Compact footprint, ideal for corridors and small retail spaces.",
    },
    {
      size: '50"',
      desc: "Mid-size versatility for lobbies, showrooms, and waiting areas.",
    },
    {
      size: '55"',
      desc: "High-impact display for busy public areas and large retail floors.",
    },
    {
      size: '65"',
      desc: "Maximum visibility for large venues, airports, and event spaces.",
    },
  ];

  const boxItems = [
    "User manual",
    "Power cable",
    "Warranty card",
    "Allen key + base screws",
    "Infrared remote control",
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Available Sizes & What's Included
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            The kiosk is available in four screen sizes to suit any space. All
            units ship with a complete accessory package for quick setup.
          </p>
        </div>

        {/* Size Grid */}
        <div className="rounded-lg border border-gray-200 overflow-hidden bg-gray-50">
          <div className="grid md:grid-cols-2 divide-x divide-y divide-gray-200">
            {sizes.map((item, index) => (
              <div key={index} className="p-6 md:p-7">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.size}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* In the Box */}
          <div className="bg-gray-800 text-white rounded-lg p-7">
            <h3 className="text-lg font-semibold mb-5">In the Box</h3>

            <ul className="space-y-3 text-sm text-gray-200">
              {boxItems.map((item, i) => (
                <li key={i} className="flex gap-2">
                  <span>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Shell & Build */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-5">
              Shell & Build
            </h3>

            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                <span className="font-medium text-gray-900">Frame:</span>{" "}
                Aluminum alloy for a premium, durable finish.
              </p>

              <p>
                <span className="font-medium text-gray-900">Back shell:</span>{" "}
                Sheet metal construction for structural rigidity.
              </p>

              <p>
                <span className="font-medium text-gray-900">CMS Software:</span>{" "}
                Managed via displaylab.us cloud platform.
              </p>
            </div>

            {/* Notice */}
            <div className="mt-6 flex items-center gap-3 bg-gray-100 rounded-md px-4 py-3 text-sm text-gray-600">
              <span className="text-gray-500">☑</span>
              <p>All data are subject to the actual items.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
