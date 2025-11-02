"use client";

import { useRouter } from "next/navigation";

function Button({btnName, route}) {
    const router = useRouter()

    const handleClick = () => {
        router.push(route)
    }

    return ( 
        
        <button className="px-6 py-3 text-base font-semibold text-white bg-[#105783] hover:bg-opacity-80 transition-all duration-300 transform hover:bg-[#084c77] rounded-md hover:cursor-pointer"
        onClick={handleClick}>
            {btnName}
        </button>
        
     );
}

export default Button;