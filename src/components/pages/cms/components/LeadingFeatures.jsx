import Link from "next/link";

function LeadingFeatures() {
  const leadingFeatureDataList = [
    {
      img:"https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/655bb19b05ff356cc9f5dc9f_digital_signage-1.webp",
      subTitle: "APPS & INTEGRATIONS",
      title: "Elevate your screen experience",
      description: "Connect to all your favorite apps, including social media, weather, Teams, Google Drive and more. We offer compatibility with over 140+ applications that you can effortlessly display on your screen. Plus, our split-screen app allows you to show multiple apps on a single screen.",
      linkText:"Try Now",
      link:"https:/youtube.com"
    },
    
    {
      img:"https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/655bb972c3670dec16f0a96e_digital_signage-2.webp",
      subTitle: "ROLES AND PERMISSIONS",
      title: "Collaborate and control",
      description: "Teamwork makes the dream work - invite your team to manage and update your screens together. With permissions, roles and workflow options - Dispaly Lab makes it easy to collaborate on digital signage and control the messages you display.",
      linkText:"Learn More",
      link:"#"
    },
    {
      img:"https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/655bb871ceff6c00f550ce68_digital_signage-3.webp",
      subTitle: "Elevate Your Screen Experience",
      title: "Apps & Integrations",
      description: "Connect with your favorite tools. From social media to weather forecasts, integrate everything your business needs.",
      linkText:"Explore Apps",
      link:"#"
    },
    {
      img:"https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/655bb19b05ff356cc9f5dc9f_digital_signage-1.webp",
      subTitle: "Collaborate And Control",
      title: "Roles and Permissions",
      description: "Manage team access with precision. Assign roles and control who can create, edit, and publish content.",
      linkText:"Learn More",
      link:"#"
    },

  ]
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            We've Got You Covered With
            <span className="text-cyan-600"> Leading Features</span>
          </h2>
        </div>
        <div className="space-y-20 md:space-y-32">
        {
          leadingFeatureDataList?.map((singleLeadingFeature, index) => (
            <div key={index} className={`grid lg:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 == 1 ? "lg:grid-flow-dense" : ""}`}>
            <div className={`relative ${index % 2 == 1 ? "lg:col-start-2" : ""}`}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gray-100">
                <img
                  className="w-full h-full object-cover"
                  src={singleLeadingFeature?.img}
                  alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-purple-500/10 pointer-events-none"></div>
              </div>
            </div>
            <div className={`${index % 2 == 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
              <div className="">
                <p className="text-cyan-600 font-semibold text-sm uppercase tracking-wide mb-3">
                  {singleLeadingFeature?.subTitle}
                </p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  {singleLeadingFeature?.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {singleLeadingFeature?.description}
                </p>
                <Link
                  className="text-cyan-600 hover:text-cyan-700 font-semibold text-lg inline-flex items-center gap-2 group"
                  href={singleLeadingFeature?.link}
                  target="_blank"
                >
                  {" "}
                  {singleLeadingFeature?.linkText}{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          ) )
        }
         
        </div>
      </div>
    </section>
  );
}

export default LeadingFeatures;
