import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import { v4 as uuidv4 } from "uuid";
import EditTodoForm from './EditTodoForm';

const TodoWrapper = () => {

    const [todos, setTodos] = useState([])

    const addTodos = (todo) => {
        setTodos([...todos, {id: uuidv4(), task: todo, isComplete: false, isEditing: false }])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter((item) => item.id !== id))
    }

    const completeTodo = (id) => {
        setTodos(todos.map((item) => {
            if (item.id === id) {
                return {...item, isComplete: !item.isComplete}
            }
            else {
                return item
            }
        }))
    }

    const editTodo = (id) => {
        setTodos(todos.map((item) => {
            if (item.id === id) {
                return {...item, isEditing: !item.isEditing}
            }
            else {
                return item
            }
        }))
    }

    const editTask = (task, id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
          )
        );
      };


    return (
        <div className='TodoWrapper'>
            <h1>Let`s Do Something</h1>
            <TodoForm addTodos={addTodos} />
            {
                todos.map((todo) =>
                    todo.isEditing ?
                        <EditTodoForm editTodo={editTask} task={todo} />
                        : <Todo key={todo.id} task={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} editTodo={editTodo} /> )
            }
            {/* {todos.map((todo) => <Todo key={todo.id} task={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />)} */}
      </div>

  )
}

export default TodoWrapper