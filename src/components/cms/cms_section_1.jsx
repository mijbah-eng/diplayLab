import Image from "next/image";
import Link from "next/link";

function CMS_Marketing() {
  return (
    <>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="">
              <h2 className="h2_text mb-6">
                One Platform to Power Your Entire Digital Signage Network
              </h2>
              <p className="text-[16px] text-gray-600 mb-4">
                Display Lab provides everything businesses need to deploy and
                manage digital signage.
              </p>
              <p className="text-lg md:text-xl mb-8">
                From our powerful cloud CMS to hardware players, rental
                displays, and advertising solutions, our platform helps
                organizations communicate, promote, and engage audiences across
                every screen. Whether you're running one screen or thousands,
                Display Lab makes digital signage simple and scalable.
              </p>
              <Link href="/cms" className="button">
                Explore CMS
              </Link>
            </div>
            <div className="">
              <Image
                width={1000}
                height={1000}
                src={"/images/cms/Empowering.jpg"}
                className="max-w-full h-full object-cover"
                alt="CMS_Image"
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CMS_Marketing;
