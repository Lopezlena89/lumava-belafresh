import { Button, Image } from "@nextui-org/react"


export const Categories = () => {
  return (
   <>
    <section className="w-full h-auto bg-red-50 lg:px-20 grid sm:grid-cols-2">
        <div className="w-full h-[300px] p-5 my-5 flex justify-center items-center overflow-hidden relative">
            <Image
                className="rounded-lg "
                loading="lazy" 
                isZoomed
                alt="exfoliante"
                src="/exfoliante_1.webp"
            />
            <div className="absolute w-[150px] h-[100px]  z-10 bottom-0 left-10 flex flex-col">
                <h3 className="text-orange-600 text-2xl font-semibold">Exfoliante</h3>
                <Button 
                className="bg-white mt-3 text-orange-800 text-lg font-semibold rounded-md">
                    Ver productos
                </Button>
            </div>
        </div>
        <div className="w-full h-[300px] p-5 my-5 flex justify-center items-center overflow-hidden relative">
            <Image
                loading="lazy" 
                isZoomed
                className="rounded-none"
                alt="Tónicos faciales"
                src="/tonico_1.webp"
            />
            <div className="absolute w-[150px] h-[130px]  z-10 bottom-0 left-10 flex flex-col">
                <h3 className="text-orange-600 text-2xl font-semibold">Tónicos faciales</h3>
                <Button 
                className="bg-white mt-3 text-orange-800 text-lg font-semibold rounded-md">
                    Ver productos
                </Button>
            </div>
        </div>
        <div className="w-full h-[300px] p-5 my-5 flex justify-center items-center overflow-hidden relative">
            <Image
                loading="lazy" 
                isZoomed
                className="rounded-none"
                alt="Sueros faciales"
                src="/suero_facial_1.webp"
            />
            <div className="absolute w-[150px] h-[130px]  z-10 bottom-0 left-10 flex flex-col">
                <h3 className="text-orange-600 text-2xl font-semibold">Sueros faciales</h3>
                <Button 
                className="bg-white mt-3 text-orange-800 text-lg font-semibold rounded-md">
                    Ver productos
                </Button>
            </div>
        </div>
        <div className="w-full h-[300px] p-5 my-5 flex justify-center items-center overflow-hidden relative">
            <Image
                loading="lazy" 
                isZoomed
                className="rounded-none"
                alt="Cremas faciales"
                src="/crema_facial_1.webp"
            />
            <div className="absolute w-[150px] h-[130px]  z-10 bottom-0 left-10 flex flex-col">
                <h3 className="text-orange-600 text-2xl font-semibold">Cremas faciales</h3>
                <Button 
                className="bg-white mt-3 text-orange-800 text-lg font-semibold rounded-md">
                    Ver productos
                </Button>
            </div>
        </div>
        <div className="w-full h-[300px] p-5 my-5 flex justify-center items-center overflow-hidden relative">
            <Image
                loading="lazy" 
                isZoomed
                className="rounded-none"
                alt="Suero de pestañas y cejas"
                src="/pestanas_1.webp"
            />
            <div className="absolute w-[150px] h-[170px]  z-10 bottom-0 left-10 flex flex-col">
                <h3 className="text-orange-600 text-2xl font-semibold">Suero de pestañas y cejas</h3>
                <Button 
                className="bg-white mt-3 text-orange-800 text-lg font-semibold rounded-md">
                    Ver productos
                </Button>
            </div>
        </div>
        <div className="w-full h-[300px] p-5 my-5 flex justify-center items-center overflow-hidden relative">
            <Image
                loading="lazy" 
                isZoomed
                className="rounded-none "
                alt="kit"
                src="/kit_1.webp"
            />
            <div className="absolute w-[150px] h-[100px]  z-10 bottom-0 left-10 flex flex-col">
                <h3 className="text-orange-600 text-2xl font-semibold">Kits</h3>
                <Button 
                className="bg-white mt-3 text-orange-800 text-lg font-semibold rounded-md">
                    Ver productos
                </Button>
            </div>
        </div>
        
    </section>
   </>
  )
}
