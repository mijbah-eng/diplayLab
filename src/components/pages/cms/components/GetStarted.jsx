function GetStarted() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
            <p className="text-cyan-600 font-semibold text-lg mb-2">
                Fast & Easy Start
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Get Started with OptiSigns
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Three simple steps to transform your digital signage experience
            </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="group relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity"></div>
                    <div className="relative text-center">
                        <div className="group-hover:opacity-70 opacity-0 absolute top-0 right-0 text-6xl font-bold bg-gradient-to-br from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-6">01</div>
                        <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-monitor text-white" aria-hidden="true"><rect width="20" height="14" x="2" y="3" rx="2"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                            Select your hardware
                        </h3>
                        <p className="text-base text-gray-600 leading-relaxed">
                            Choose from any screen or device. We work with all major brands and platforms.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
