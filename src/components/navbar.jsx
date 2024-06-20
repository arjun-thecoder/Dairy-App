import React from 'react'

const Navbar = () => {
  return (
        <nav className="bg-slate-50 p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/logo.jpg" alt="Logo" className="h-15 w-24 mr-2" />
        <h1 className="text-blue-900 text-2xl font-bold">Gotan Dairy</h1>
      </div>
    </nav>
  )
}

export default Navbar
