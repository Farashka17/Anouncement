import React, { useEffect } from 'react'
import Sport from './../../assets/images/Sport.jpeg'
import { IoIosHeartEmpty } from "react-icons/io";

const SingleNews = ({name,id,description}) => {

  const addToFav = async (newsId)=>{
    const userEmail = localStorage.getItem("userEmail") ;
    if(!userEmail){
     alert("Please log in to add items to your cart.");
     return;
    }
    try {
     const response = await fetch("http://localhost:3000/users");
     const users = await response.json();
     const user = users.find(user => user.email == userEmail);
 
     if (user) {
       const existingNews = user.favNews.find(item => item.newsId === newsId);
 
       if (!existingNews) {
        user.favNews.push({ newsId });
        alert("News added to your cart!");
       } else{
         user.favNews.pop({ newsId });
        alert("news has alredy deleted")
       }
 
       const updateResponse = await fetch(`http://localhost:3000/users/${user.id}`, {
         method: "PUT",
         headers: {
           "Content-Type": "application/json",
         },
         body: JSON.stringify(user),
       });
 
      //  if (updateResponse.ok) {
      //    alert("News added to your cart!");
      //  } 
      //  else {
      //   alert("news has alredy deleted")
      //  }
     } else {
       alert("User not found.");
     }
   } catch (error) {
     console.error("Error adding to favNews:", error);
   }
   console.log(id,"id")
  
 };

 
  return (
    <div className='bg-[#F9F9F9] rounded-[8px] w-[360px] h-[508px] flex flex-col px-[24px] py-[28px] items-center justify-center gap-4'>
    <div className='flex items-baseline w-[200px] h-[200px]  relative'>
      <div  className='absolute bottom-0 w-50 h-50'><img src={Sport}/></div>
      <button className='absolute right-[-46px] top-[-26px]'onClick={()=>addToFav(id)
      } ><IoIosHeartEmpty className='w-6 h-6'/></button>
      </div> 
     <div>
       <p className='text-[16px] font-normal text-[#000] my-4'>{name}</p>
      <div className='flex items-center gap-[14px]'>
       <p className='text-[16px] font-semibold text-[#F75145]'>{description}</p>
   
       </div> 
      
     </div>
 </div>
  )
}

export default SingleNews