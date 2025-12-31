import CalandlyButton from "@/components/calandlyButton";

function Advertisement_Hero() {
  return (
    <>
      <div className="hero-section">
        <div className="advertisement-hero-bg h-[100vh]">
          <div className="container h-full">
            <div className="hero_section_content">
              <div className="max-md:text-center pr-0 md:pr-[22%]">
                <h2 className="title text-white">Advertisement</h2>
                <p className="mt-4 two_column_desc text-white mb-8">
                  Need diplays for a short term ? Our rental services offer
                  flexible solutions for events, businesses and special
                  occasions.
                </p>
                <CalandlyButton />
              </div>
              {/* <div className="w-[400px] mx-auto">
                        <Image
                        width={1000}
                        height={1000}
                        src={"/images/pages/products/hero/hero-image.png"}
                        className="object-cover max-w-full h-full"
                        alt="rental"
                        ></Image>
                    </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advertisement_Hero;
