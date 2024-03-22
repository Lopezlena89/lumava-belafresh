import { Button, Image, Link } from "@nextui-org/react";

interface Props{
  producto: {
    nombre: string;
    imagen: string;
    precio: string;
}
}

export const ProductoModal = ({producto}:Props) => {
  return (
    <>
        <div className="w-full min-h-[120px] md:min-h-[180px]  rounded-lg  flex items-center">
          <Image src={producto.imagen} className="w-[70px] h-[100px] rounded-none"/>
          <div className="w-[60%] h-[100px]  flex flex-col items-center justify-around ml-3">
            <span className="font-semibold text-[#ca8a8a] text-center">{producto.nombre}</span>
            <span className="font-medium text-[#ca8a8a]">{producto.precio}</span>
            <Link href="https://wa.me/523338312375">
             <Button href="#" className="w-[80px]  bg-red-300 rounded-3xl  h-[35px] text-[#864232] flex justify-around font-semibold cursor-pointer">Comprar </Button>
            </Link>
          </div>
        </div>  
    </>
  )
}
