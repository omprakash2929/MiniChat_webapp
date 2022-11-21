import React from 'react'
import Sidebar from '../componets/Sidebar'
import Chat from '../componets/Chat'
// import Register from '../Pages/Register';

export default function Home() {
  return (
   <>
    <div className="home">
        <div className="container">
       
         <Sidebar />
          <Chat  /> 
           
        </div>
    </div>
   </>
  )
}
