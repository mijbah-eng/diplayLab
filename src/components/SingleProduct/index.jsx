import Link from "next/link";
import { products_details_all_data } from "@/utils/products_details_data";
import { Cloud, RotateCw, Users, Monitor, Wifi, Cpu, Layers, Award, ChevronRight, Download } from "lucide-react";

function SingleProduct({ product, index }) {
    if (!product) return null;
    const details = products_details_all_data[product.id] || {};

    // Dynamic badge text based on product type
    let badgeText = "DISPLAY SYSTEM";
    const name = product.name.toLowerCase();
    if (name.includes("cms") || name.includes("software")) {
        badgeText = "CMS Software";
    } else if (name.includes("kiosk")) {
        badgeText = "Smart Kiosk";
    } else if (name.includes("holograph") || name.includes("hologram")) {
        badgeText = "3D Hologram";
    } else if (name.includes("menu")) {
        badgeText = "Digital Menu Board";
    } else if (name.includes("poster")) {
        badgeText = "Digital Poster";
    } else if (name.includes("outdoor")) {
        badgeText = "Outdoor Signage";
    } else if (name.includes("window")) {
        badgeText = "Window Display";
    } else if (name.includes("wall")) {
        badgeText = "Video Wall";
    } else if (name.includes("indoor")) {
        badgeText = "Indoor Display";
    }

    const badgeTextUpper = badgeText.toUpperCase();

    // Map feature image name/url to Lucide Icons
    const getIcon = (imgUrl) => {
        if (!imgUrl) return <Cloud className="text-[#007a9b] w-5 h-5 mt-0.5 shrink-0" />;
        const iconName = imgUrl.toLowerCase();
        if (iconName.includes("monitor") || iconName.includes("screen")) {
            return <Monitor className="text-[#007a9b] w-5 h-5 mt-0.5 shrink-0" />;
        }
        if (iconName.includes("wifi") || iconName.includes("network")) {
            return <Wifi className="text-[#007a9b] w-5 h-5 mt-0.5 shrink-0" />;
        }
        if (iconName.includes("joystick") || iconName.includes("control") || iconName.includes("automation")) {
            return <Cpu className="text-[#007a9b] w-5 h-5 mt-0.5 shrink-0" />;
        }
        if (iconName.includes("library") || iconName.includes("format") || iconName.includes("media")) {
            return <Layers className="text-[#007a9b] w-5 h-5 mt-0.5 shrink-0" />;
        }
        return <Award className="text-[#007a9b] w-5 h-5 mt-0.5 shrink-0" />;
    };

    // Default features matching the mockup
    const defaultFeatures = [
        {
            feature_title: "Cloud Based",
            feature_description: "Secure cloud platform for reliable content management.",
            icon: <Cloud className="text-[#007a9b] w-5 h-5 mt-0.5 shrink-0" />
        },
        {
            feature_title: "Real-time Sync",
            feature_description: "Instant updates across all your displays, anywhere.",
            icon: <RotateCw className="text-[#007a9b] w-5 h-5 mt-0.5 shrink-0" />
        },
        {
            feature_title: "Multi-user",
            feature_description: "Role-based access for seamless team collaboration.",
            icon: <Users className="text-[#007a9b] w-5 h-5 mt-0.5 shrink-0" />
        }
    ];

    // If details.key_features is available, map it, else use defaults
    const features = details.key_features?.slice(0, 3).map((feat) => ({
        feature_title: feat.feature_title,
        feature_description: feat.feature_description,
        icon: getIcon(feat.feature_imgUrl)
    })) || defaultFeatures;

    // Display Lab branding prefix
    const brandedName = product.name.toLowerCase().startsWith("display lab")
        ? product.name
        : `Display Lab ${product.name}`;

    // Main description
    const description = details.product_description || "Premium commercial digital signage display designed for high-traffic environments.";

    const isEven = index % 2 === 1;

    return (
        <div className={` bg-white border border-slate-100 rounded-[24px] shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 overflow-hidden flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"} w-full group`}>
            {/* Product Image */}
            <div className={`w-full lg:w-[45%] flex items-center justify-center p-8 lg:p-12 relative  min-h-[320px] lg:min-h-full`}>
                <Link href={`/details?id=${product.id}`} className="w-full h-full flex items-center justify-center">
                    <img
                        className="w-full  h-full object-contain transition-transform duration-500 group-hover:scale-105"
                        src={product.image}
                        alt={product.name}
                    />
                </Link>
            </div>

            {/* Product Details */}
            <div className="w-full lg:w-[55%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                    {/* Badge */}
                    <div className="bg-[#e0f2fe] text-[#007a9b] text-[10px] sm:text-[11px] font-bold tracking-wider uppercase px-3.5 py-1 rounded-full w-fit mb-4">
                        {badgeTextUpper}
                    </div>

                    {/* Title */}
                    <Link href={`/details?id=${product.id}`}>
                        <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-slate-900 hover:text-[#007a9b] transition-colors leading-tight">
                            {brandedName}
                        </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-slate-500 text-sm md:text-base mt-3 leading-relaxed">
                        {description}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-slate-100 my-6"></div>
                </div>

                {/* Features and Action Buttons side-by-side */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    {/* Left Side inside: Features */}
                    <div className="md:col-span-7 space-y-4">
                        {features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                {feat.icon}
                                <div>
                                    <h4 className="font-bold text-slate-800 text-xs md:text-sm">
                                        {feat.feature_title}
                                    </h4>
                                    <p className="text-slate-500 text-xs mt-0.5 leading-snug">
                                        {feat.feature_description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side inside: Action Buttons */}
                    <div className="md:col-span-5 flex flex-col gap-3 justify-center w-full">
                        <Link
                            href={`/details?id=${product.id}`}
                            className="bg-[#007a9b] hover:bg-[#006580] text-white font-semibold py-3 px-5 rounded-xl flex items-center justify-between transition-all shadow-sm hover:shadow-md cursor-pointer text-sm"
                        >
                            <span>Product Inquiry</span>
                            <ChevronRight className="w-4 h-4" />
                        </Link>

                        <Link
                            href={`/contact?product=${encodeURIComponent(product.name)}`}
                            className="border border-[#007a9b] text-[#007a9b] hover:bg-sky-50/50 font-semibold py-3 px-5 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer text-sm"
                        >
                            <Download className="w-4 h-4" />
                            <span>Download Brochure</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;