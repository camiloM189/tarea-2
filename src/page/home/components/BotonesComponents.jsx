


export const BotonesComponents = ({ scrollToSection, desarrolloRef, lenguajeRef, normasRef }) => {

   


    return (	
        <>
        
        <section className="row g-0 mb-5 mt-5" style={{display:'flex',justifyContent:'center'}} >
     	
      

         <article className=" ms-3 mb-1 col-sm-12 col-6-md botones" style={{cursor:'pointer',overflow:'hidden'}}  onClick={() => scrollToSection(desarrolloRef)}>
       
             <div className="card text-bg-dark border-0  rounded-0">
               <img src="/desarrollo.jpg" className="card-img" alt="cliente1" style={{height: '280px',objectFit:'cover'}}/>
               <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center" style={{justifyContent:'center'}}>
                 <h5 className="card-title text-center">Desarrollo De Sotware</h5>
               </div>
             </div>
     
         </article>	

         <article className="ms-3 col-sm-12 col-6-md botones" style={{cursor:'pointer',overflow:'hidden'}} onClick={() => scrollToSection(lenguajeRef)}>
             <div className="card text-bg-dark border-0  rounded-0">
               <img src="/lenguaje.jpg" className="card-img" alt="cliente1" style={{height: '280px',objectFit:'cover'}}/>
               <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center" style={{justifyContent:'center'}}>
                 <h5 className="card-title text-center">Lenguaje De Programacion</h5>
               </div>
             </div>
         </article>	

 
         <article className="ms-3 col-sm-12 col-6-md botones" style={{cursor:'pointer',overflow:'hidden'}} onClick={() => scrollToSection(normasRef)}>
             <div className="card text-bg-dark border-0  rounded-0">
               <img src="/normas.jpg" className="card-img" alt="cliente1" style={{height: '280px',objectFit:'cover'}}/>
               <div className="card-img-overlay second-alpha-color d-flex flex-column justify-content-md-center" style={{justifyContent:'center'}}>
                 <h5 className="card-title text-center">Normas</h5>
               </div>
             </div>
         </article>	


        </section>
        
        </>		
    )	
}