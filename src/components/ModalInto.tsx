import { Button, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/react"
import { ProductoModal } from "./ProductoModal"

interface props{
    product:{
        categoria:string
        productos:{
            nombre:string
            imagen:string
            precio:string
        }[]
    }
}

export const ModalInto = ({product}:props) => {
  
  return (
    <>
        <ModalContent className="overflow-auto min-h-[40%] max-h-[70%]">
            {(onClose) => (
                <>
                    <ModalHeader className="flex flex-col gap-1 bg-red-50 text-[#864232]">{product.categoria}</ModalHeader>
                    <ModalBody className="bg-red-50">
                    {
                        product.productos.map((producto,index)=>(
                            <ProductoModal key={`${index}-${index}`} producto={producto}/>
                        ))
                    }
                    </ModalBody>
                    <ModalFooter className="bg-red-50">
                        
                    </ModalFooter>
                </>
            )}
        </ModalContent>
    </>
  )
}
