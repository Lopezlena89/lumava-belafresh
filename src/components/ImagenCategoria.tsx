
import { Button, Image, Modal,useDisclosure } from "@nextui-org/react"
import { ModalInto } from "./ModalInto";
import { infoCategories } from "../utils/categories-text";

interface Props{
    categoria:{
        categoria:string
        image:string
    }
}
export const ImagenCategoria = ({categoria}:Props)=>{
    const {isOpen, onOpen, onClose} = useDisclosure();
    const handleOpen = () => {
        onOpen();
    }
  return (
    <>
        <div className="w-full h-[230px] p-5 my-5 flex justify-center texto items-center overflow-hidden relative">
            <Image
                className="rounded-lg h-[250px]"
                loading="lazy" 
                isZoomed
                alt={categoria.categoria}
                src={categoria.image}
            />
            <div className="absolute w-[150px] h-full z-10 bottom-0 left-12 lg:left-16 flex flex-col justify-center ">
                <h3 className="text-[#ca8a8a] pl-2 text-2xl font-medium">{categoria.categoria}</h3>
                <Button
                onPress={handleOpen}
                    className="bg-red-300 mt-3 text-[#864232] text-lg font-light rounded-md">
                    Ver productos
                </Button>
            </div>
        </div>
        <Modal 
            size='lg' 
            isOpen={isOpen} 
            onClose={onClose} 
        >
            {
                infoCategories.map((product,index)=>(
                    product.categoria === categoria.categoria &&
                    <ModalInto key={`${index}-${product.productos[2]}`} product={product}/>
                ))
            }
        </Modal>    
    </>
  )
}
