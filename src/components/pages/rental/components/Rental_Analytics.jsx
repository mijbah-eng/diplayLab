function Rental_Analytics() {
const features = [
        {
            name: 'Real-Time Monitoring',
            description:
                'Track screen status, content playback logs, and system health from any device, anywhere in the world.',
            
        },
        {
            name: 'Post-Event Reports',
            description:
                'Receive a comprehensive performance summary after every event, including uptime metrics, content impressions, and technical notes for future planning.',
            
        },
        

    ]

return ( <>
    <div className="bg-white py-24 sm:py-32">
            <div className="container">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="mt-2 h2_text">
                        Measure What Matters Most
                    </h2>
                    <p className="mt-6 text-[1rem] text-gray-600 max-w-3xl mx-auto;">
                        Every Rental Solutions deployment comes with access to our proprietary analytics dashboard, giving you real-time visibility into screen uptime, content performance, engagement zones, and audience impressions. No more guessing — just clear, actionable data that helps you optimize every deployment.
                    </p>
                </div>
                <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
                    <div className="grid  grid-cols-2 gap-x-8 gap-y-10 ">
                        {features.map((feature) => (
                            <div key={feature.name} className="bg-white/60 border-2 border-zinc-200 sm:mx-8 lg:mx-0 shadow-2xl  rounded-2xl p-4">
                                <div className="text-2xl font-semibold text-slate-900">
                                    {feature.name}
                                </div>
                                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </> );
}

export default Rental_Analytics;