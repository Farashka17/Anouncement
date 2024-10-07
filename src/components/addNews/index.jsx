import React, { useState } from 'react';

const AddAnnouncement = () => {
    const [announcement, setAnnouncement] = useState({
        name: '',
        description: '',
        date: '',
        image: null,
        category: ''
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setAnnouncement({ ...announcement, [name]: files ? files[0] : value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
    };
    const addToNews = async (newsId)=>{
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
            user.anouncements.push({ newsId });
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
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-4" style={{ color: '#c0e9e9' }}>Add Announcement</h2>
            <input 
                type="text" 
                name="name" 
                placeholder="Announcement Name" 
                onChange={handleChange} 
                required 
                className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:ring-teal-300"
            />
            <textarea 
                name="description" 
                placeholder="Description" 
                onChange={handleChange} 
                required 
                className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:ring-teal-300"
            />
            <input 
                type="date" 
                name="date" 
                onChange={handleChange} 
                required 
                className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:ring-teal-300"
            />
            <input 
                type="file" 
                name="image" 
                accept="image/*" 
                onChange={handleChange} 
                required 
                className="w-full mb-4"
            />
            <input 
                type="text" 
                name="category" 
                placeholder="Category" 
                onChange={handleChange} 
                required 
                className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring focus:ring-teal-300"
            />
            <button 
                type="submit" 
                className="w-full p-2 bg-teal-400 text-white rounded hover:bg-teal-500"
                style={{ backgroundColor: '#c0e9e9' }}
            >
                Add Announcement
            </button>
        </form>
    );
};

export default AddAnnouncement;
