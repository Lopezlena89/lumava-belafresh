
import { categories } from "../utils/categories-text";
import { ImagenCategoria } from "./ImagenCategoria";


export const Categories = () => {

    

  return (
   <>
    <section className="w-full h-auto bg-red-50 lg:px-20 grid sm:grid-cols-2">
        {
          
            categories.map(( categoria,index) =>(
              
                <ImagenCategoria key={`${index}-${categoria.categoria}`} categoria={categoria} />
            ))
        }
                
        
        
    </section>
   </>
  )
}
