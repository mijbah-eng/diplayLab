import Image from "next/image";

function Rental_division_service_model() {
const features = [
  {
    name: 'Site Survey & Planning',
    description:
      'Pre-event walkthroughs and technical assessments to ensure flawless execution on the day.',
  },
  {
    name: 'Professional Installation',
    description: 'Certified AV technicians handle mounting, cabling, configuration, and signal testing.',
  },
  {
    name: 'Live Event Support',
    description: 'On-site or remote technical support throughout your event to handle any real-time needs.'
  },
  {
    name: 'Teardown & Logistics',
    description: 'Efficient, damage-free breakdown and return logistics — fully managed by our crew.'
  },
]

return (<>

        <div className="overflow-hidden bg-white py-24 sm:py-32">
            <div className="container">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="">
                        <div className="lg:max-w-lg">
                            <h2 className="h2_text mb-6">
                                We Don't Just Drop Off Screens. <span className="text-blue-500">We Own the Outcome.</span>
                            </h2>
                            <p className="text-[1rem] text-gray-600 max-w-3xl mx-auto;">
                                Display Lab's Rental Solutions provides white-glove service from quote to teardown. Our certified technicians handle every detail from site surveys and custom rigging to live event support and post-event logistics so you get the Rental Division experience, not a description of the whole company.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <div className="font-semibold text-gray-900">
                                            {feature.name}
                                        </div>{' '}
                                        <div className="">{feature.description}</div>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <Image
                        alt="Product screenshot"
                        src="/images/pages/rental/divition_service_model/divition_service_model.avif"
                        width={1000}
                        height={1000}
                        className="w-xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    </>);
}

export default Rental_division_service_model;