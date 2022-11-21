import "./style.scss";
import React from 'react'
import Login from  './Pages/Login';
import Home from './Pages/Home';
import Register from './Pages/Register';
import {useContext} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
  
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
 const {currentUser} = useContext(AuthContext);
 
 const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
 }
  return (
    <>

  <Router>
  <Routes>
    <Route path="/">
      <Route index element={
      <ProtectedRoute>
        <Home/>
      </ProtectedRoute>}  />
      <Route path="login" element={<Login/>}  />
      <Route path="register" element={<Register/>}  />
        
    </Route>
  </Routes>
  </Router>
    
    </>
  );
}

export default App;
