import Link from "next/link";

function CMS_Marketing() {
  return (
    <>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
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
                  className="bg-white rounded-2xl shadow-2xl p-4 relative z-10"
                >
                  <video
                    className="rounded-xl aspect-video w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    preload="none"
                  >
                    <source src="/videos/A_Single_Platform.mp4" />
                  </video>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="h2_text mb-6">
                A Single Platform to Power Digital Signage
              </h2>
              <p className="text-[1rem] mb-8">
                Display Lab offers complete digital signage solutions, from CMS to hardware and displays. Simple, scalable tools to communicate and engage across any number of screens.
              </p>
              <Link href="/cms" className="border-[1.5px] border-[#005582] bg-[#005582] text-white text-center capitalize whitespace-nowrap rounded flex justify-center items-center px-6 py-[.4rem] text-base font-medium leading-[180%] transition-colors duration-200 hover:text-black hover:bg-white w-fit">
                Explore CMS
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default CMS_Marketing;
