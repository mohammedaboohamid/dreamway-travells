import React from 'react'
import Layout from '../component/Layout'


const HomePage = () => {
  return (
  <Layout>
    
    
    <div>
    <img className='w-full h-screen brightness-50 relative'  src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
    <div className=' py-11 px-36 flex justify-center flex-col absolute top-96 left-48 text-white'>
    <h1 className=' text-3xl px-30'>You got your travel plan,we got you suv</h1>
    
    <p className='text-xl'>enjoy every moments in your life ,just travel</p>
    <button className='bg-slate-500 w-28 flex justify-center text-black font-semibold rounded-md '>find your plans</button>
    </div>
  
    
    </div>

  </Layout>
   
  )
}

export default HomePage