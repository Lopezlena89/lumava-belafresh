import { Image } from "@nextui-org/react"
import { MiniNavbar } from "./MiniNavbar"

export const Navbar = () => {
  return (
    <>
        <div className="w-screen h-[100px] flex justify-between">
            <div className="w-[40%] md:w-[20%] h-full  flex justify-center">
                <Image src="/logo_navbar.webp" alt="logo belafresh" className="w-[120px] h-full" />
            </div>
            <nav className="w-[80%] md:w-[70%] h-full  sm:flex justify-center items-center list-none sm:text-[10px] md:text-[12px] lg:text-[15px] text-orange-600 hidden ">
                    <li className="sm:mx-[1%] "><a href="#" className="hover:text-orange-300" >Exfoliantes</a></li>
                    <li className="sm:mx-[1%] "><a href="#" className="hover:text-orange-300" >Tónicos faciales</a></li>
                    <li className="sm:mx-[1%] "><a href="#" className="hover:text-orange-300" >Sueros faciales</a></li>
                    <li className="sm:mx-[1%] "><a href="#" className="hover:text-orange-300" >Cremas faciales</a></li>
                    <li className="sm:mx-[1%] "><a href="#" className="hover:text-orange-300" >Suero de pestañas y cejas</a></li>
            </nav>
            <nav className="w-[20%] h-full flex justify-center items-center list-none sm:hidden">
                <MiniNavbar/>
            </nav>
        </div>
    </>
  )
}
