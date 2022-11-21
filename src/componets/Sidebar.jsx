import React,{useState} from 'react'
import Navbar from '../componets/Navbar'
import Search from '../componets/Search'
import Chats from "./Chats"

export default function Sidebar(props) {
  const [isOpen, setIsopen] = useState(true);
  
  const ToggleSidebar = () => {
    console.log("Click susefull")
      isOpen === true ? setIsopen(false) : setIsopen(true);
  }
  return (
    <>
   
      
    <i className="fa-solid fa-bars" onClick={ToggleSidebar} ></i>
      <div className={`sidebar ${isOpen === true ? 'active' : ''}`}  >
      <i className="fa-sharp fa-solid fa-xmark"  onClick={ToggleSidebar}></i>
        <Navbar />
        <Search />
        <Chats  />
    </div>
    

    </>
  )
}
