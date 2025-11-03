import Button from "@/components/ui/button";
import { FaCloud, FaHandPointRight, FaHeadphones } from "react-icons/fa6";
import { SlScreenDesktop } from "react-icons/sl";
function WHY_SECTION() {
    const contents1 = [
        {
            icon: <FaHandPointRight className="text-2xl md:text-4xl" />,
            title: "Easy to Use",
            description: "Our CMS is designed with a user-friendly interface, making it easy for anyone to create and manage content without technical expertise."
        },
        {
            icon: <SlScreenDesktop className="text-2xl md:text-4xl" />,
            title: "Easy to Use",
            description: "Our CMS is designed with a user-friendly interface, making it easy for anyone to create and manage content without technical expertise."
        },
       
    ] 
    const contents2 = [
        {
            icon: <FaHeadphones className="text-2xl md:text-4xl" />,
            title: "Easy to Use",
            description: "Our CMS is designed with a user-friendly interface, making it easy for anyone to create and manage content without technical expertise."
        },
        {
            icon: <FaCloud className="text-2xl md:text-4xl" />,
            title: "Easy to Use",
            description: "Our CMS is designed with a user-friendly interface, making it easy for anyone to create and manage content without technical expertise."
        },
    ] 
    return ( <>
     <div className="space-large"></div>
    <div className="container">
        <div className="title">
            <h2 className="text-3xl md:text-5xl text-slate-900 font-bold mb-10 text-center">Why choose Yodeck</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mx-auto px-4 mt-20 place-items-center">
            {contents1.map((content, index) => (
                <div  key={index} className="w-sm flex flex-col gap-5 items-center text-center">
                    {content?.icon}
                    <h3 className="text-2xl font-semibold">{content?.title}</h3>
                    <p className="text-slate-600">{content?.description}</p>
                </div>
            ))}
        </div>
        <div className="flex justify-center items-center">
             <Button className={"my-10"} btnName={"Get Started"} route={"/cms"}/>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] mx-auto px-4  place-items-center">
            {contents2.map((content, index) => (
                <div  key={index} className="w-sm flex flex-col gap-5 items-center text-center">
                    {content?.icon}
                    <h3 className="text-2xl font-semibold">{content?.title}</h3>
                    <p className="text-slate-600">{content?.description}</p>
                </div>
            ))}
        </div>
    </div>
    </> );
}

export default WHY_SECTION;