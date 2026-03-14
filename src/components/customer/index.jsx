import CustomerCounting from "./CustomerCounting";
import CustomerText from "./CustomerText";

function CustomerReviews() {
  return (
    <div className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Counter Section */}
        <CustomerCounting />

        {/* Rating */}
        <div className="text-center mt-10">
          <div className="flex justify-center items-center gap-1 text-orange-400 text-xl">
            ★ ★ ★ ★ ★
          </div>

          <p className="text-sm text-gray-500 mt-1">
            Based on 6300+ reviews
          </p>

          <div className="flex justify-center gap-6 mt-2 text-gray-600 font-semibold">
           <img src="https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/652825f6520509db4f278e55_review_logos.svg" alt="" />
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-14">
          <CustomerText />
        </div>

        {/* Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#005582] hover:bg-[#003051] text-white px-8 py-3 rounded-lg font-semibold transition cursor-pointer">
            Try For Free →
          </button>
        </div>

      </div>
    </div>
  );
}

export default CustomerReviews;