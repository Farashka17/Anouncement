import React from "react";
import { IoDiamond } from "react-icons/io5";

import { LuUser2 } from "react-icons/lu";
import { Link } from "react-router-dom";


const Header = () => { 
   const {isLogin,setLogout}=useStore();

  const logout =()=>{
    localStorage.setItem("isLogin","false");
    localStorage.setItem("userEmail","");
    setLogout(false)
  }

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  
          <IoDiamond className="w-6 h-6 text-pink-500" />
          <span class="ml-3 text-xl">Tailblocks</span>
        
        <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <p class="mr-5 hover:text-gray-900">First Link</p>
          <p class="mr-5 hover:text-gray-900">Second Link</p>
          <p class="mr-5 hover:text-gray-900">Third Link</p>
          <p class="mr-5 hover:text-gray-900">Fourth Link</p>
        </nav>
        <Link to="/login">
          {" "}
          <button
            className="flex items-center gap-[10px]"
            onClick={() => {
              logout();
            }}
          >
            <LuUser2 className="w-6 h-6" />
            {isLogin ? (
              <p className="text-[14px] font-medium text-[#2E2E2E]">Log out</p>
            ) : (
              <p className="text-[14px] font-medium text-[#2E2E2E]">Sign In</p>
            )}
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
