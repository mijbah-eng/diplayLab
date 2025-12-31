import Image from "next/image";
import Link from "next/link";

function Advertisement_1() {
  return (
    <>
      <div className="space-large"></div>

      <div className="two_column">
        <div className="">
          <Image
            width={1000}
            height={1000}
            src={"/images/cms/Empowering.jpg"}
            className="object-cover rounded-lg shadow-xl max-w-full h-full"
            alt="rental"
          ></Image>
        </div>
        <div className="max-md:text-center pr-0 md:pl-[22%] ">
          <div className="">
            <h2 className="title mr_b">Transformative Advertising Solutions</h2>
            <p className="two_column_sub_desc">
              Turn any space into a dynamic advertising hub with our tailored
              display advertising options.
            </p>
            <p className="two_column_desc">
              Empower your brand with captivating visuals and intelligent ad
              scheduling. From grocery stores to shopping malls. Display I ab
              brings targeted marketing directly to your audlence.
            </p>
            <div className="mt-8 flex flex-wrap max-md:justify-center gap-4">
              <Link href="/contact" className="button">
                Request A Advertisement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Advertisement_1;
