
import { categories } from "../utils/categories-text";
import { ImagenCategoria } from "./ImagenCategoria";


export const Categories = () => {

    

  return (
   <>
    
    <section className="w-full h-auto bg-red-50 lg:px-20 grid grid-cols-1 sm:grid-cols-2 ">
            <div className="col-span-1 sm:col-span-2 w-full h-[100px] flex justify-center items-center">
                <h2 className="font-semibold text-xl text-[#ca8a8a] texto ">Nuestros productos</h2>
            </div>
           
        {
          
            categories.map(( categoria,index) =>(
              
                <ImagenCategoria key={`${index}-${categoria.categoria}`} categoria={categoria} />
            ))
        }
                
        
        
    </section>
   </>
  )
}
