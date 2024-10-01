import React from "react"
import { NavLink } from "react-router-dom"
import { Outlet } from "react-router-dom"

const AdminLayout = () =>{
return(

<div className="min-h-96">
<nav className="flex justify-between text-2xl items-center h-20  bg-gradient-to-r from-green-700 to-yellow-400">
<div className="flex justify-between items-center gap-3 mr-3 px-3 font-bold">
    <NavLink to="." className={({isActive})=>isActive?" text-orange-400":""}>Dashboard</NavLink>
<NavLink to="income" className={({isActive})=>isActive?"text-red-500  underline":""}>Income</NavLink>
<NavLink to="reviews" className={({isActive})=>isActive?"text-green-600 underline":""}>Reviews</NavLink>
<NavLink to="plans" className={({isActive})=>isActive?"text-yellow-500 underline":""}>Plans</NavLink>
</div>


</nav>

<Outlet/>
</div>
)

}
export default AdminLayout
