import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task, deleteTodo, completeTodo, editTodo}) => {
  return (
    <div className='Todo'>
        <p className={`${task.isComplete ? 'completed' : ''}`}  onClick={() => completeTodo(task.id)}>{task.task}</p>
          <div>
            <FontAwesomeIcon icon={faXmark} onClick={() => deleteTodo(task.id)} />
            <FontAwesomeIcon icon={faPen} onClick={() => editTodo(task.id)}  />
        </div>
    </div>
  )
}

export default Todo