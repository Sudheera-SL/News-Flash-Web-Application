import { useState } from "react"
import Navbar from "./components/navbar"
import NewsBorde from "./components/newsBorde"
import NewsItem from "./components/newsItem"
import { Buttom } from "./components/Buttom"


 export const App = () => {
  const [category,setCategory] = useState("general")
   return (
  <div className="bg-secondary">
    <Navbar setCategory={setCategory}/>
    <NewsBorde category={category} />
    <Buttom/>
  </div>
   )
 } 

 export default App 
 