import { forwardRef } from "react"



export const InicioComponent = forwardRef((props, ref) => {
    return (	
        <>
         <div ref={ref} className="mt-5 mb-5" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h1>Introducción al Desarrollo de Software</h1>
            <p>Conceptos, Lenguajes y Normas</p>
        </div>

        <div style={{display: "flex",alignItems: "center",justifyContent: "center"}}>
            <div style={{width:"60%"}}>
                <p className="" style={{ textAlign:"center",lineHeight: 1.5}}>A continuación, exploraremos tres temas claves que son fundamentales 
                en el desarrollo de software. Cada uno de ellos proporcionará una 
                visión más profunda de conceptos esenciales que todo desarrollador debe conocer.
                </p>
            </div>
            
        </div>

        </>		
    )	
})
