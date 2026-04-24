import Image from "next/image";
import Link from "next/link";

function SingleSolutionCard2({ card }) {
  return (
    <Link
      href={card.link}
      target="_blank"
      className="group relative bg-white rounded-xl p-6 shadow-sm overflow-hidden h-64 flex flex-col justify-center items-center text-center"
    >
      {/* Front */}
      <Image src={card.icon} alt={card.title} width={120} height={80} />
      <h3 className="text-lg font-semibold mt-3">{card.title}</h3>

      {/* Hover Details */}
      <div className="absolute inset-0 bg-[#005582] text-white flex flex-col justify-center items-center p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-sm mb-3">{card.description}</p>
      </div>
    </Link>
  );
}

export default SingleSolutionCard2;
