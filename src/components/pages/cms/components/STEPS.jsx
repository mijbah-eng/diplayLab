import Image from "next/image";

function STEPS_SECTION() {
  const steps = [
    {
      image: "/images/advertisement/advertisement2.png",
      number: "1",
      title: "Pair Your Device",
      description:
        "Set up your device or player, download and install the DisplayLab Player app on it, and pair it using the code.",
    },
    {
      image: "/images/advertisement/advertisement3.png",
      number: "2",
      title: "Create Your Playlist",
      description:
        "Set up your device or player, download and install the DisplayLab Player app on it, and pair it using the code.",
    },
    {
      image: "/images/advertisement/advertisement4.png",
      number: "3",
      title: "Sent To Display",
      description:
        "Set up your device or player, download and install the DisplayLab Player app on it, and pair it using the code.",
    },
  ];
  return (
    <>
      <div className="space-large"></div>
      <div className="container">
        <h2 className="title text-center">DisplayLab: Digital Signage In 3 Easy Staps</h2>
        <div className="grid grid-cols-1 place-items-center md:grid-cols-3 mt-15 gap-5">
          {steps.map((step, index) => (
            <div className="w-sm" key={index}>
              <div className="image">
                <Image
                  width={1000}
                  height={1000}
                  src={step?.image}
                  alt=""
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <h4 className="text-2xl font-semibold mt-5 ">
                <span className="bg-[#125884] px-3 py-1 rounded-md text-white">
                  {step?.number}
                </span>{" "}
                {step?.title}
              </h4>
              <p className="mt-3">{step?.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default STEPS_SECTION;
