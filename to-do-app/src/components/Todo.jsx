import React, { useState } from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";;
import { CiEdit } from "react-icons/ci";
import '../css/Todo.css'
import '../App.css'


function Todo({ todo, onRemoveTodo, onUpdateTodo }) {

    // Todo ID ve CONTENT i böyle tanımladık.
    const { id, content } = todo;

    // Todo Editleyebilmek için state yazdık. 
    const [editable, setEditable] = useState(false);

    // Todo Güncellenen yeni todo için state
    const [editTodo, setEditTodo] = useState(content);

    const removeTodo = () => {
        onRemoveTodo(id);
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: editTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }
    return (
        <div className='todo'>
            <div>
                {
                    editable ? <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} style={{ width: '380px' }} className="todo-input" type="text" /> : content
                }
            </div>
            <div>
                <CiCircleRemove className='todo-icons' onClick={removeTodo} />
                {
                    // Düzenleme eğer false ise editleme ikonu görünür. Eğer düzenleme ikonuna tıklarsak true olacağı için düzenlendi ikonu çıkar.
                    editable ? <CiCircleCheck className='todo-icons' onClick={updateTodo} />

                        : <CiEdit className='todo-icons' onClick={() => setEditable(true)} />
                }

            </div>

        </div>
    )
}

export default Todo