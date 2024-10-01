import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../../data/data'


const Plans = () => {
  return (
    <div className='flex flex-col gap-3 bg-blue-100 '>
            <h1 className='flex justify-center text-pink-400 text-5xl font-bold py-10'>PACKAGE DETAILS</h1>
        {
            data.map((item)=>{
                return (
                    <Link to={`/admin/plans/${item.id}`}>
                <div className='flex ml-3 mt-3 mb-3 gap-3 bg-orange-50 text-2xl'>
                    <div>
                        <img src={item.image} alt="" className='h-40 w-40' /></div>
                        <div className='flex justify-center gap-3 flex-col  '>
                            <h1 className='font-semibold'>{item.tittle}</h1>
                            <h1>{item.plan}</h1>
                        </div>
                </div>
                </Link>


             ) }
        )}
    </div>
  )
}

export default Plans