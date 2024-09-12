import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../component/Layout'

const Navbar = () => {
  return (
    <div>
        <nav className='h-24 bg-slate-300 flex items-center gap-4 font-semibold justify-between px-10 text-3xl'>
            <Link to="/">Dreamway Travells</Link>
            

            <div className="flex gap-6">
    
     <Link to="/About">About</Link>
     <Link to="/Explore">Explore</Link>
      <Link to="/Suv">Suv</Link>
      <Link to="/PlanPage">PlanPage</Link>
    </div>
            
           
        </nav>
    </div>

  )
}

export default Navbar