import React from "react";
import { useState, useEffect } from "react";

function Contador () {

    // Estado
    const [contador, setContador] = useState(0)

    //Data Binding
    useEffect(() => {
      // O que será executado quando um evento for iniciado
      console.log("Componente Criado");
      const intervalo = setInterval(() => {
        setContador((valor) => valor + 1);
      }, 1000)
      // Contar de um em um segundo (1000ms)
    
      return () => {
        // O que será executado quando o evento de destruição
        // do compenente ffor iniciado
        console.log("Componente Destruído");
        // Desiscrição de eventos
        clearInterval(intervalo)
      }
      // O array de condições para os eventos acima 
    }, [])
    

    return (
        <div>
            <h1>Contador : {contador}</h1>
        </div>
    )
}

export default Contador;