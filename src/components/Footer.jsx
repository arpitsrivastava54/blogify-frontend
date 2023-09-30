import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='Footer bg-teal-900 text-white text-center py-5'>
       <h1 className='text-xl font-normal my-2'>All rights reserved Copyright &copy; by Arpit Srivastava </h1>
       <h2><i className="bi bi-globe mx-2"></i>visit our website : <Link className='text-orange-500 font-medium ' target="_blank" to={"https://arpitsrivastava.netlify.app"}>arpitsrivastava.com</Link></h2>
    </div>
  )
}

export default Footer