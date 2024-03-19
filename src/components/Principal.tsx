import { Button } from "@nextui-org/react"


export const Principal = () => {
  return (
    <>
        <div className="w-full h-[500px] bg-red-100 flex ">
            <div className="w-[50%] h-full bg-white/50 flex justify-center items-center">
                <div className="w-[70%] h-[70%] bg-blue-100 flex flex-col items-center">
                    <h2 className="text-white text-7xl font-bold text-start">Lo natural es mejor</h2>
                    <h3 className="text-white text-2xl font-bold text-start">Productos organicos y naturales, libres de crueldad animal</h3>
                    <Button/>
                </div>
            </div>
            <div className="w-[50%] h-full">

            </div>
        </div>
    </>
  )
}
