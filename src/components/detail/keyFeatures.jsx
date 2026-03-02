import Image from "next/image";

function KeyFeatures() {
  const keyFeatureData = [
    {
      feature_imgUrl: "monitor.svg",
      feature_title: "Flexible Content Display",
      feature_description:
        "Customize pictures, videos, text time, weather, countdown,subtitles, and split-screen layouts. Supports full screen,split screen, and partition playback modes — multiple uses from one screen.Customize pictures, videos, text, time, weather, countdown,subtitles, and split-screen layouts. Supports full screen,split screen, and partition playback modes — multiple uses from one screen.",
    },
    {
      feature_imgUrl: "wifi.svg",
      feature_title: "Advanced Networking",
      feature_description:
        "Built-in high-performance WiFi (IEEE 802.11 b/g/n), 10/100M Ethernet, and optional 4G/5G support. Android motherboard with up to 1.6 GHz, 2GB RAM, 32GB EMMC storage.",
    },
    {
      feature_imgUrl: "joystick.svg",
      feature_title: "Smart Automation & Remote Control",
      feature_description:
        "Auto start, timing switch, and scheduled on/off across multiple periods per day. Remote advertising management via CMS cloud server (www.displaylab.net) — one account controls multiple machines.",
    },
    {
      feature_imgUrl: "library.svg",
      feature_title: "Multi-Format Playback",
      feature_description:
        "USB flash disk loop playback for pictures, videos, text scrolling, and PDFs. Supports cycle, timing, insert, split-screen, and partition playback. Multi-language system support included.",
    },
  ];
  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Key Product Features
            </h2>
            <div className=" mt-10 flex flex-col gap-4">
              {keyFeatureData?.map((singleKeyFeature, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <Image
                    src={`/svg/details/${singleKeyFeature?.feature_imgUrl}`}
                    width={50}
                    height={50}
                    className=" w-[30px] sm:w-[40px]"
                    alt=""
                  />

                  <h3 className="text-lg sm:text-xl font-semibold">
                    {singleKeyFeature?.feature_title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {singleKeyFeature?.feature_description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full h-full">
            <Image src={"/images/details/keyFeatureImg.png"} width={1000} height={1000} className="w-full h-full" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyFeatures;
