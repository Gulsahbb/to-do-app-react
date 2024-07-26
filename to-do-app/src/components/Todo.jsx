import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import '../App.css'
function Todo() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid grey', padding: '10px' }}>
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