import { CheckIcon } from '@heroicons/react/20/solid'

const tiers = [
  {
    tagName: 'Starter',
    id: '1',
    name: 'Essential Display',
    desc: "The perfect plan if you're just getting started with our product.",
    features: ['1–2 commercial displays (55"–75")', 'Standard mounting hardware', 'Delivery & installation', 'Remote technical support', 'Up to 3-day rental'],
  },
  {
    tagName: 'Most Popular',
    id: '2',
    name: 'Professional Suite',
    desc: "Ideal for trade shows, corporate events, and multi-screen environments.",
    features: ['3–6 displays or LED wall panel set', 'Custom rigging & cable managemente', 'Content management system access', 'On-site technician (up to 8 hrs)', 'Up to 7-day rental'],
  },
  {
    tagName: 'Enterprise',
    id: '3',
    name: 'Full Production',
    desc: "For large-scale productions, multi-zone LED walls, and extended campaigns.",
    features: ['Custom LED wall configurations', 'Dedicated project manager', 'Full AV integration & signal routing', '24/7 on-site support team', 'Extended rental terms available'],
  },
]


export default function RentalPackages() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="container">

        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mt-2 h2_text">
            Transparent Pricing. No Surprises
          </h2>
        </div>
        <p className="mt-6 title_desc">
          Flexible rental packages designed for one-day activations to multi-week deployments. Every package includes delivery, setup, and support.
        </p>
        <div className="mx-auto mt-16 grid gap-5 grid-cols-1 items-center lg:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.id}
              className="bg-white/60 border-2 border-zinc-200 sm:mx-8 lg:mx-0 shadow-2xl  rounded-2xl p-4">

              <div className="flex justify-between items-center">
                 <h2 className="mt-4 flex items-baseline text-2xl font-semibold text-slate-900 text-center">
                {tier.name}
              </h2>
                
                <span className="text-base/7 font-semibold text-[#3095b5] uppercase text-right">
                  {tier.tagName}
                </span>
              </div>

             
              <p className={'text-gray-600 mt-6 text-base/7'}>
                {tier.desc}
              </p>
              <ul
                role="list"
                className={
                  'mt-8 space-y-3 text-sm/6 sm:mt-10 text-gray-600'
                }
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={'text-[#3095b5] h-6 w-5 flex-none'}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
