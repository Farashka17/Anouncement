import React, { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { TfiWorld } from "react-icons/tfi";
import { LuUser2 } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdNoteAdd } from "react-icons/md";

import useStore from "../../../../store/store";
const Header = () => { 
  const addToNews = async (newsId)=>{
    const userEmail = localStorage.getItem("userEmail") ;
    if(!userEmail){
     alert("Please log in to add news .");
     return;
    }}
  const setSelectedCategoryName = useStore(
    (state) => state.setSelectedCategoryName
  );
  const [categories, setCategories] = useState([]);

   
  const fetchCategories = async () => {
    const response = await fetch("http://localhost:3000/category");
    const data = await response.json();
    setCategories(data);
   };

   useEffect(() => {
    fetchCategories()
  
     }, []);
   
     const {resetFilters}=useStore();
     const {isLogin,setLogout}=useStore();

     const logout =()=>{
       localStorage.setItem("isLogin","false");
       localStorage.setItem("userEmail","");
       setLogout(false)
     }
   
  
  return (
   <>
     <div className=' bg-[#007878] '>
    <div className='container max-w-[1128px] py-5 flex justify-between items-center mx-auto'>
        {/* sol */}
   <Link to="/">     <button className='flex items-center gap-3 justify-center' onClick={resetFilters}>
        <div className='text-white'><TfiWorld /></div>
        <p className='text-[20px] text-white'>World News</p>
        </button></Link>
        {/* sag */}
        <div className='flex text-white font-medium items-center' >
          <ul className="flex gap-5">
          {categories.map((category) => (
              <li key={category.id} >
                <button onClick={() => setSelectedCategoryName(category.name) }>
                  <p>{category.name}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-[20px] items-center">
      <Link to="/login" >
       <button className="flex items-center gap-[10px]" onClick={()=>{logout()}}>
              <LuUser2 className="w-6 h-6 text-[#fff]" />
      {isLogin ?   <p className="text-[20px] font-medium text-[#fff]">Log out</p> 
         : <p className="text-[20px] font-medium text-[#fff]">Sign In</p>   }
            </button></Link>
       <Link to="/favNews" >       
       <button className="flex items-center gap-[10px]">
         <FaRegHeart className="w-6 h-6 text-[#fff]" />
              <p className="text-[20px] font-medium text-[#fff] ">Fav news</p>
            </button>
        </Link>
        {isLogin ?   
        <Link to="/addNews" >    
        <button className="flex items-center gap-[10px]" onClick={()=>
        {
          addToNews()
        }}>
        <MdNoteAdd className="w-6 h-6 text-[#fff]" />
              <p className="text-[20px] font-medium text-[#fff] ">Add news</p>
            </button>
             </Link > :
             <Link to="/" >   
              
             <button className="flex items-center gap-[10px]" onClick={()=>
             {
               addToNews()
             }}>
             <MdNoteAdd className="w-6 h-6 text-[#fff]" />
                   <p className="text-[20px] font-medium text-[#fff] ">Add news</p>
                 </button>
                  </Link >
}
          </div>
    </div>
    </div>
   </>
  );
};

export default Header;
