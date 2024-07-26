import React from 'react'
import '../App.css'

function TodoCreate() {
    return (
        <div className='todo-create'>
            <input className="todo-input" type="text" placeholder='To do Giriniz' />
            <button className='todo-button'>To Do Oluştur</button>
        </div>
    )
}

export default TodoCreate