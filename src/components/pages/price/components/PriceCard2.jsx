function PriceCard2() {
    return (
        <div className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-center text-gray-900 mb-12">
                    Optional Add-Ons
                </h2>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* Card 1 */}
                    <div className="bg-slate-700 text-white rounded-xl p-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Video Wall</h3>
                            <button className="mt-3 px-4 py-2 bg-slate-600 rounded-md text-sm">
                                Build Your Video Wall
                            </button>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold">AU$38.00</p>
                            <p className="text-sm text-gray-300">per video wall/month</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-slate-700 text-white rounded-xl p-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Background Music</h3>
                            <button className="mt-3 px-4 py-2 bg-slate-600 rounded-md text-sm">
                                Play Background Music
                            </button>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold">AU$24.00</p>
                            <p className="text-sm text-gray-300">per screen/month</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-slate-700 text-white rounded-xl p-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Wireless Presentation</h3>
                            <button className="mt-3 px-4 py-2 bg-slate-600 rounded-md text-sm">
                                Go Wireless For Meetings
                            </button>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold">AU$28.00</p>
                            <p className="text-sm text-gray-300">per screen/month</p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-slate-700 text-white rounded-xl p-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold mb-2">Ads Portal</h3>
                            <button className="mt-3 px-4 py-2 bg-slate-600 rounded-md text-sm">
                                Learn More
                            </button>
                        </div>
                        <div className="text-right">
                            <p className="text-lg font-semibold">Contact Us</p>
                            <p className="text-sm text-gray-300">for more details</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default PriceCard2;