import { Button, Link } from "@nextui-org/react"


export const Principal = () => {
  return (
    <>
        <section className="w-full h-auto bg-red-100 flex flex-col sm:flex-row">
            <div className="w-full sm:w-[50%] h-[500px] bg-orange-900 flex justify-center items-center">
                <div className="w-[60%] md:w-[70%] h-[50%] md:h-[70%] flex flex-col justify-around ">
                    <h2 className="text-white text-5xl md:text-6xl font-bold text-start">Lo natural es mejor</h2>
                    <h3 className="text-white text-lg md:text-2xl font-bold text-start">Productos organicos y naturales, libres de crueldad animal</h3>
                    <Button className="bg-orange-700 w-[100px]">
                        <Link href="#" className="text-white">Comprar</Link>
                    </Button>
                </div>
            </div>
            <div className="w-full sm:w-[50%] h-[500px] overflow-hidden bg-[url('/principal.webp')] bg-center bg-cover bg-no-repeat">
               
            </div>
        </section>
    </>
  )
}
