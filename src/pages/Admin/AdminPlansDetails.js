import React from 'react'
import {  Link, useParams } from 'react-router-dom'
import { data } from '../../data/data'



const AdminPlansDetails = () => {
    
        const {id} = useParams()
        console.log(id);
        const plan = data.find((item)=> Number (item.id) === Number(id))
        console.log(plan);
  return (
    <div className='flex flex-col bg-orange-50 px-6 py-3'>
    <div className='flex gap-6  text-2xl'>
                  <div >
                      <img src={plan.image} alt="" className='h-96 w-96' /></div>
                      <div className='flex justify-center gap-3 flex-col  '>
                           <h1>{plan.tittle}</h1>
                          <h1>{plan.rental}</h1>
                      </div>
              </div>
              <div >
                <h1 className='text-2xl font-bold'>{plan.tittle}</h1>
                <h1 className='mt-1'>{plan.price}</h1>
                <h1>{plan.discription}</h1>
                <h1 className='w-[600px] py-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis modi id totam nesciunt? Obcaecati quibusdam iusto voluptates? Perferendis possimus iste obcaecati, sapiente libero quo ratione rem molestiae dolorum fugit?</h1>
                <button className='mt-3 rounded-xl bg-red-200 hover:bg-red-500 text-slate-600 px-5 lg:px-5 py=2 text-2xl'><Link to= '/admin/plans'>back to all packaages</Link></button>
              </div>
  </div>
  )
}

export default AdminPlansDetails