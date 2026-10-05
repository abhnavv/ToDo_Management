import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function AddTodo() {

    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('Pending')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {

        e.preventDefault()

        if (!title.trim()) {
            alert('Please enter a Todo title')
            return
        }

        const newTodo = {
            title: title,
            status: status
        }

        try {

            await axios.post(
                'http://localhost:3000/todos',
                newTodo
            )

            alert('Todo added successfully')

            navigate('/todos')

        } catch (error) {
            console.log(error)
            alert('Failed to add Todo')
        }
    }

    return (
        <div className='bg-gray-400 w-170 m-5 p-10 rounded-2xl'>

            <h1 className='text-2xl font-bold mb-5'>
                Add New Todo
            </h1>

            <form
                onSubmit={handleSubmit}
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
                    className='bg-red-600 hover:bg-red-700 text-white rounded-2xl w-40 py-2'
                >
                    Add To-Do
                </button>

            </form>

        </div>
    )
}

export default AddTodo