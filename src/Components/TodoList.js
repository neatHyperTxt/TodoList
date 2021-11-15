import React from 'react'
import './TodoList.css'
import Todo from './Todo'
function TodoList(props) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.todos.map(todo=> {
                    if(todo.text)
                    {
                        return <Todo todos={props.todos} setTodos={props.setTodos} key={todo.id} todo={todo}/>
                    }
                })}
            </ul>
        </div>
    )
}

export default TodoList
