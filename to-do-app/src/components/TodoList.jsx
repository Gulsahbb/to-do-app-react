import React from 'react'
import Todo from './Todo'
import '../css/TodoList.css'
function TodoList({ todos, onRemoveTodo }) {
    return (
        <div className='todo-list'>
            {/* Listeyi aldık(todos).Herhangi bir todos varsa bunu map üzerinde dön. Ve her birini todo olarak yakala. bu todoyu da Todo'da prop olarak geç.Karşı tarafta bunu yakala.*/}
            {
                todos && todos.map((todo) => (
                    <Todo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
                ))
            }

        </div>
    )
}

export default TodoList