import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from '../data/data'

const ExplorDetails = () => {
  const {id} = useParams()
  const plan = data.find((item)=>Number(item.id)===Number(id))
  console.log(plan);
  return (
    <div>
      <img className=' flex justify-center py-8 px-72' src={plan.image} alt="" />
      <h1 className='flex items-center text-2xl font-bold px-72'>{plan.tittle}</h1>
      <p className='font-semibold py-2 px-72 text-blue-800'>{plan.price}</p>
      <p className='px-72 text-green-500'>{plan.discription}</p>
      <p className=' px-72 text-yellow-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nobis voluptas adipisci iure asperiores, aspernatur vero placeat in aliquid, deserunt veritatis necessitatibus, sint quibusdam laborum libero fugit natus ea minima?</p>
      <button className='py-6 px-8 bg-green-300 '>plan details</button>
    </div>
  )
}

export default ExplorDetails