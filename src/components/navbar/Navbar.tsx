import { Image, Link } from "@nextui-org/react"
import { MiniNavbar } from "./MiniNavbar"

export const Navbar = () => {
  return (
    <>
        <div className="w-full h-[100px] flex lg:px-20 justify-between ">
            <div className=" flex justify-center">
                <Image src="/logo_navbar.webp" alt="logo belafresh" className="w-[150px] h-[100px] rounded-none" />
            </div>
            <nav className="w-[80%]  h-full  sm:flex justify-center items-center list-none text-orange-600 hidden ">
                    <li ><Link href="#" className="hover:text-orange-300 text-[12px] md:text-[14px] fles justify-center" >Exfoliantes</Link></li>
                    <li className="sm:mx-[1%] "><Link href="#" className="hover:text-orange-300 text-[12px] md:text-[14px] fles justify-center" >Tónicos faciales</Link></li>
                    <li className="sm:mx-[1%] "><Link href="#" className="hover:text-orange-300 text-[12px] md:text-[14px] fles justify-center" >Sueros faciales</Link></li>
                    <li className="sm:mx-[1%] "><Link href="#" className="hover:text-orange-300 text-[12px] md:text-[14px] fles justify-center" >Cremas faciales</Link></li>
                    <li ><Link href="#" className="hover:text-orange-300 text-[12px] md:text-[14px] fles justify-center" >Suero de pestañas y cejas</Link></li>
            </nav>
            <nav className="w-[20%] h-full flex justify-center items-center list-none sm:hidden">
                <MiniNavbar/>
            </nav>
        </div>
    </>
  )
}
