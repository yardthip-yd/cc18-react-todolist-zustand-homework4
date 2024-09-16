import React from 'react'
import Navbar from './components/Navbar'
import Todolist from './components/Todolist'

export default function App() {
  return (
    <div className="w-3/4">
      <Navbar />
      <Todolist />
    </div>
  )
}
