import { Button, Image, Link } from "@nextui-org/react"
import { PiWhatsappLogoThin } from "react-icons/pi";
import { FiMenu } from "react-icons/fi";
import { useUIStore } from "../../store/ui-store";

export const Navbar = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);
 
 
  return (
    <>
       
      <div className="w-full h-[90px] flex px-[5%] md:px-5 lg:px-[5%] texto justify-between bg-red-50 overflow-hidden">
          <div className=" flex justify-center cursor-pointer">
              <Image src="/logo_navbar.png" alt="logo belafresh" className="w-[130px] h-[90px] rounded-none " />
          </div>
          <nav className="w-[80%]  h-full hidden md:flex md:justify-around lg:justify-center font-light items-center list-none  ">
                  <li ><Link href="#" className="lg:mr-[2%]  hover:text-[#eeb9b9] text-[#ca8a8a] text-[0.8em] " >Exfoliantes</Link></li>
                  <li className="lg:mx-[2%] "><Link href="#" className="hover:text-[#eeb9b9] text-[#ca8a8a] text-[0.8em] " >Tónicos faciales</Link></li>
                  <li className="lg:mx-[2%] "><Link href="#" className="hover:text-[#eeb9b9] text-[#ca8a8a] text-[0.8em] " >Sueros faciales</Link></li>
                  <li className="lg:mx-[2%] "><Link href="#" className="hover:text-[#eeb9b9] text-[#ca8a8a] text-[0.8em] " >Cremas faciales</Link></li>
                  <li className="lg:mx-[2%] "><Link href="#" className="hover:text-[#eeb9b9] text-[#ca8a8a] text-[0.8em] " >Suero de pestañas y cejas</Link></li>
                  <li ><Link href="#" className="lg:ml-[2%] w-full hover:text-[#eeb9b9] text-[#ca8a8a] text-[0.8em] " >Kits</Link></li>
          </nav>
          <div className="w-auto hidden md:flex items-center ">
            <Link href="https://wa.me/523338312375"  >
              <Button href="#" className="bg-red-300 rounded-3xl border border-solid border-pink-300 h-[40px] text-[#864232] flex justify-around font-light cursor-pointer">Contáctanos <PiWhatsappLogoThin size={30}/></Button>
            </Link>
          </div>
          <div className=" h-full flex justify-center items-center list-none md:hidden " >
            <button onClick={openSideMenu}><FiMenu size={25} className="text-[#864232]"/></button>
          </div>
      </div>
        
    </>
  )
}
