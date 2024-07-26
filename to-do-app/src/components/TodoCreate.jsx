import React, { useState } from 'react'
import '../App.css'
import '../css/TodoCreate.css'

function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');
    // Inputa todo yazdıktan sonra inputu temizle.
    const clearInput = () => {
        setNewTodo('');
    }
    const createTodo = () => {
        if (!newTodo) return;

        const request = {
            id: Math.floor(Math.random() * 99999999999),
            content: newTodo
        }
        onCreateTodo(request)
        clearInput();
    }
    return (
        <div className='todo-create'>
            <input value={newTodo} onChange={(e) => { setNewTodo(e.target.value) }} className="todo-input" type="text" placeholder='To do Giriniz' />
            {/*Butona basıldığında bir todo oluşturmalı. Bu yüzden burada createTodo fonksiyonunu kullanacağız.*/}
            <button onClick={createTodo} className='todo-button'>To Do Oluştur</button>
        </div>
    )
}

export default TodoCreate