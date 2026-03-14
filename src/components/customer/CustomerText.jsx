function CustomerText() {
  const reviews = [
    {
      text: "Very user friendly, reliable, and cost effective. This system allows us to make instant changes from our computer or phone.",
      name: "Jennifer Tames",
      role: "HR Manager, Hotel Del Coronado",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "OptiSigns helped us transform our public spaces into engaging displays. Within a few hours we had it running.",
      name: "Rudi Gesch",
      role: "Director, Sheboygan Christian School",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "OptiSigns is the solution we were looking for as our company grows and opens multiple offices.",
      name: "Rachel Kuhr",
      role: "Communications Manager, HOA Living",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      text: "We were looking to make our digital menus more attractive and achieved that with OptiSigns.",
      name: "Robert Herrera",
      role: "Owner, Les Cavistes Restaurant",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {reviews.map((review, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-xl shadow-sm border"
        >
            <img className="flex items-center h-4" src="https://cdn.prod.website-files.com/638d465c7903a622e8a1dbd1/652824fb9a51db8d6a6593df_quote.svg" alt="" />
            <div className="space-small"></div>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            {review.text}
          </p>

          <div className="flex items-center gap-3">
            <img
              src={review.img}
              alt={review.name}
              className="w-10 h-10 rounded-full"
            />

            <div>
              <p className="font-semibold text-gray-800 text-sm">
                {review.name}
              </p>
              <p className="text-xs text-gray-500">
                {review.role}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomerText;