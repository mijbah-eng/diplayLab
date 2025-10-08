import Image from "next/image";

function CMS_Marketing() {
    return ( <>
    <div className="grid md:grid-cols-2 gap-[40px] max-w-full max-md:max-w-md mx-auto py-30">
      <div className="max-md:order-1 max-md:text-center md:w-md">
        <h2 className="md:text-[3rem] text-3xl md:leading-12 font-bold text-slate-900 mb-4">Empowering your marketing teen with an easy-to-use CMS</h2>
        <p className="mt-4 text-base text-slate-600">Create, manage and distribute content to you digital displays with Display Lab's intuitive and powerful content management system.</p>
        <div className="mt-8 flex flex-wrap max-md:justify-center gap-4">
          <a href="javascript:void(0);" className="px-6 py-3 text-base font-semibold text-white bg-[#324ef0] hover:bg-opacity-80 transition-all duration-300 transform focus:ring-2 focus:ring-[#192ff1] focus:outline-none focus:ring-opacity-50 rounded-2xl">Get Started</a>
        </div>
      </div>
      <div className="">
        <Image width={1000} height={1000} src={'/images/cms/displayLab CMS.png'} className="w-full h-full object-cover rounded-lg shadow-xl" alt="CMS_Image"></Image>
      </div>
    </div>
    
    </> );
}

export default CMS_Marketing;