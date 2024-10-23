import { forwardRef } from "react";

export const NormasComponents = forwardRef((props, ref) => {
    return (	
        <>
        <div ref={ref}  className="mt-5 mb-5 container" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h1>Normas de programacion</h1>
            <p>Las normas de programación, también conocidas como convenciones de codificación,
            son un conjunto de directrices que ayudan a los programadores a escribir código 
            de manera clara, consistente y eficiente.</p>
        </div>










        <div className="accordion container mb-5" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Nomenclatura
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Variables y funciones: Usa nombres descriptivos que reflejen la función (ej. calcularSuma en lugar de cs).</li>
            <li>Convenciones de estilo: Utiliza camelCase para variables y funciones, y PascalCase para clases.</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Estructura del Código
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Indentación: Usa espacios o tabulaciones de manera consistente para mejorar la legibilidad.</li>
            <li>Separación de secciones: Organiza el código en secciones lógicas con comentarios para facilitar la navegación.</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Comentarios
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Documentación: Usa comentarios para explicar el propósito de bloques de código, funciones o algoritmos complejos.</li>
            <li>Estilo de comentario: Mantén un estilo uniforme para los comentarios (ej. // para comentarios de una línea, /* ... */ para comentarios de varias líneas).</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#cuarta" aria-expanded="false" aria-controls="cuarta">
        Manejo de Errores
      </button>
    </h2>
    <div id="cuarta" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Validación de entradas: Asegúrate de validar las entradas del usuario para evitar errores.</li>
            <li>Uso de excepciones: Implementa un manejo de excepciones adecuado para gestionar errores en tiempo de ejecución.</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#5" aria-expanded="false" aria-controls="5">
        Modularidad
      </button>
    </h2>
    <div id="5" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Funciones pequeñas: Divide el código en funciones pequeñas y manejables que realicen tareas específicas.</li>
            <li>Reutilización: Evita la duplicación de código al crear funciones reutilizables.</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#6" aria-expanded="false" aria-controls="6">
      Control de Versiones
      </button>
    </h2>
    <div id="6" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Uso de sistemas de control de versiones: Utiliza herramientas como Git para gestionar cambios y colaborar con otros desarrolladores.</li>
           
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#7" aria-expanded="false" aria-controls="7">
      Pruebas
      </button>
    </h2>
    <div id="7" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Escritura de pruebas: Implementa pruebas unitarias y de integración para asegurar que el código funciona correctamente.</li>
            <li >Automatización: Automatiza las pruebas siempre que sea posible.</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#8" aria-expanded="false" aria-controls="8">
      Consistencia
      </button>
    </h2>
    <div id="8" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Estilo de codificación: Mantén un estilo de codificación coherente en todo el proyecto, siguiendo las guías del lenguaje específico.</li>
          
        </ul>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#9" aria-expanded="false" aria-controls="9">
      Optimización
      </button>
    </h2>
    <div id="9" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Eficiencia: Escribe código eficiente y optimizado, pero sin sacrificar la legibilidad.</li>
          
        </ul>
      </div>
    </div>
  </div>

  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#10" aria-expanded="false" aria-controls="10">
      Seguridad
      </button>
    </h2>
    <div id="10" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <ul>
            <li className="mb-2">Buenas prácticas de seguridad: Implementa medidas para proteger el código de vulnerabilidades, como la inyección SQL o el manejo inseguro de contraseñas.</li>
          
        </ul>
      </div>
    </div>
  </div>

        </div>




        <div className="mt-5 mb-5 container" style={{display: "flex",alignItems: "center",flexDirection:"column"}}>
            <h1>En conclusion</h1>
            <p>Seguir estas normas de programación no solo mejora la calidad del código, sino que también facilita la colaboración entre desarrolladores y el mantenimiento a largo plazo del software.</p>
        </div>

       
        
        
        </>		
    )	
})