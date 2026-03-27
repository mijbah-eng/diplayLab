function AdsCard({ data }) {
  return (
    <div className="border rounded-xl bg-white hover:shadow-lg transition overflow-hidden">
      <div className="">
        <img
          src={data.ads_card_image_url}
          alt={data.ads_card_title}
          className="w-full h-full lg:h-[250px] object-cover mb-4"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-center">
          {" "}
          {data.ads_card_title}{" "}
        </h3>{" "}
        <p className="text-gray-600 text-sm mb-5">
          {data.ads_card_description}
        </p>
        <div className="flex">
          <a
            href={data.ads_card_link_address}
            className="border-[1.5px] border-[#3095b5] bg-[#3095b5] text-white text-center capitalize whitespace-nowrap rounded flex justify-center items-center px-6 py-[.4rem] text-base font-medium leading-[180%] transition-colors duration-200 hover:bg-white hover:text-black w-full"
          >
            {data.ads_card_link_text}
          </a>
        </div>
      </div>
    </div>
  );
}

export default AdsCard;
