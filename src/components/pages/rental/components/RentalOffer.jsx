import Image from "next/image";

function RentalOffer() {
    const offerDatas = [
        {
            title: "LED Video Walls",
            desc: "Modular, scalable LED panels that create seamless, high-impact visual backdrops for stages, lobbies, and large venues.",
            img: "/images/pages/rental/offer/1.avif"
        },

        {
            title: "Large Format Displays",
            desc: "55' to 98' commercial-grade screens ideal for trade shows, retail activations, wayfinding, and corporate presentations.",
            img: "/images/pages/rental/offer/2.avif"
        },
        {
            title: "Digital Kiosks",
            desc: "Freestanding portrait and landscape kiosks with optional touch interactivity, perfect for lobbies, expos, and retail floors.",
            img: "/images/pages/rental/offer/3.avif"
        },
        {
            title: "Outdoor Displays",
            desc: "Weather-resistant, high-brightness outdoor screens built for festivals, sporting events, and open-air activations.",
            img: "/images/pages/rental/offer/4.avif"
        },

    ]
    return (<>
        <div className="pt-16 md:pt-24 pb-16 md:pb-24">
            <div className="max-w-375 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center">

                    <h2 className="h2_text mb-6">What We Offer</h2>
                    <p className="title_desc">A curated fleet of premium display technologies for every use case and venue size.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  mt-10 sm:mt-20">
                        {
                            offerDatas?.map((singaleData, i) => (
                                <div key={i} className="rounded-2xl bg-blue-50 border border-blue-200 p-8 flex flex-col gap-4 justify-between min-h-65">
                                    <Image width={1000} height={1000} className="w-full rounded-md" src={singaleData?.img} alt="Push to deploy" />
                                    <h4 className="text-lg font-semibold text-slate-900 text-center">{singaleData?.title}</h4>
                                    <p className="text-slate-600 text-center">{singaleData?.desc}</p>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default RentalOffer;