import Image from "next/image";
import Link from "next/link";

function CMS_Marketing() {
  return (
    <>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="">
              <Image
                width={1000}
                height={1000}
                src={"/images/cms/Empowering.jpg"}
                className="max-w-full h-full object-cover"
                alt="CMS_Image"
              ></Image>
            </div>
            <div className="">
              <h2 className="h2_text mb-6">
                A Single Platform to Power Digital Signage
              </h2>
              <p className="text-[1rem] mb-8">
                Display Lab offers complete digital signage solutions, from CMS to hardware and displays. Simple, scalable tools to communicate and engage across any number of screens.
              </p>
              <Link href="/cms" className="button">
                Explore CMS
              </Link>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default CMS_Marketing;
