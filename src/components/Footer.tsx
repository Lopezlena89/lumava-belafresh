import { Image, Link } from "@nextui-org/react"
import { PiWhatsappLogoThin,PiInstagramLogoThin } from "react-icons/pi";

export const Footer = () => {
  return (
    <>
        <footer className="w-full h-[180px] px-3 sm:px-10 bg-red-50 flex flex-col ">
            <div className="w-full h-[150px] border-b border-solid border-red-300 flex justify-between ">
                <div className="w-[250px] h-full flex flex-col items-start justify-center">
                    <Image 
                        src="/logo_navbar.png" 
                        alt="logo belafresh" 
                        className="w-[150px] h-[100px] rounded-none  " 
                    />
                    <span className="text-[7px] md:text-[10px] font-bold  text-red-300 texto">Direccion: Rubens 5251 Eucalipto Vallarta, Zapopan Jalisco</span>
                </div>
                <div className="w-full h-full flex">
                    <div className=" h-full flex flex-col justify-end texto ml-10">
                        <h3 className="text-[#ca8a8a] text-[9px] h-[35px] font-semibold text-sm">Características</h3>
                        <span className="text-red-300 text-[9px] h-[16px]  cursor-pointer">Exfoliantes</span>
                        <span className="text-red-300 text-[9px] h-[16px]  cursor-pointer">Tónicos faciales</span>
                        <span className="text-red-300 text-[9px] h-[16px]  cursor-pointer">Sueros faciales</span>
                        <span className="text-red-300 text-[9px] h-[16px]  cursor-pointer">Cremas faciales</span>
                        <span className="text-red-300 text-[9px] h-[16px]  cursor-pointer">Suero de pestañas y cejas</span>
                        <span className="text-red-300 text-[9px] h-[16px]  cursor-pointer">Kit</span>
                    </div>
                    
                </div>
                <div className=" h-full flex justify-end items-center">
                   <Link href="https://www.instagram.com/bela.fresh/"><PiInstagramLogoThin size={30} className="text-[#ca8a8a] hover:text-[#eeb9b9] mx-2"/></Link>
                    <Link href="https://wa.me/523338312375" ><PiWhatsappLogoThin size={30} className="text-[#ca8a8a] hover:text-[#eeb9b9] mx-2"/></Link>
                
                    
                </div>
            </div>
            <span className="text-[10px] texto text-red-300">Copyright © 2024 Belafresh Todos los derechos reservados.</span>
        </footer>
    </>
  )
}
