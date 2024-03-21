

import clsx from "clsx";
import { useUIStore } from "../../store/ui-store";
import {
  IoCloseOutline,
 
} from "react-icons/io5";
import { Button, Link } from "@nextui-org/react";
import { PiWhatsappLogoThin,PiInstagramLogoLight } from "react-icons/pi";

export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

 

  return (
    <div>
      {/* Background black */}
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-20 bg-black opacity-30" />
      )}

      {/* Blur */}
      {isSideMenuOpen && (
        <div
          onClick={closeMenu}
          className="fade-in fixed top-0 left-0 w-screen h-screen z-20 backdrop-filter backdrop-blur-sm"
        />
      )}
      <div
        className={clsx(
          "fixed p-5 right-0 top-0 w-[70%] h-full bg-red-50 z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={30}
          className="absolute top-5 right-5 cursor-pointer text-[#ca8a8a]"
          onClick={() => closeMenu()}
        />
       <div className="pt-10 w-full h-full flex flex-col justify-between">
          <nav className="h-auto w-full list-none font-medium">
            <li className="border-b border-solid border-red-300"><Link href="#" className="pl-2 lg:mr-[2%]  h-14  hover:text-[#eeb9b9] text-[#ca8a8a] md:text-[0.7em] lg:text-[0.8em] " >Exfoliantes</Link></li>
            <li className="lg:mx-[2%] border-b border-solid border-red-300 "><Link href="#" className="pl-2 h-14  hover:text-[#eeb9b9] text-[#ca8a8a] md:text-[0.7em] lg:text-[0.8em] " >Tónicos faciales</Link></li>
            <li className="lg:mx-[2%] border-b border-solid border-red-300 "><Link href="#" className="pl-2 h-14  hover:text-[#eeb9b9] text-[#ca8a8a] md:text-[0.7em] lg:text-[0.8em] " >Sueros faciales</Link></li>
            <li className="lg:mx-[2%] border-b border-solid border-red-300 "><Link href="#" className="pl-2 h-14  hover:text-[#eeb9b9] text-[#ca8a8a] md:text-[0.7em] lg:text-[0.8em] " >Cremas faciales</Link></li>
            <li className="border-b border-solid border-red-300"><Link href="#" className="pl-2 lg:ml-[2%] w-full h-14  hover:text-[#eeb9b9] text-[#ca8a8a] md:text-[0.7em] lg:text-[0.8em] " >Suero de pestañas y cejas</Link></li>
            <li className="border-b border-solid border-red-300"><Link href="#" className="pl-2 lg:ml-[2%] w-full h-14  hover:text-[#eeb9b9] text-[#ca8a8a] md:text-[0.7em] lg:text-[0.8em] " >Kits</Link></li>
          </nav>
          <div className="h-16 w-full border-t border-solid border-red-300 flex justify-center">
              <div className="h-full w-1/2 flex  justify-around items-center">
                <PiInstagramLogoLight size={30} className="text-red-300"/>
                <PiWhatsappLogoThin size={30} className="text-red-300"/>
              
              </div>
          </div>
       </div>

      </div>
    
      
        

        
      
     
    </div>
  );
};
