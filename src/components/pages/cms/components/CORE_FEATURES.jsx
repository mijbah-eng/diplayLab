import { FaCloud } from "react-icons/fa6";
import { FiCheck } from "react-icons/fi";
import { FaDatabase } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
function CORE_FEATURES() {

    const features = [
        {
            icon: <FaCloud size={30} />,
            title: "Centralized Cloud Management Platform",
            description: "Securely update screens in real time from any location from our easy-to-use, content management system. Manage 1 or 100s of screens from a browser."
        },
        {
            icon: <BsGraphUpArrow size={30} />,
            title: "Scalable to Support your Brand Growth",
            description: "Quickly scale from one to many screens, whether at the same location or satellite offices. Affordable system makes it versatile across use-cases and applications."
        },
        {
            icon: <FiCheck size={30} />,
            title: "Backed by Trusted Security Frameworks",
            description: "Certified by ISO 27001 & SOC 2, we remain committed to data protection and compliance. The Cloud CMS is secured via 2FA, IP access controls, and SAML/SSO."
        },
        {
            icon: <FaDatabase size={30} />,
            title: "Integrated with Popular Data Sources",
            description: "Known for Dynamic Data Integrations, the platform features pre-built integrations with Canva, Google, Microsoft, Power BI, etc. to keep your content in sync."
        },
    ]
    return ( 
        <>

        <div className="bg-blue-glow">
            <div className="container pt-5 text-white z-10">
                <h3 className="text-3xl md:text-5xl font-bold text-center mx-auto">
                    Core Features
                </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-5 mx-auto px-4 py-20 place-items-center">
                {features.map((feature, index) => (
                <div key={index} className="w-sm flex flex-col items-center gap-4 text-center">
                    <div className="bg-white p-3 rounded-full text-black">
                    {feature?.icon}
                    </div>
                    <h4 className="text-xl md:text-2xl font-semibold">
                        {feature?.title}
                    </h4>
                    <p className="">
                        {feature?.description}
                    </p>
                </div>
                ))}
                
            </div>
        </div>

</div>

        </>
     );
}

export default CORE_FEATURES;