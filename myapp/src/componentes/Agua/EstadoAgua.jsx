import React from "react";
import { useState } from "react";
import Titulo from "./Titulo";
import Agua from "./Agua";

function EstadoAgua() {

    const [temperatura, setTemperatura] = useState(0)

    return (
        <div>
            <Titulo texto={"Estados da Água"}></Titulo>
            <button onClick={() => setTemperatura(0)}>Temperatura 0°</button>
            <button onClick={() => setTemperatura(15)}>Temperatura 15°</button>
            <button onClick={() => setTemperatura(100)}>Temperatura 100°</button>
            <Agua temperatura={temperatura}/>
        </div>
    )
}

export default EstadoAgua;