import React from 'react'
import "./logo.scss"

const Logo = () => {
  return (
    <div className='company-logo'>
        <img src="/images/forwhitelogo.png" className='h-100 w-100' alt="" />
    </div>
  )
}

export default Logo

export const ColorLogo=()=>{
  return (
    <div className='company-logo'>
        <img src="/images/logo.png" className='h-100 w-100' alt="" />
    </div>
  )
}