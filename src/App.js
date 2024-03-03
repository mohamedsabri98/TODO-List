import { useState, useRef } from "react";
import './App.css';

function App() {
    const [todos, setTodos] = useState([])

    const inputRef = useRef()

    const handleAddTodo = () => {
        const txt = inputRef.current.value
        const newItem = { completed: false, txt }
        setTodos([...todos, newItem])
        inputRef.current.value = ""
    }

    const handleItemDone = (index) => {
        const newTodo = [...todos]
        newTodo[index].completed = !newTodo[index].completed
        setTodos(newTodo)
    }

    const handeDeleteItem = (index) => {
        const newTodo = [...todos]
        newTodo.splice(index, 1)
        setTodos(newTodo)
    }

    return (
        <div className="App">
            <div className="to-do-container">
                <h2>To Do List</h2>
                <ul>
                    {todos.map(({ completed, txt }, index) => (
                        <div className="item">
                            <li key={index}
                                className={completed ? "done" : ""}
                                onClick={() => { handleItemDone(index) }}
                            >
                                {txt}
                            </li>
                            <span onClick={() => { handeDeleteItem(index) }}>❌</span>
                        </div>
                    ))}
                </ul>
                <input ref={inputRef} placeholder="enter your todo" /><br />
                <button onClick={handleAddTodo}>Add</button>
            </div>
        </div >
    );
}

export default App;
