import React from 'react'
import "./container.scss"
export const Container = ({ children }) => {
  return (
    <div className='container'>
      {children}
    </div>
  )
}
