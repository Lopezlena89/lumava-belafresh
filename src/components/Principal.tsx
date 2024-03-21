import { Button } from "@nextui-org/react"



export const Principal = () => {
  return (
    <>
        <section className="w-full h-auto bg-red-100 flex flex-col sm:flex-row  ">
            <div className="w-full sm:w-[50%] h-[500px] bg-red-200 flex justify-center items-center">
                <div className="w-[60%] md:w-[70%] h-[50%] md:h-[70%] flex flex-col justify-around ">
                    <h2 className="text-[#ca8a8a] texto text-5xl md:text-7xl font- text-start">Lo natural es mejor</h2>
                    <h3 className="text-[#ca8a8a] texto text-lg md:text-2xl font- text-start">Productos organicos y naturales, libres de crueldad animal</h3>
                    <Button href="#" className="w-[100px] self-center bg-red-300 rounded-3xl  h-[40px] text-[#864232] flex justify-around font-light cursor-pointer">Contáctanos </Button>
                </div>
            </div>
            <div className="w-full sm:w-[50%] h-[500px] overflow-hidden bg-[url('/principal-1.webp')] bg-center bg-cover bg-no-repeat">
               
            </div>
        </section>
    </>
  )
}
