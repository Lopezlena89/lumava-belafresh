

export const Mapa = () => {
  return (
    <>
        <div className="w-full h-auto p-10 flex flex-col items-center">
          <h3 className="font-semibold text-xl text-red-400 mb-10">Nos puedes ubicar en </h3>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.7884954608285!2d-103.42883822440065!3d20.678182099726698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ae95c14e7891%3A0x206a7cbe0a9cbf89!2sRubens%205251%2C%20Eucalipto%20Vallarta%2C%2045020%20Zapopan%2C%20Jal.!5e0!3m2!1ses-419!2smx!4v1711082772729!5m2!1ses-419!2smx" 
          width="100%" 
          height="450" 
          className="rounded-xl"
          allowFullScreen={false} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          >
          </iframe>
        </div>
    </>
  )
}
