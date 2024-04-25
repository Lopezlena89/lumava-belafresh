import { Button, Image, Link } from "@nextui-org/react";
import { FaMoon } from "react-icons/fa";


interface Props{
    producto: {
      nombre: string
      imagen: string
      precio: string
      beneficio: string
      kit?:string
      uso: string
      cantidad: string
  }
}
export const ProductoModal = ({producto}:Props) => {
  return (
    <>
        <div className="w-full min-h-[120px] md:min-h-[300px] rounded-lg flex items-center relative">
          <img 
            src={producto.imagen}  
            loading="lazy" 
            alt={producto.nombre}
            className="w-[220px] rounded-xl border border-solid border-[#ca8a8a]"
          />
          <span className="absolute bottom-3 left-[14%] z-10 font-bold text-[#ca8a8a] text-[10px]">{producto.uso}</span>
          <div className="w-[60%] flex flex-col items-center justify-around ml-2">
            <span className="font-semibold text-[#ca8a8a] text-center text-[15px] ">{producto.nombre}<span className="ml-2">{`${producto.cantidad}`}</span></span>
            <span className="font-medium text-[#ca8a8a]">{producto.precio}</span>
            <Link href={`https://wa.me/523338312375?text=Me%20gustaria%20adquirir%20este%20producto:%20${producto.nombre}`} className="mt-2">
              <Button  className="w-[80px]  bg-red-300 rounded-3xl  h-[30px] text-[#864232] flex justify-around font-semibold cursor-pointer">Comprar </Button>
            </Link>
            <span className="text-[#ca8a8a] text-[13px] font-semibold mt-2"><span className="text-[#ca8a8a] font-bold text-[13px]">{`${producto.beneficio === ''?'':'Beneficios:'}`}</span>{` ${producto.beneficio === '' ? producto.kit :producto.beneficio}`}</span>
          </div>
        </div>  
    </>
  )
}
