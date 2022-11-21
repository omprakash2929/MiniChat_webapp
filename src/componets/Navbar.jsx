import React from "react";
import {signOut} from "firebase/auth"
import { auth } from "../firebase";
import {useContext} from "react";
import { AuthContext } from "../context/AuthContext";
export default function Navbar() {
  
  const {currentUser} = useContext(AuthContext);
   
  return (
    <>
      <div className="navbar">
        <span className="logo">Mini Chat App</span>
        <div className="user">
           <img src={currentUser.photoURL }  type="image" alt="" /> 
           
           
          <span>{currentUser.displayName}</span>
          <button onClick={()=>signOut(auth)}>log-out</button>
        </div>
      </div>
    </>
  );
}
