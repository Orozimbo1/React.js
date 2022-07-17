import React from "react";
import { Routes, Route } from "react-router-dom";
import Agua from "./componentes/Agua"
import Contador from "./componentes/Contador"
import Todo from "./componentes/Todo"
import TrocaTema from "./componentes/TrocaTema";

function App() {
    return (
        <Routes>
            <Route path="/agua" element={<Agua />}/>
            <Route path="/contador" element={<Contador />}/>
            <Route path="/todo" element={<Todo />}/>
            <Route path="/troca-tema" element={<TrocaTema />}/>
        </Routes>
    )
}

export default App;