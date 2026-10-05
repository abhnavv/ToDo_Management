import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getTodos, deleteTodo } from '../services/api'

function Todos() {

  const [todos, setTodos] = useState([])

  const fetchTodos = async () => {
    try {
      const response = await getTodos()
      setTodos(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      'Are you sure you want to delete this Todo?'
    )

    if (!confirmDelete) {
      return
    }

    try {
      await deleteTodo(id)

      setTodos(
        todos.filter((todo) => todo.id !== id)
      )

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='p-5'>

      <div className='flex items-center justify-between mb-8'>

        <h1 className='text-2xl font-black'>
          Todo Management
        </h1>

        <Link to='/add-todo'>
          <button className='bg-blue-500 hover:bg-blue-600 text-white rounded-2xl px-4 py-2 shadow-2xl'>
            + Add Todo
          </button>
        </Link>

      </div>

      <div className='flex flex-wrap gap-5'>

        {todos.map((todo) => (

          <div
            key={todo.id}
            className='bg-gray-200 p-5 w-100 rounded-2xl shadow-lg'
          >

            <h1 className='font-bold text-xl'>
              {todo.title}
            </h1>

            <p className='mt-2'>
              Status:

              <span
                className={
                  todo.status === 'Completed'
                    ? 'text-green-600 font-bold ml-2'
                    : 'text-orange-600 font-bold ml-2'
                }
              >
                {todo.status}
              </span>
            </p>

            <div className='flex gap-5 mt-5'>

              <Link to={`/edit-todo/${todo.id}`}>
                <button className='bg-yellow-500 hover:bg-yellow-600 px-4 py-1 rounded-xl'>
                  Edit
                </button>
              </Link>

              <button
                onClick={() => handleDelete(todo.id)}
                className='bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-xl'
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  )
}

export default Todos