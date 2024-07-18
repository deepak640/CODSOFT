import React from 'react'
import List from './components/List'
import './App.css'
const App = () => {
  return (
    <div className='container'>
    <h1 className="heading">Task Tracker</h1>
    <div className='taskContainer'>
    <input type='text' className="search" placeholder='Note'/>
    <List/>
    </div>
    </div>
  )
}

export default App
