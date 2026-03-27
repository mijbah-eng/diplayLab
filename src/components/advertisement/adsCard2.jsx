function AdsCard2({ data }) {
  return (
    <div className="border rounded-xl p-6 bg-white hover:shadow-lg transition">
      {" "}
      <img
        src={data.ads_card_image_url}
        alt={data.ads_card_title}
        className="w-full h-[180px] object-cover rounded-lg mb-4"
      />{" "}
      <h3 className="text-xl font-semibold mb-3"> {data.ads_card_title} </h3>{" "}
      <p className="text-gray-600 text-sm mb-5">
        {" "}
        {data.ads_card_description}{" "}
      </p>{" "}
      <a
        href={data.ads_card_link_address}
        className="text-[#3095b5] font-medium hover:underline"
      >
        {" "}
        {data.ads_card_link_text} →{" "}
      </a>{" "}
    </div>
  );
}
export default AdsCard2;
