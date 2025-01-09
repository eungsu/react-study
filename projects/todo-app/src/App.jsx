import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./components/Header";
import TodoEditor from "./components/TodoEditor";
import TodoList from "./components/TodoList";

import { useState, useRef } from "react";

function App() {
    const [todos, setTodos] = useState([]);
    const idRef = useRef(1);

    const onCreate = (todo) => {
        const newItem = {
            ...todo,
            id: idRef.current,
            done: false
        }

        setTodos([newItem, ...todos]);
        idRef.current = idRef.current + 1;
    }
    const onUpdate =(id) => setTodos(todos.map(todo => todo.id === id ? {...todo, done: !todo.done} : todo));
    const onDelete = (id)=> setTodos(todos.filter(todo => todo.id != id));

    return (
        <div className="container">
            <h1>일정 관리 애플리케이션</h1>
            <Header />
            <TodoEditor onCreate={onCreate}/>
            <TodoList todos={todos} 
                onUpdate={onUpdate}
                onDelete={onDelete} />
        </div>
    );
}

export default App
