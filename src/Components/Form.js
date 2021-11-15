import React from 'react'
import './Form.css'
function Form(props) {
    const inputChangeHandler = (event)=>
    {
        props.setInputText(event.target.value)
    }
    const formSubmitHandler = (event)=>
    {
        event.preventDefault();
        const data = {
            text:props.inputText,
            completed:false,
            id:Math.floor(Math.random()*10000)
        }
        props.setInputText('');
        props.setTodos([...props.todos,data]);
        console.log(data,...props.todos)
    }
    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <div className="user-input">
                <input value={props.inputText} type="text" placeholder="Enter New Task" onChange={inputChangeHandler}/>
                <button className="bttn" type="submit">Add Todo</button>
                </div>
                <select>
                    <option value="all">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                </select>
            </form>
        </div>
    )
}

export default Form
