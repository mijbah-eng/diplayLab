import Image from "next/image";
import Link from "next/link";

function CMS_Marketing() {
  return (
    <>
      <div className="space-large"></div>
      <div className="two_column">
        <div className="max-md:text-center pr-0 md:pr-[22%]">
          <h2 className="text-[42px] md:text-[34px] md:leading-12 font-bold text-slate-900 mb-4">
            One Platform to Power Your Entire Digital Signage Network
          </h2>
          <p className="two_column_sub_desc">
            Display Lab provides everything businesses need to deploy and manage
            digital signage.
          </p>
          <p className="two_column_desc">
            From our powerful cloud CMS to hardware players, rental displays,
            and advertising solutions, our platform helps organizations
            communicate, promote, and engage audiences across every screen.
            Whether you're running one screen or thousands, Display Lab makes
            digital signage simple and scalable.
          </p>
          <div className="mt-8 flex flex-wrap max-md:justify-center gap-4">
            <Link href="/cms" className="button">
              Explore CMS
            </Link>
          </div>
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
    </>
  );
}

export default CMS_Marketing;
