function Rental_Hero() {
    return ( 
          <div className="hero-section">
        <div className="rental-hero-bg h-[100vh]">
            <div className="container">
                <div className="md:w-2xl mr-auto px-4 pt-20 md:pt-50 ">
                    <div className="max-md:text-center pr-0 md:pr-[22%]">
                        <h2 className="title text-white">
                        Flexible Rental Options
                        </h2>
                        <p className="mt-4 two_column_desc text-white mb-8">
                       Need displays for a short term ? Our rental services offer flexible solutions for events, businesses and special occasions.
                        </p>
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
     );
}

export default Rental_Hero;