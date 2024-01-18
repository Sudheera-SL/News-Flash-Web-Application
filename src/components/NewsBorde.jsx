import React,{useEffect,useState,useRef} from "react";
import NewsItem from "./newsItem";

 
const NewsBorde = ({category}) => {

    const [articles,setArticles] = useState([]);

    useEffect(()=>{
        
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`
        fetch(url).then(response=> response.json()).then(data=> setArticles (data.articles));

        
    },[category])


  return (
    <div>
       <h1 className="text-center">World Wide <span className="badge rounded-pill text-bg-danger">Latest </span> News</h1>
        {articles.map((news,index)=>{
            return <NewsItem key={index} title={news.title} description={news.description} src ={news.urlToImage} url={news.url} />
        })}   
    </div> 
  )
}

export default NewsBorde

