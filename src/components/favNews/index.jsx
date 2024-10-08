import React, { useEffect, useState } from 'react'
import SingleNews from '../singleNews';

const FavNews = () => {
    const [favNews, setFavNews] = useState([]);
    const [news, setNews] = useState([]);
    const [user, setUser] = useState(null);
  
    const fetchUserData = async () => {
      const response = await fetch("http://localhost:3000/users");
      const data = await response.json();
      const currentUser = data.find(
        (user) => user.email === localStorage.getItem("userEmail")
      );
      setUser(currentUser);
      setFavNews(currentUser ? currentUser.favNews : []);
    };
  
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:3000/news");
      const data = await response.json();
      setNews(data);
    };
  
    useEffect(() => {
      fetchUserData();
      fetchProducts();
    }, [news]);
  
  return (
    <div className=' bg-[#c0e9e9] '>
    <div className='container max-w-[1128px] py-5 flex flex-wrap gap-6 items-center mx-auto'>
            {favNews.length > 0 ? (
              favNews.map((item, index) => {
                const singleNews = news.find(
                  (prod) => prod.name === item.newsName
                );
                return singleNews ? (
                  <SingleNews
                    key={index}
                    image={singleNews.image}
                    name={singleNews.name}
                    id={singleNews.id}
                    description={singleNews.description}
                  />
                ) : null;
              })
            ) : (
              <div className="flex items-center justify-center">
                <h1 className="font-bold text-[60px]">Items Not Found</h1>
              </div>
            )}
          </div>
    </div>
  

  )
}

export default FavNews