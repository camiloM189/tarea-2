import { Link } from "react-router-dom"
import { VideoBackground } from "../components/VideoBackground"
import { useRef } from "react";
import { InicioComponent } from "./components/InicioComponent";
import { BotonesComponents } from "./components/BotonesComponents";
import { DesarrolloDeSotwareComponents } from "./components/DesarrolloDeSotwareComponents";
import { LenguajeProgramacionComponents } from "./components/LenguajeProgramacionComponents";
import { NormasComponents } from "./components/NormasComponents";
import { ButtonComponentsUp } from "./components/ButtonComponentsUp";

export const Home = () => {

    const desarrolloRef = useRef(null);
    const lenguajeRef = useRef(null);
    const normasRef = useRef(null);
    const inicioRef = useRef(null);
   



    
    const scrollToSection = (ref) => {
     
      
      ref.current.scrollIntoView({ behavior: 'smooth' });
  };



    return (	
        <> 

        <div>
            <VideoBackground/>
        </div>
        <InicioComponent ref={inicioRef}/>
         
        <BotonesComponents scrollToSection={scrollToSection}
                desarrolloRef={desarrolloRef}
                lenguajeRef={lenguajeRef}
                normasRef={normasRef}/>

        <DesarrolloDeSotwareComponents ref={desarrolloRef}/>
        <LenguajeProgramacionComponents ref={lenguajeRef}/>
        <NormasComponents ref={normasRef}/>

        <ButtonComponentsUp scrollToSection={scrollToSection} inicioRef={inicioRef}/>
        </>
    )	
}