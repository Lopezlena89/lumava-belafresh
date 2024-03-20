import { Button, Image } from "@nextui-org/react"


export const Productos = () => {
  return (
    <>
        <div className="w-full h-auto px-20 sm:flex flex-col pb-20 hidden">
            <div className="w-full h-[180px] flex flex-col justify-center items-center">
                <h2 className="text-orange-800 text-3xl font-bold">Exfoliantes</h2>
                <span className="w-[250px]  text-center text-orange-800 text-base">Productos organicos y naturales, libres de crueldad animal</span>
            </div>
            <div className="w-full h-auto grid grid-cols-3">
                <div className="w-full h-auto overflow-hidden p-2 flex flex-col  items-center">
                    <Image
                        alt="exfoliante_rojo"
                        src="/exfoliante_rojos.webp"
                        className="rounded-md w-full h-[350px]"
                    />
                    <div className="flex items-center justify-between">
                        <h4 className="w-1/2 p-1 font-semibold text-orange-800">Exfoliante de frutos rojos</h4>
                        <Button className="w-[40%] bg-orange-800 text-white">Comprar</Button>
                    </div>
                    <span className="text-orange-400 font-semibold p-1">Precio $145</span>
                </div>
                <div className="w-full h-auto overflow-hidden p-2 flex flex-col  items-center">
                    <Image
                        alt="exfoliante_pina"
                        src="/exfoliante_pina.webp"
                        className="rounded-md w-full h-[350px]"
                    />
                    <div className="flex items-center justify-between">
                        <h4 className="w-1/2 p-1 font-semibold text-orange-800">Exfoliante de enzima de piña</h4>
                        <Button className="w-[40%] bg-orange-800 text-white">Comprar</Button>
                    </div>
                    <span className="text-orange-400 font-semibold p-1">Precio $200</span>
                </div>
                <div className="w-full h-auto overflow-hidden p-2 flex flex-col items-center">
                    <Image
                        alt="exfoliante_nuez"
                        src="/exfoliante_nuez.webp"
                        className="rounded-md w-full h-[350px]"
                    />
                    <div className="flex items-center justify-between">
                        <h4 className="w-1/2 p-1 font-semibold text-orange-800">Exfoliante de nuez</h4>
                        <Button className="w-[40%] bg-orange-800 text-white">Comprar</Button>
                    </div>
                    <span className="text-orange-400 font-semibold p-1">Precio $145</span>
                </div>
                
               
            </div>
        </div>
    </>
    )
}
