import Image from "next/image";

function CMS_Marketing() {
    return ( <>
    <div className="space-large"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mx-auto px-4">
      <div className="max-md:text-center pr-0 md:pr-[22%]">
        <h2 className="md:text-[3rem] text-3xl md:leading-12 font-bold text-slate-900 mb-4">Powerful CMS Systems</h2>
        <p className="mt-4 text-base text-slate-600">Seamlessly control, schedule, and manage your digital displays-all from one intuitive platform.</p>
        <p className="mt-4 text-base text-slate-600">
          Display Lab CMS offors an advanced yet user-friendly system that lallows you create pload and manage content effortlessly. Esillsix schedule, campalgns, ann-unccements and make real-time updates across multiple screens across multiple screens.
        </p>
        <div className="mt-8 flex flex-wrap max-md:justify-center gap-4">
          <a href="javascript:void(0);" className="px-6 py-3 text-base font-semibold text-white bg-[#105783] hover:bg-[#003051] transition-all duration-300 transform rounded-md">Explore CMS</a>
        </div>
      </div>
      <div className="">
        <Image width={1000} height={1000} src={'/images/cms/Empowering.jpg'} className="max-w-full h-full object-cover" alt="CMS_Image"></Image>
      </div>
    </div>
    
    </> );
}

export default CMS_Marketing;