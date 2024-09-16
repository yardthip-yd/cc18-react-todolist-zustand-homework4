import React from 'react';
import {create} from 'zustand';
import {toast} from 'react-toastify';
import axios from 'axios'

const API = "http://localhost:8001/todos";


const todosStore = (set, get) => ({

    todos: [],

    getData: async () => {
        try {
            const resp = await axios.get(API);
            set({ todos: resp.data });
        } catch (err) {

            toast.error(err.message);
        }
    },
    editTodo: async (id, data) => {
        try {
            const resp = await axios.put(API + "/" + id, data);
            get().getData();
            toast.success(`Edit ${resp.data.title} Success`);
        } catch (err) {

            toast.error(err.message);
        }
    },
    hdlAddTodo: async (form) => {
        console.log(form);
        try {
            const resp = await axios.post(API, form);
            toast.success(`Add ${resp.data.title} Success!!!`);
            get().getData();
        } catch (err) {
            toast.error(err.message);
        }
    },
    deleteTodo: async (id) => {
        try {
            const resp = await axios.delete(API + "/" + id);
            toast.success(`Delete ${resp.data.title} Success`);
            get().getData();
        } catch (err) {
            toast.error(err.message);
        }
    },
    toggleComplete: async (id) => {
        const todo = get().todos.find((item) => item.id === id);
        const updatedTodo = { ...todo, completed: !todo.completed };

        try {
            await axios.put(`${API}/${id}`, updatedTodo);
            set((state) => ({
                todos: state.todos.map((item) =>
                    item.id === id ? { ...item, completed: !item.completed } : item
                ),
            }));
        } catch (err) {
            toast.error(err.message);
        }
    }
});

const useTodosStore = create(todosStore);
export default useTodosStore;
