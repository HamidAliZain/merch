import Camera from "@/assets/Icons/camera"
import Hamburger from "@/assets/Icons/hamburger"
import Logo from "@/assets/logo"
import Link from "next/link"

const Navbar = () => {
    return (
        <><nav className="container mx-auto max-w-[93%] mt-5   ">
            <div className="flex justify-between text-xs items-center">
                <p>Call us: (310) 967-7753</p>
                <p className="flex gap-2 items-center">Schedule a call
                    <Camera className={"w-6 h-6"} />
                </p>
            </div>
            <div className="flex justify-between   mt-4 items-center">
                <div className="flex gap-8 items-center">
                    <Logo className={"w-[142px]"} />
                    <div className="hidden gap-4 text-sm lg:flex">
                        <Link href={"/"}>Solutions</Link>
                        <Link href={"/"}>Products</Link>
                        <Link href={"/"}>Case Studies</Link>
                        <Link href={"/"}>Catalogs</Link>
                        <Link href={"/"}>Company</Link>
                        <Link href={"/"}>Experiences</Link>
                    </div>
                </div>

                <div className="flex gap-5  items-center ">
                    <button type="button" className="bg-[#f3f3f3]  py-2 px-4 rounded-md hidden sm:flex">Get Start</button>
                    <div className="p-[3px] rounded-md bg-[#9e9e9e0f] flex lg:hidden">
                        <Hamburger className={"w-6 h-6"} />
                    </div>
                </div>
            </div>
        </nav> 
        </>
    )
}

export default Navbar