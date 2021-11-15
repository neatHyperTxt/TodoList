import React from 'react'
import './Todo.css'
function Todo(props) 
{
    const deleteHandler = ()=>
    {
        props.setTodos(props.todos.filter(el => el.id!==props.todo.id))
    }
    const completedHandler = ()=>
    {
        props.setTodos(props.todos.map(item=>
            {
                if(item.id === props.todo.id )
                {
                    return {...item,completed: !item.completed}
                }
                return item;
            }))
    }
    return (
        <div className="todo">
            <li className={`todo-item ${props.todo.completed?"completed":""}`}>{props.todo.text}</li>
            <div className="bttn-check-uncheck">
            <button onClick={completedHandler} className="check">
                <svg width="36.649" height="22.303" viewBox="0 0 42.649 26.303">
                    <path id="Path_1" data-name="Path 1" d="M80.355,92.4l7.491,12,32.343-21.828" transform="translate(-78.658 -80.918)" fill="none" stroke="#23c705" stroke-width="5" />
                </svg>

            </button>
            <button onClick={deleteHandler} className="remove"><svg width="26.642" height="28.356" viewBox="0 0 32.642 32.356">
                <g id="Group_1" data-name="Group 1" transform="matrix(1, -0.017, 0.017, 1, -94.518, -130.549)">
                    <line id="Line_1" data-name="Line 1" x2="25.252" y2="29.253" transform="translate(94.322 133.989)" fill="none" stroke="red" stroke-width="5" />
                    <line id="Line_2" data-name="Line 2" y1="25.576" x2="29.529" transform="translate(93.5 135.661)" fill="none" stroke="red" stroke-width="5" />
                </g>
            </svg>
            </button>
            </div>
        </div>
    )
}

export default Todo
