import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import '../css/Todo.css'
import '../App.css'

function Todo() {
    return (
        <div className='todo'>
            <div>
                BEN İLK TODOYUM.
            </div>
            <div>
                <CiCircleRemove className='todo-icons' />
                <CiEdit className='todo-icons' />
            </div>

        </div>
    )
}

export default Todo