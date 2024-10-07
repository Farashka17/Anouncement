import React, { useEffect, useState } from 'react'
import SingleNews from '../singleNews'
import useStore from '../../../store/store';

const Home = () => {
    const [news,setNews]= useState([]);
  const [filteredNews, setFilteredNews] = useState([]);

    const selectedCategoryName = useStore((state) => state.selectedCategoryName);
      const fetchData = async () => {
        const response = await fetch('http://localhost:3000/news');
        const result = await response.json();
        setNews(result);
      }
    
      const fetchNews = async () => {
        const resp = await fetch("http://localhost:3000/news");    
        const data = await resp.json();
        let newFilter = data;
        
       if (selectedCategoryName) {
        newFilter = [...newFilter].filter(
          (item) => item.name == selectedCategoryName
        );
      }
      setFilteredNews(newFilter);
    } 
      
      useEffect(() => {
        fetchData();
        fetchNews();
      }, [news]);

      useEffect(() => {
        fetchNews();
      }, [
        selectedCategoryName
      ]);
  return (
    <div className=' bg-[#c0e9e9] min-h-[100vh]'>
    <div className='container max-w-[1128px] py-5 flex flex-wrap gap-5  items-center mx-auto'>
         {filteredNews && filteredNews.map(singleNews =>
            <SingleNews key={singleNews.id} name={singleNews.name} id={singleNews.id} description={singleNews.description}/>
         )}
    </div>
    </div>

  )
}

export default Home