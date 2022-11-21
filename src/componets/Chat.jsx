import React, { useContext } from 'react'
import Messages from './Messages'
import Input from './Input'
import cam from '../image/camera.png'
import add from "../image/add-user.png"
import more from "../image/more.png"
import { ChatContext } from '../context/ChatContext'

export default function Chat() {
  const {data} = useContext(ChatContext);
  
  return (
   <>
   <div className="chat">
    <div className="chatInfo">
    
      <span>{data.user?.displayName}</span>
      <div className="chatIcons">
     <img src={cam} alt="" />
      <img src={add} alt="" />
     <img src={more} alt="" />
      </div>
    </div>
      <Messages />
      <Input />
     
   </div>
   </>
  )
    
}
