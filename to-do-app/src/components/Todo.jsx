import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import '../css/Todo.css'
import '../App.css'

function Todo({ todo }) {
    // Todo ID ve CONTENT i böyle tanımladık.
    const { id, content } = todo;
    return (
        <div className='todo'>
            <div>
                {content}
            </div>
            <div>
                <CiCircleRemove className='todo-icons' />
                <CiEdit className='todo-icons' />
            </div>

        </div>
    )
}

export default Todo