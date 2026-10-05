import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='ms-5 mt-3'>
      <Link to='/todos'>
        <h2 className='text-2xl font-bold'>
          To-Do Manager
        </h2>
      </Link>
    </div>
  )
}

export default Header