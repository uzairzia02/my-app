
import Link from "next/link";

export default function Footer() {
    return (
        <div className="sm:h-[100px] h-[30px] w-auto sm:bg-purple-600 bg-purple-600 flex items-center justify-center 
         flex-wrap">          
            <div className="listItems">
                <ul className="flex m-0 gap-4 ml-4 sm:gap-8 p-0 sm:pr-10 text-lg font-bold sm:text-4xl">
                    <Link href={""}>
                    <li className="hover:cursor-pointer hover:text-white duration-500" >Facebook</li>
                    </Link>
                    <li className="hover:cursor-pointer hover:text-white duration-500">Tiktok</li>
                    <li className="hover:cursor-pointer hover:text-white duration-500">LinkedIn</li>
                    <li className="hover:cursor-pointer hover:text-white duration-500">Twitter</li>                    
                </ul>
            </div>
        </div>
    )
}