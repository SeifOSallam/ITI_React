import Todo from "../todos/todo";
import { useState } from "react";
import './todoList.css'
function TodoList(){
    const [todos, setTodos] = useState([]);


    function handleDelete(todoID){
        const newList = todos.filter((todo) => {
            return parseInt(todo.id) != parseInt(todoID);
        })
        setTodos([...newList])
    }
    function handleAdd(){
        const todoContent = document.getElementById("todo-input").value
        const newTodo = {
            id: todos[todos.length-1]?.id + 1 || 0,
            content: todoContent,
            checked: false
        }

        setTodos([...todos, newTodo]);
    }
    function handleDone(todoID){

        const newTodo = todos.find((todo)=> todo.id == todoID);
        newTodo.checked = !newTodo.checked;

        setTodos([...todos]);
    }
    return(
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-md-12">
                        <div className="card px-3">
                            <div className="card-body">
                                <h2 className="card-title">Todo list</h2>
                                <div className="add-items d-flex"> 
                                    <input type="text" className="form-control todo-list-input" id="todo-input" placeholder="What do you need to do today?"/> 
                                    <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={handleAdd}>Add</button> 
                                </div>
                                <div className="list-wrapper">
                                    <ul className="d-flex flex-column-reverse todo-list">
                                        {todos.map((todo, index) => {
                                            return (
                                                <Todo 
                                                key={`todo-${todo.id}`} 
                                                id={todo.id} 
                                                checked={todo.checked}
                                                handleDelete={handleDelete} 
                                                handleDone={handleDone}
                                                content={todo.content}/>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;