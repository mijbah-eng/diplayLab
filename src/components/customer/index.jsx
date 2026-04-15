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

          <div className="flex justify-center gap-6 mt-2 text-gray-600 font-semibold">
           <img className="w-41.75" src="/svg/details/our_logos.svg" alt="our_logos" />
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