import React, { useEffect, useState } from "react"


const temas = {
    escuro: {
        backgroundColor: "black",
        color: "white"
    },
    claro: {
        backgroundColor: "white",
        color: "black" 
    },
}

const estadoInicial = {
    escuro: true,
    tema: temas.escuro,
    toggle: () => {},
};

const TemaContexto = React.createContext(estadoInicial)

function TemaProvider(props) {
    const [escuro, setEscuro] = useState(true)

    useEffect(() => {
        const ehEscuro = localStorage.getItem("escuro") === 'true'
        setEscuro(ehEscuro)
    }, [escuro])
    
    const toggle = () => {
        const temaTrocado = !escuro
        localStorage.setItem("escuro", JSON.stringify(temaTrocado))
        setEscuro(temaTrocado)
    }

    const tema = escuro ? temas.escuro : temas.claro

    return (
        <TemaContexto.Provider value={{ tema, escuro, toggle }}>
            {props.children}
        </TemaContexto.Provider>
    )
}


export { TemaProvider,TemaContexto }