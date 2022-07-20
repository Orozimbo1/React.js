import React from "react";
import { Routes, Route } from "react-router-dom";
import EstadoAgua from "./componentes/Agua"
import Contador from "./componentes/Contador"
import Todo from "./componentes/Todo"
import TrocaTema from "./componentes/TrocaTema";
import { TemaProvider } from "./componentes/TrocaTema/TemaContext";

function App() {
    return (
        <Routes>
            <Route path="/agua" element={<EstadoAgua />}/>
            <Route path="/contador" element={<Contador />}/>
            <Route path="/todo" element={<Todo />}/>
            <Route path="/troca-tema" element={
                <TemaProvider>
                    <TrocaTema />
                </TemaProvider>
            }
            />
        </Routes>
    )
}

export default App;