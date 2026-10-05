import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getTodo, updateTodo } from '../services/api'

function EditTodo() {

  const { id } = useParams()

  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('Pending')

  useEffect(() => {

    const fetchTodo = async () => {

      try {

        const response = await getTodo(id)

        setTitle(response.data.title)
        setStatus(response.data.status)

      } catch (error) {
        console.log(error)
      }
    }

    fetchTodo()

  }, [id])


  const handleUpdate = async (e) => {

    e.preventDefault()

    if (!title.trim()) {
      alert('Please enter a Todo title')
      return
    }

    const updatedTodo = {
      title: title,
      status: status
    }

    try {

      await updateTodo(id, updatedTodo)

      alert('Todo updated successfully')

      navigate('/todos')

    } catch (error) {

      console.log(error)

      alert('Failed to update Todo')

    }
  }


  return (
    <div className='bg-gray-400 w-170 m-5 p-10 rounded-2xl'>

      <h1 className='text-2xl font-bold mb-5'>
        Edit Todo
      </h1>

      <form
        onSubmit={handleUpdate}
        className='flex flex-col gap-5'
      >

        <input
          type='text'
          placeholder='Enter To-do Title'
          className='border border-blue-500 rounded-xl pl-4 p-2'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          className='border rounded-2xl p-2 w-50'
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >

          <option value='Pending'>
            Pending
          </option>

          <option value='Completed'>
            Completed
          </option>

        </select>

        <button
          type='submit'
          className='bg-green-600 hover:bg-green-700 text-white rounded-2xl w-40 py-2'
        >
          Update To-Do
        </button>

      </form>

    </div>
  )
}

export default EditTodo