import { NavLink, Outlet } from "react-router"
import { Link } from "react-router"

export default function Services(){
    return(
        <div className="text-center font-bold">
        
        <h1 className="text-xl font-bold p-2  ">services</h1>
        <NavLink className="px-3 hover:text-red-500"
         to={'service1'}
         style={({isActive})=> {
            return isActive ? {color:'red'} : {};
        }}
         >Service 1</NavLink> 
        <NavLink className="px-3 hover:text-red-500" to={'service2'}
             style={({isActive})=> {
                return isActive ? {color:'red'} : {};
            }}
        >Service 2</NavLink> 
        <NavLink className="px-3 hover:text-red-500" to={'service3'}
             style={({isActive})=> {
                return isActive ? {color:'red'} : {};
            }}
        >Service 3</NavLink> 
        <Outlet/>
        </div>
    )
}