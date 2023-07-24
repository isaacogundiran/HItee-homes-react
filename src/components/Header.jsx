import React from 'react'
import logo from '../images/hitee1.png';

import {useLocation, useNavigate} from "react-router-dom"
export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  function pathMathRoute(route){
    if (route === location.pathname){
      return true
    }
  }
  return (
    <div className="bg-white border-b shadow-sm sticky top-0 z-50">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img src={logo} alt='My-logo' className="h-10 cursor-pointer" 
          onClick={()=>navigate("/")}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3] border-b-transparent ${pathMathRoute("/") && "text-black border-b-red-500"}`}
            onClick={()=>navigate("/")}>Home</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3] border-b-transparent ${pathMathRoute("/for-sale") && "text-black border-b-red-500"}`}
            onClick={()=>navigate("/for-sale")}>For Sale</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3] border-b-transparent ${pathMathRoute("/to-let") && "text-black border-b-red-500"}`}onClick={()=>navigate("/to-let")}>To Let</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3] border-b-transparent ${pathMathRoute("/request") && "text-black border-b-red-500"}`}onClick={()=>navigate("/request")}>Request</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3] border-b-transparent ${pathMathRoute("/register") && "text-black border-b-red-500"}`}onClick={()=>navigate("/register")}>Register</li>
            <li className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3] border-b-transparent ${pathMathRoute("/sign-in") && "text-black border-b-red-500"}`}onClick={()=>navigate("/sign-in")}>Sign In</li>
          </ul>cursor-pointer 
        </div>
      </header>
    </div>
  )
}
