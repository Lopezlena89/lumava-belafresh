import { Image } from "@nextui-org/react"
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";


export const Footer = () => {
  return (
    <>
        <footer className="w-full h-[200px] px-3 sm:px-20 bg-gray-100 flex ">
            <div className="w-1/2 h-full flex flex-col items-start justify-center">
                <Image 
                    src="/logo.png" 
                    alt="logo belafresh" 
                    className="w-[150px] h-[100px] rounded-none  " 
                />
                <span className="text-[10px] mt-5 text-gray-400">Copyright © 2024 Belafresh Todos los derechos reservados.</span>
            </div>
            <div className="w-1/2 h-full flex justify-end items-center">
                <FaWhatsapp size={30} className="text-orange-700 mx-2"/>
                <FaInstagram size={30} className="text-orange-700 mx-2"/>
                <AiOutlineMail size={30} className="text-orange-700 mx-2"/>
            </div>
        </footer>
    </>
  )
}
