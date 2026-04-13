"use client";
import CalandlyButton from "@/components/calandlyButton";

function Prduct_Hero() {
  return (
    <>
      <div className="hero-section">
      <section className="relative bg-linear-to-br from-black via-black to-black py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-375 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-zinc-100 mb-6 leading-tight">
              Versatile Display <br /> Products
            </h1>
            <p className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto lg:mx-0">
              Discover a wide range of diplay products from interactive kiosks to outdoor screens-perfect for any enviroment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
              <CalandlyButton
                text={"Schedule time with Display Lab"}
                basicStyle={true}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-play"
                    aria-hidden="true"
                  >
                    <polygon points="6 3 20 12 6 21 6 3"></polygon>
                  </svg>
                }
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"></div>
          </div>
          <div className="relative">
            <div className="relative">
              <div
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="rounded-2xl shadow-2xl p-4 relative z-10"
              >
                <video
                  className="rounded-xl aspect-video w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  preload="none"
                >
                  <source src="/videos/hero.mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    </>
  );
}

export default Prduct_Hero;
