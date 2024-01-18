import { useState } from "react"
import Navbar from "./components/navbar"
import NewsBorde from "./components/newsBorde"
import NewsItem from "./components/newsItem"


 export const App = () => {
  const [category,setCategory] = useState("general")
   return (
  <div>
    <Navbar setCategory={setCategory}/>
    <NewsBorde category={category} />
  </div>
   )
 } 

 export default App 
 