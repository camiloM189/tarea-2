import { forwardRef } from "react";

export const LenguajeProgramacionComponents = forwardRef((props, ref)  => {

    
    return (	
        <>
             <div   ref={ref} className="mt-5 mb-5 container" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h1>¿Que es un lenguaje de programación?</h1>
            <p>es un conjunto de reglas y símbolos que permiten a los programadores escribir instrucciones que una computadora puede entender y ejecutar. Estos lenguajes son utilizados para desarrollar software, aplicaciones y sistemas informáticos.</p>
        </div>


        <div className="mt-5 mb-5 container" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h2>Los lenguajes de programación más utilizados en la actualidad</h2>

        </div>

     
        <div className="mt-5 mb-5 container" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h2>JavaScript</h2>
            <p>Principalmente utilizado para el desarrollo web, tanto en el lado del cliente como del servidor (con Node.js).</p>
            <img src="/javaScript.png" alt="" />
       
        </div>
        <div className="mt-5 mb-5 container" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h2>Java</h2>
            <p>Común en aplicaciones empresariales.</p>
            <img src="/java.png" alt="" />
       
        </div>

        <div className="mt-5 mb-5 container" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h2>Python</h2>
            <p>Conocido por su simplicidad y versatilidad.</p>
            <img src="/python.png" alt="" />
       
        </div>

        
        </>		
    )	
})