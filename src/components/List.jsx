import React, { useState } from "react";

const List = ({ item, deleteTodo, editTodo, toggleComplete }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [form, setForm] = useState({
        title: item.title,
        status: item.status,
    })

    const onChangeEdit = () => {
        console.log(!isEdit)
        setIsEdit(!isEdit)
    }

    const hdlConfirm = (id) => {
        setIsEdit(!isEdit)
        editTodo(id, form)
    }

    const hdlOnChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="flex bg-pink-100 gap-2 p-2">
            {
                isEdit
                    ? <input type="text" value={form.title} name="title" onChange={hdlOnChange} />
                    : <p
                        className={`px-2 mr-4 w-100 ${item.completed 
                            ? 'line-through' 
                            : ''}`}
                        onClick={() => toggleComplete(item.id)} >
                        {item.title}
                    </p>
            }

            {
                isEdit
                    ? <button className="bg-blue-200 rounded-lg p-1 px-2 mr-4" onClick={() => hdlConfirm(item.id)}>Confirm</button>
                    : <button className="bg-yellow-50 rounded-lg p-1 px-2 mr-4" onClick={onChangeEdit}>Edit</button>
            }

            <button className="bg-red-300 rounded-lg p-1 px-2" onClick={() => deleteTodo(item.id)}>Delete</button>
        </div>
    );
};

export default List;