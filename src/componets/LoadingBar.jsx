import React from 'react'
import loading from "../image/loding_1.gif"
const LoadingBar = () => {
  return (
    <div>
         <img className='loading' style={{height: "6vh",margin: "0rem 7rem"}} src={loading} alt="" />

    </div>
  )
}

export default LoadingBar