import SinglePriceCard from "./SinglePriceCard";

function PriceCards() {
  const priceingDetails = [
    {
      title: "Basic",
      price: "Free",
      subtitle: "For 7 Days",
      features: [
        { name: "Display Device", available: true },
        { name: "Asset Storage", available: true },
        { name: "Playlists", available: true },
        { name: "Schedule", available: false },
        { name: "Templates", available: false },
        { name: "Canvas Template Create", available: true },
        { name: "Works Offline", available: true },
        { name: "4k Resolution Support", available: true },
        { name: "Support All Formats", available: true },
        { name: "Only Single User", available: true },
        { name: "Custom User Role", available: false },
        { name: "Drag And Drop", available: true },
      ],
    },
    {
      title: "Standard",
      price: "$8",
      subtitle: "screen/month",
      features: [
        { name: "Display Device", available: true },
        { name: "Asset Storage", available: true },
        { name: "Playlists", available: true },
        { name: "Schedule", available: false },
        { name: "Templates", available: false },
        { name: "Canvas Template Create", available: false },
        { name: "Works Offline", available: true },
        { name: "4k Resolution Support", available: true },
        { name: "Support All Formats", available: true },
        { name: "Only Single User", available: true },
        { name: "Custom User Role", available: false },
        { name: "Drag And Drop", available: true },
      ],
    },
    {
      title: "Premium",
      price: "$11",
      subtitle: "screen/month",
      features: [
        { name: "Display Device", available: true },
        { name: "Asset Storage", available: true },
        { name: "Playlists", available: true },
        { name: "Schedule", available: true },
        { name: "Templates", available: true },
        { name: "Canvas Template Create", available: true },
        { name: "Works Offline", available: true },
        { name: "4k Resolution Support", available: true },
        { name: "Support All Formats", available: true },
        { name: "Only Single User", available: true },
        { name: "Custom User Role", available: false },
        { name: "Drag And Drop", available: true },
      ],
    },
    {
      title: "Enterprise",
      price: "$15",
      subtitle: "screen/month",
      features: [
        { name: "Display Device", available: true },
        { name: "Asset Storage", available: true },
        { name: "Playlists", available: true },
        { name: "Schedule", available: true },
        { name: "Templates", available: true },
        { name: "Canvas Template Create", available: true },
        { name: "Works Offline", available: true },
        { name: "4k Resolution Support", available: true },
        { name: "Support All Formats", available: true },
        { name: "Only Single User", available: true },
        { name: "Custom User Role", available: true },
        { name: "Drag And Drop", available: true },
      ],
    },
  ];

  return (
    <>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center flex-wrap">
            {priceingDetails.map((plan, index) => (
              <SinglePriceCard key={index} plan={plan} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PriceCards;
