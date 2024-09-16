import React, { useState, useEffect } from 'react'
import List from './List'
import useTodosStore from '../store/todo-store'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Todolist() {
    const [form, setForm] = useState({title: "", status: false})

    const hdlOnChange = (e) => {
        setForm({...form,[e.target.name] : e.target.value})
    }

    const { getData, todos, hdlAddTodo, editTodo, deleteTodo, toggleComplete } = useTodosStore()

    const API = "http://localhost:8001/todos";

    useEffect(() => {
      getData();
    }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-pink-100">
        <p className="text-2xl font-bold p-3">Todo List</p>
        <div className='flex flex-row'>
            <input 
            className="rounded-lg w-80 mr-4 p-1"
            type='text'
            name='title'
            value={form.title}
            onChange={hdlOnChange}
            />
            <button className="bg-blue-200 rounded-lg px-2" onClick={()=> hdlAddTodo(form)}>Add</button>
        </div>
        <ul className='list-disc'>
            {todos.map((item, index) => {
                return <List item={item} key={index} deleteTodo={deleteTodo} editTodo={editTodo} toggleComplete={toggleComplete} />
            })}
        </ul>
    </div>
  )
}
