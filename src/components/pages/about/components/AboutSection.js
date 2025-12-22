function AboutSection() {
    return ( <>
    {/* Our Mission */}
    <div className="flex flex-col md:flex-row gap-10  px-10 py-2 justify-between items-center shadow-lg rounded-md">
                        <div className="w-xl">
                            <h4 className="text-center md:text-left text-3xl font-semibold mb-5">Our Mission</h4>
                            <p className="w-full text-xl text-center md:text-left">
                                At DisplayLab, our mission is to make communication effortless and impactful through powerful digital signage solutions. What began as a small team with a big idea has grown into a global company serving over 30,000 businesses, from storefronts to corporate offices and everything in between. We’re passionate about what we build because clear communication helps businesses connect, grow, and drive results that matter.
                            </p>
                        </div>
                        <div className="">
                            <img width={567} src={"/images/about_us/about.png"} />
                            {/* <Image src={"public/images/about_us/about.png"} /> */}
                        </div>
    </div>

    {/* Our Vision */}

    </> );
}

export default AboutSection;