import { React, useState } from 'react'
import './App.css'
import TodoNav from './components/todo_nav/TodoNav'
import TodoList from './components/todo/todo_list/TodoList'
import data from './Data'
const App = () => {

  return (
    <>
      <TodoNav />
      <TodoList data={data} />
    </>
  )
}

export default App
