function DigitalSignage() {
  const DigitalSignagePlatfroms = [
    {
      img_src:
        "https://www.yodeck.com/wp-content/uploads/2023/09/TV-Screen-1.jpg",
      title: "Manufacturing",
      description:
        "From HQ to the factory floor, our web based digital signage improves productivity and safety.",
    },

    {
      img_src:
        "https://www.yodeck.com/wp-content/uploads/2023/09/Education-1.jpg",
      title: "Education",
      description:
        "Inspire students and faculty with captivating digital screens that bring a sense of belongingness.",
    },

    {
      img_src:
        "https://www.yodeck.com/wp-content/uploads/2023/09/restaurant-digital-signage-yodeck.jpg",
      title: "Restaurants",
      description:
        "Dazzling menu boards and posters will take upselling & customer satisfaction to new heights.",
    },

    {
      img_src: "https://www.yodeck.com/wp-content/uploads/2023/09/Retail.jpg",
      title: "Retail",
      description:
        "Amaze shoppers using digital billboard software to showcase products and boost sales.",
    },

    {
      img_src: "https://www.yodeck.com/wp-content/uploads/2023/09/Offices.jpg",
      title: "Offices",
      description:
        "Improve performance in your office environment with screens that inform and engage.",
    },

    {
      img_src:
        "https://www.yodeck.com/wp-content/uploads/2023/09/Healthcare.jpg",
      title: "Healthcare",
      description:
        "Promote health tips, raise awareness and improve facilities navigation with engaging screens.",
    },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="h2_text mb-4">
            Digital Signage for Every Industry
          </h2>
          <h4 className="title_desc mx-auto">
            Tailored digital signage solutions designed to inform, engage, and
            inspire your audience.
          </h4>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {DigitalSignagePlatfroms.map((singleDigitalSignagePlatfrom, index) => (
            <div className="text-center" key={index}>
              <div className="mb-6 flex justify-center">
                <img
                  src={singleDigitalSignagePlatfrom?.img_src}
                  alt=""
                />
              </div>
              <h3 className="text-xl font-semibold text-orange-500 underline underline-offset-4 mb-4">
                {singleDigitalSignagePlatfrom?.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                {singleDigitalSignagePlatfrom?.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DigitalSignage;
