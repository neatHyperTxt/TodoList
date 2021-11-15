import React,{useState} from 'react'
import './App.css';

import Form from './Components/Form'
import TodoList from './Components/TodoList';
function App() 
{
  const [inputText,setInputText] = useState('');
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Form setTodos={setTodos} todos={todos} inputText={inputText} setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
