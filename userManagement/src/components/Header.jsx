import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">
            👥 Users Management
          </h1>
          <Link to='/add' className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">
            + Add User
          </Link>
        </div>
  )
}

export default Header