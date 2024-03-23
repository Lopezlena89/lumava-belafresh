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
                    <div className=" h-full flex flex-col justify-center texto md:ml-5">
                        <h3 className="text-[#ca8a8a] text-[14px]  font-semibold text-sm">Características</h3>
                        <span className="text-red-300 text-[14px] h-[16px] font-semibold ">Exfoliantes</span>
                        <span className="text-red-300 text-[14px] h-[16px] font-semibold ">Tónicos faciales</span>
                        <span className="text-red-300 text-[14px] h-[16px] font-semibold ">Sueros faciales</span>
                        <span className="text-red-300 text-[14px] h-[16px] font-semibold ">Cremas faciales</span>
                        <span className="text-red-300 text-[14px] h-[16px] font-semibold ">Suero pestañas y cejas</span>
                        <span className="text-red-300 text-[14px] h-[16px] font-semibold ">Kit</span>
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
