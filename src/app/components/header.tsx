import Image from "next/image";
import logo from "@/app/images/logo.webp"
import Link from "next/link";

export default function Header() {
    return (
        <div className="sm:h-[120px] h-[50px] w-auto sm:bg-purple-600 bg-purple-600 flex items-center justify-center sm:items-center sm:justify-between flex-wrap">
            <div className="">
                <Image className="w-0 sm:w-auto h-0 sm:h-[80px] rounded-xl ml-2 border-4 hidden sm:block " src={logo} alt="logo" />
            </div>
            <div className="listItems">
                <ul className="flex m-0 gap-4 ml-4 sm:gap-8 p-0 sm:pr-10 text-lg font-bold sm:text-4xl">
                    <Link href={"/"}>
                    <li className="hover:cursor-pointer hover:text-white duration-500">Home</li>
                    </Link>
                    <Link href={"/categories"}>
                    <li className="hover:cursor-pointer hover:text-white duration-500">Categories</li>
                    </Link>
                    <Link href={"/aboutus"}>
                    <li className="hover:cursor-pointer hover:text-white duration-500">About us</li>
                    </Link>
                    <Link href={"/contactus"}>
                    <li className="hover:cursor-pointer hover:text-white duration-500">Contact Us</li>
                    </Link>
                    <Link href={"/writeforus"}>
                    <li className="hover:cursor-pointer hover:text-white duration-500">Write for Us</li>
                    </Link>

                </ul>
            </div>
        </div>
    )
}