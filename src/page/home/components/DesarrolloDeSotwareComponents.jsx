import { forwardRef } from "react";


export const DesarrolloDeSotwareComponents = forwardRef((props, ref) => {
    return (	
        <>
            <div ref={ref}  className="mt-5 mb-5" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h1>Desarrollo de sotware</h1>
        </div>
          


        <div className="container mb-5" style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
           <div className="row">
                 <div  className="col-6" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                 <h2 className="text-center">¿Ques es?</h2>
                 <p className="text-center" > es el proceso de concebir, diseñar, implementar y mantener aplicaciones y sistemas informáticos. Este campo abarca una amplia gama de actividades, herramientas y metodologías que permiten a los desarrolladores crear programas que satisfacen necesidades específicas de usuarios y empresas</p>
                 </div>
                 <div className="col-6">
                     <img src="/desarrolloWebQueES.jpg" className="img-fluid"  alt="/desarrolloWebQueES.jpg" />
                 </div>
             </div>
          
             
         </div>
         
            <div className="mt-5 mb-5" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
                <h1>Etapas del Desarrollo de Software</h1>
                <p>Por Tipo, Por Licencia, Por Plataforma,Por Uso y Por Funcionalidad</p>
            </div>

         <div className="container mb-5" style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
        <div className="mt-5 row">
        
  
            <div className="col-6" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src="/Windows-11.jpg" className="img-fluid" alt="Windows-11.jpg"/>
            </div>
           
           
           
  
 
    
            <div className="col-6" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                
                <h4>Por Tipo:</h4>
                 <ul>
                     <li>Sistema: Gestores de hardware (ej. Windows)</li>
                     <li>Aplicación: Tareas específicas (ej. Word)</li>
                     <li>Desarrollo: Herramientas para programadores (ej. IDEs)</li>
                 </ul>
            </div>
          
         

           
        </div>
        </div>


        <div className="container mb-5" style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
        <div className="mt-5 row">
        
            
            <div className="col-6" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                 <h4>Por Plataforma:</h4>
                 <ul>
                     <li>Escritorio: Instalado en PCs (ej. Photoshop)</li>
                     <li>Web: Ejecutado en navegadores (ej. Google Docs)</li>
                     <li>Móvil: Para dispositivos móviles (ej. WhatsApp)</li>
                 </ul>
            </div>




            <div className="col-6" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src="/photoshop.jpg" className="img-fluid" alt="photoshop.jpg"/>
            </div>
           


          
          
         

           
        </div>
        </div>


        <div className="container mb-5" style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
        <div className="mt-5 row">
        
  
            <div className="col-6" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src="/juegos.jpg" className="img-fluid" alt="juegos.jpg"/>
            </div>
           


            <div className="col-6" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                 <h4>Por Uso:</h4>
                 <ul>
                     <li>Productividad: Mejora la eficiencia (ej. Trello)</li>
                     <li>Entretenimiento: Ocio (ej. videojuegos)</li>
                     <li>Educativo: Aprendizaje (ej. plataformas de cursos)</li>
                 </ul>
            </div>
          
         

           
        </div>
        </div>





        <div className="container mb-5" style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
        <div className="mt-5 row">

            <div className="col-6" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                 <h4>Por Funcionalidad:</h4>
                 <ul>
                     <li>Base de Datos: Gestión de datos (ej. MySQL)</li>
                     <li>Seguridad: Protección (ej. antivirus)</li>
                 </ul>
            </div>
          
         
            <div className="col-6" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                <img src="/MySQL.jpg" className="img-fluid" alt="MySQL.jpg"/>
            </div>
           
        </div>
        </div>





        
        </>		
    )	
})