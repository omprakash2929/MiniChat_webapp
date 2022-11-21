import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth";
import {Link} from "react-router-dom";
import { auth } from "../firebase";
import LoadingBar from "../componets/LoadingBar";
export default function Login() {

  const [err, setErr]=useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);  
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
   
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/")
    } catch (err) {
      setErr(true);
      setLoading(false)
     
    }
   
  };
  return (
    <>
    <div className="formContainer">
      <div className="formWrapper">
          <span className='logo'>Mini Chat</span>
          <span className='title'>Login</span>
          <form onSubmit={handleSubmit}>
             
              <input type="email" placeholder='email' name="" id="" />
              <input type="password" placeholder='password' name="" id="" />
              <button disabled={loading}>Sing in</button>
              {loading && <LoadingBar />}
              
              {err && <span>Something went wrong</span>} 
          </form>
          <p>You don't have an account?<Link to="/register">Register</Link>  </p>
      </div>
    </div>
  </>
  )
}
