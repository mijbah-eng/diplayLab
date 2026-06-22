import Link from "next/link";
import { products_details_all_data } from "@/utils/products_details_data";
import {
    Cloud,
    RotateCw,
    Users,
    Monitor,
    Wifi,
    Cpu,
    Layers,
    Award,
    ChevronRight,
    Download,
    Tablet,
    Box,
    ClipboardList,
    Grid2X2,
    Sun
} from "lucide-react";

// A beautiful, faint skyline of skyscrapers in the background of the image card
const SkylineBackdrop = ({ isEven }) => {
    return (
        <svg
            className={`absolute bottom-0 w-full h-36 text-blue-500/8 fill-current pointer-events-none z-0 ${isEven ? "right-0 scale-x-[-1]" : "left-0"
                }`}
            viewBox="0 0 400 200"
            preserveAspectRatio="none"
        >
            <path d="M 0,200 L 0,140 L 15,140 L 15,120 L 30,120 L 30,160 L 40,160 L 40,90 L 60,90 L 60,70 L 65,70 L 65,90 L 75,90 L 75,150 L 85,150 L 85,100 L 105,100 L 105,50 L 108,50 L 108,100 L 120,100 L 120,170 L 130,170 L 130,130 L 155,130 L 155,80 L 170,50 L 185,80 L 185,140 L 195,140 L 195,110 L 220,110 L 220,60 L 225,40 L 230,60 L 245,60 L 245,150 L 255,150 L 255,100 L 275,100 L 275,160 L 285,160 L 285,120 L 305,120 L 305,80 L 310,60 L 315,80 L 325,80 L 325,170 L 340,170 L 340,135 L 365,135 L 365,95 L 380,95 L 380,150 L 400,150 L 400,200 Z" />
        </svg>
    );
};

// Elegant wave separators to smoothly transition between image and text containers
const WaveSeparator = ({ isEven }) => {
    return (
        <>
            {/* Desktop view separator */}
            {isEven ? (
                <svg
                    className="absolute left-[-1px] top-0 bottom-0 h-full w-20 text-white fill-current hidden lg:block z-10 pointer-events-none"
                    viewBox="0 0 100 500"
                    preserveAspectRatio="none"
                >
                    <path d="M0,0 C80,100 80,400 0,500 Z" />
                </svg>
            ) : (
                <svg
                    className="absolute right-[-1px] top-0 bottom-0 h-full w-20 text-white fill-current hidden lg:block z-10 pointer-events-none"
                    viewBox="0 0 100 500"
                    preserveAspectRatio="none"
                >
                    <path d="M100,0 C20,100 20,400 100,500 Z" />
                </svg>
            )}

            {/* Mobile/Tablet view separator */}
            <svg
                className="absolute bottom-[-1px] left-0 right-0 w-full h-12 text-white fill-current lg:hidden z-10 pointer-events-none"
                viewBox="0 0 500 100"
                preserveAspectRatio="none"
            >
                <path d="M0,100 L0,50 C150,90 350,10 500,50 L500,100 Z" />
            </svg>
        </>
    );
};

// Dynamically select the badge icon based on the product badge text
const getBadgeIcon = (text) => {
    const lower = text.toLowerCase();
    if (lower.includes("kiosk")) return <Tablet className="w-3.5 h-3.5" />;
    if (lower.includes("hologram") || lower.includes("holograph")) return <Box className="w-3.5 h-3.5" />;
    if (lower.includes("menu") || lower.includes("board")) return <ClipboardList className="w-3.5 h-3.5" />;
    if (lower.includes("wall")) return <Grid2X2 className="w-3.5 h-3.5" />;
    if (lower.includes("poster")) return <Monitor className="w-3.5 h-3.5" />;
    if (lower.includes("outdoor")) return <Sun className="w-3.5 h-3.5" />;
    return <Monitor className="w-3.5 h-3.5" />;
};

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
        if (!imgUrl) return <Cloud className="text-blue-600 w-5 h-5 shrink-0" />;
        const iconName = imgUrl.toLowerCase();
        if (iconName.includes("monitor") || iconName.includes("screen") || iconName.includes("panel")) {
            return <Monitor className="text-blue-600 w-5 h-5 shrink-0" />;
        }
        if (iconName.includes("wifi") || iconName.includes("network") || iconName.includes("connect")) {
            return <Wifi className="text-blue-600 w-5 h-5 shrink-0" />;
        }
        if (iconName.includes("joystick") || iconName.includes("control") || iconName.includes("touch")) {
            return <Cpu className="text-blue-600 w-5 h-5 shrink-0" />;
        }
        if (iconName.includes("library") || iconName.includes("format") || iconName.includes("media") || iconName.includes("os")) {
            return <Layers className="text-blue-600 w-5 h-5 shrink-0" />;
        }
        return <Award className="text-blue-600 w-5 h-5 shrink-0" />;
    };

    // Default features matching the mockup
    const defaultFeatures = [
        {
            feature_title: "Cloud Based",
            feature_description: "Secure cloud platform for reliable content management.",
            icon: <Cloud className="text-blue-600 w-5 h-5 shrink-0" />
        },
        {
            feature_title: "Real-time Sync",
            feature_description: "Instant updates across all your displays, anywhere.",
            icon: <RotateCw className="text-blue-600 w-5 h-5 shrink-0" />
        },
        {
            feature_title: "Multi-user",
            feature_description: "Role-based access for seamless team collaboration.",
            icon: <Users className="text-blue-600 w-5 h-5 shrink-0" />
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

    // Utilize the high-res transparent PNG images for a clean blend with the card gradients
    const imageToUse = `/images/products/products-${product.id}.png`;

    return (
        <div
            className={`bg-white border border-slate-100/80 rounded-[32px] shadow-[0_0_40px_rgba(0,0,0,0.04)] hover:shadow-[0px_5px_15px_rgba(0,0,0,0.35)] transition-all duration-500 overflow-hidden flex flex-col ${isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                } w-full group`}
        >
            {/* Product Image Container */}
            <div
                className={`w-full lg:w-[45%] flex items-center justify-center p-8 lg:p-12 relative min-h-[360px] lg:min-h-full bg-gradient-to-br from-[#ebf5ff]/60 via-[#f0f9ff]/40 to-[#e0f2fe]/30 overflow-hidden shrink-0`}
            >
                {/* City Skyline Backdrop */}
                <SkylineBackdrop isEven={isEven} />

                {/* Curved Wave Border */}
                <WaveSeparator isEven={isEven} />

                {/* Product Image Link */}
                <Link href={`/details?id=${product.id}`} className="w-full h-full flex items-center justify-center relative z-20">
                    <img
                        className="w-[85%] max-h-[320px] md:max-h-[500px] object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_20px_50px_rgba(0,122,155,0.18)]"
                        src={imageToUse}
                        alt={product.name}
                        onError={(e) => {
                            // Fallback to original product.image if png is not loaded properly
                            e.target.src = product.image;
                        }}
                    />
                </Link>
            </div>

            {/* Product Details Container */}
            <div className="w-full lg:w-[55%] p-6 pl-0 sm:pl-0 sm:p-8 lg:pl-0 lg:p-10 flex flex-col justify-between relative z-10 bg-white">
                <div>
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 bg-blue-50/70 text-blue-600 border border-blue-100/50 text-[10px] sm:text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-lg w-fit mb-4">
                        {getBadgeIcon(badgeText)}
                        <span>{badgeTextUpper}</span>
                    </div>

                    {/* Title */}
                    <Link href={`/details?id=${product.id}`}>
                        <h3 className="text-2xl lg:text-4xl font-black tracking-tight text-slate-900 hover:text-blue-600 transition-colors leading-tight">
                            {brandedName}
                        </h3>
                    </Link>

                    {/* Description */}
                    <p className="text-slate-500 text-sm md:text-base mt-4 leading-relaxed font-normal">
                        {description}
                    </p>

                    {/* Divider */}
                    <div className="border-t border-slate-100/80 my-7"></div>
                </div>

                {/* Features and Action Buttons inside: side-by-side on desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Features Column */}
                    <div className="lg:col-span-7 space-y-5">
                        {features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-full border border-blue-100 bg-blue-50/30 flex items-center justify-center shrink-0">
                                    {feat.icon}
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-slate-800 text-sm md:text-base">
                                        {feat.feature_title}
                                    </h4>
                                    <p className="text-slate-500 text-xs md:text-sm mt-0.5 leading-snug">
                                        {feat.feature_description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons Column */}
                    <div className="lg:col-span-5 flex flex-col gap-3 justify-center w-full">
                        <Link
                            href={`/details?id=${product.id}`}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-between transition-all shadow-md shadow-blue-600/10 hover:shadow-blue-600/20 cursor-pointer text-sm md:text-base"
                        >
                            <span>Product Inquiry</span>
                            <ChevronRight className="w-5 h-5" />
                        </Link>

                        <Link
                            href={`/contact?product=${encodeURIComponent(product.name)}`}
                            className="border border-blue-600 text-blue-600 bg-white hover:bg-blue-50/20 font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all cursor-pointer text-sm md:text-base shadow-sm"
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