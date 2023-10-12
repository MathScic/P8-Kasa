import React from 'react'
import ReactDOM  from 'react-dom'
import './Main.css'

const Main = (props) => {
    const children = props.children
    console.log("children", children);

  return (
    <div className='main'>{children}</div>
  )
}



export default Main