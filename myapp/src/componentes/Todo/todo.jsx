import { useState, useEffect } from 'react';
import { useRef } from 'react';

function Todo() {

    // Estado
    const [todos, setTodos] = useState([])

    // Data Binding
    const inputText = useRef();

    // Ciclo de Vida
    useEffect(() => {
      console.log("Componente Construído");
      const existingTodos = localStorage.getItem("todos");
      setTodos(existingTodos? JSON.parse(existingTodos): [])
    
      return () => {
        console.log("Componente Desstruído");
      }
    }, [])

    // Eventos
    function addTodo(event) {
        event.preventDefault();
        const novoTodo = inputText.current.value
        const novosValoresDeTodo = [...todos, novoTodo]
        setTodos(novosValoresDeTodo);
        localStorage.setItem("todos", JSON.stringify(novosValoresDeTodo))
        inputText.current.value = "";
    }

    return(
        <div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo}>{todo}</li>
                ))}
            </ul>
            <form onSubmit={addTodo}>
                <input type="text" placeholder='Escreva seu TODO' ref={inputText} />
                <input type="submit" placeholder='Novo TODO' />
            </form>
        </div>
    )
}

export default Todo;