import { Button, Link } from "@nextui-org/react"

export const Principal = () => {
  return (
    <>
        <section id="nosotros" className="w-full h-auto bg-red-100 flex flex-col sm:flex-row  ">
            <div className="w-full sm:w-[50%] h-[500px] bg-red-200 flex justify-center items-center">
                <div className="w-[80%]  md:w-[70%] lg:w-[60%] flex flex-col justify-around texto">
                    <h3 className="text-[#864232] text-3xl md:text-4xl text-start font-semibold">El cuidado de la piel es esencial, el maquillaje una elección</h3>
                    <h3 className="text-[#864232] text-base md:text-2xl font- text-start mt-5">En Belafresh te ofrecemos productos orgánicos y naturales para el cuidado de tu piel, libres de crueldad animal</h3>
                  <Link href="https://wa.me/523338312375" >
                    <Button href="#" className="w-[100px] self-center bg-red-300 rounded-3xl mt-5 h-[40px] text-[#864232] flex justify-around font-light cursor-pointer">Contáctanos </Button>
                  </Link>
                </div>
            </div>
            <div className="w-full sm:w-[50%] h-[500px] overflow-hidden bg-[url('/sueros_faciales/suero_aloe_1.webp')] bg-center bg-cover bg-no-repeat">
            </div>
        </section>
    </>
  )
}
