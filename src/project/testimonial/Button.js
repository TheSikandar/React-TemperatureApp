import React from 'react'

const Button = ({text ="click", btnClass, icon}) => {
  return (
    <div>
      <button className={`btn ${btnClass}`}>
      {icon}
      {text}</button>
    </div>
  )
}

export default Button
